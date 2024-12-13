const express = require("express");
const crypto = require("crypto");
const Registration = require("../models/RegistrationSchema");
const QRCode = require("qrcode");
const EmailNotification = require("./EmailNotification");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      registrationId,
    } = req.body;

    // Step 1: Validate required fields
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !registrationId
    ) {
      return res
        .status(400)
        .json({ error: "Missing required fields for verification" });
    }

    // Step 2: Generate the expected signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    // Step 3: Compare the signatures
    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ error: "Invalid payment signature" });
    }

    // Step 4: Fetch payment details from Razorpay API
    const razorpayHeaders = {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_KEY_SECRET
      ).toString("base64")}`,
    };

    const razorpayPaymentDetails = await axios.get(
      `https://api.razorpay.com/v1/payments/${razorpay_payment_id}`,
      {
        headers: razorpayHeaders,
      }
    );
    const paymentAmount = razorpayPaymentDetails.data.amount / 100; // Convert amount from paisa to INR
    const paymentMethod = razorpayPaymentDetails.data.method;

    // Step 5: Update the registration/payment status in the database
    // const registration = await Registration.findOneAndUpdate(
    //   { register_id: registrationId },
    //   {
    //     $set: {
    //       paymentStatus: "Paid",
    //       razorpayDetails: {
    //         razorpay_order_id,
    //         razorpay_payment_id,
    //         razorpay_signature,
    //         amount: paymentAmount, // Convert amount from paisa to INR
    //         paymentMethod,
    //       },
    //     },
    //   },
    //   { new: true }
    // );

    // if (!registration) {
    //   return res.status(404).json({ error: "Registration user not found" });
    // }

    // Step 6: Generate QR code for the registrationId
    const qrCodeData = await QRCode.toDataURL(registrationId); // Generate a QR code for registrationId

    // Step 7: Respond with success and send QR code to the frontend
    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      totalamount: paymentAmount,
      qrCodeData, // Sending the QR code data URL to the frontend
    });

    // Step 8: Send receipt email
    // const emailResult = await EmailNotification.sendEmail({
    //   registration,
    //   qrCodeData,
    // });

    // if (!emailResult.success) {
    //   console.error("Email sending failed:", emailResult.error);
    //   return res.status(500).json({
    //     success: false,
    //     message: "Payment verified but failed to send email",
    //   });
    // }
  } catch (error) {
    console.error("Error during payment verification:", error);
    res
      .status(500)
      .json({ error: "Internal server error during verification" });
  }
});

module.exports = router;
