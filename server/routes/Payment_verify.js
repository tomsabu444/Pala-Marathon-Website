const express = require("express");
const crypto = require("crypto");
const Registration = require("../models/RegistrationSchema");

const router = express.Router();

router.post("/payment/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, registrationId } = req.body;

    // Step 1: Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !registrationId) {
      return res.status(400).json({ error: "Missing required fields for verification" });
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

    // Step 4: Update the registration/payment status in the database
    const registration = await Registration.findOneAndUpdate(
      { register_id: registrationId },
      {
        $set: {
          paymentStatus: "Paid",
          razorpayDetails: {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
          },
        },
      },
      { new: true }
    );

    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    // Step 5: Respond with success
    res.status(200).json({ success: true, message: "Payment verified successfully" });
  } catch (error) {
    console.error("Error during payment verification:", error);
    res.status(500).json({ error: "Internal server error during verification" });
  }
});

module.exports = router;
