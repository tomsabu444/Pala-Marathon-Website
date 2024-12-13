const express = require("express");
const crypto = require("crypto");
const QRCode = require("qrcode");
const Registration = require("../models/RegistrationSchema");
const EmailNotification = require("./EmailNotification");

const router = express.Router();

// Middleware to validate Razorpay webhook signature
router.use((req, res, next) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  const razorpaySignature = req.headers["x-razorpay-signature"];
  const payload = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  if (razorpaySignature === expectedSignature) {
    next();
  } else {
    res.status(400).json({ error: "Invalid webhook signature" });
  }
});

router.post("/", async (req, res) => {
  const event = req.body;

  if (event.event === "payment.captured") {
    try {
      // Step 1: Extract payment details
      const {
        order_id,
        id: payment_id,
        amount,
        method,
      } = event.payload.payment.entity;

      // Step 2: Check if the payment is already processed
      const existingPayment = await Registration.findOne({
        "razorpayDetails.razorpay_payment_id": payment_id,
      });

      if (existingPayment && existingPayment.paymentStatus === "Paid") {
        return res
          .status(400)
          .json({ message: "Payment already processed and marked as Paid." });
      }

      // Step 3: Update payment status and save details
      const registration = await Registration.findOneAndUpdate(
        { "razorpayDetails.razorpay_order_id": order_id },
        {
          $set: {
            paymentStatus: "Paid",
            razorpayDetails: {
              razorpay_order_id: order_id,
              razorpay_payment_id: payment_id,
              amount: amount / 100, // Convert amount from paisa to INR
              paymentMethod: method,
            },
          },
        },
        { new: true }
      );

      if (!registration) {
        return res.status(404).json({ error: "Registration user not found" });
      }

      // Step 4: Generate QR code and send email
      const qrCodeData = await QRCode.toDataURL(registration.register_id);
      const emailResult = await EmailNotification.sendEmail({
        registration,
        qrCodeData,
      });

      if (!emailResult.success) {
        return res.status(500).json({
          success: false,
          message: "Payment verified but failed to send email",
        });
      }

      // Step 5: Respond with success
      res.status(200).json({
        success: true,
        message: "Payment captured, registration updated, and email sent.",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error while processing webhook.",
      });
    }
  } else {
    res.status(200).json({ message: "Webhook received but not handled." });
  }
});

module.exports = router;
