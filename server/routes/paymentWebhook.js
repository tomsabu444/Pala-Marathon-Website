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

  console.log("Webhook Payload:", payload); // Log the raw payload for debugging
  console.log("Received Razorpay Signature:", razorpaySignature); // Log the received signature

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  console.log("Expected Signature:", expectedSignature); // Log the expected signature

  if (razorpaySignature === expectedSignature) {
    console.log("Signature validation passed."); // Log successful validation
    next();
  } else {
    console.error("Signature validation failed."); // Log failed validation
    res.status(400).json({ error: "Invalid webhook signature" });
  }
});

router.post("/webhook", async (req, res) => {
  const event = req.body;

  console.log("Webhook Event Received:", event.event); // Log the received event type

  if (event.event === "payment.captured") {
    console.log("Processing payment captured event."); // Log specific event being processed
    try {
      const { order_id, payment_id, amount, method } = event.payload.payment.entity;

      console.log("Order ID:", order_id);
      console.log("Payment ID:", payment_id);
      console.log("Amount:", amount);
      console.log("Payment Method:", method);

      // Step 5: Update the registration/payment status in the database
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
        console.error("Registration not found for order_id:", order_id);
        return res.status(404).json({ error: "Registration user not found" });
      }

      console.log("Registration updated successfully:", registration);

      // Step 8: Generate QR code and send receipt email
      const qrCodeData = await QRCode.toDataURL(registration.register_id);
      console.log("QR Code Generated:", qrCodeData); // Log generated QR code

      const emailResult = await EmailNotification.sendEmail({
        registration,
        qrCodeData,
      });

      if (!emailResult.success) {
        console.error("Email sending failed:", emailResult.error);
        return res.status(500).json({
          success: false,
          message: "Payment verified but failed to send email",
        });
      }

      console.log("Email sent successfully to:", registration.data.email);

      res.status(200).json({
        success: true,
        message: "Payment captured, registration updated, and email sent.",
      });
    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).json({
        error: "Internal server error while processing webhook.",
      });
    }
  } else {
    console.warn("Unhandled webhook event:", event.event);
    res.status(200).json({ message: "Webhook received but not handled." });
  }
});

module.exports = router;
