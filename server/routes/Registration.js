const express = require("express");
const router = express.Router();
const Registration = require("../models/RegistrationSchema");
const {
  FormValidationMiddleware,
} = require("../middleware/FormValidationMiddleware");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/payment/order", FormValidationMiddleware, async (req, res) => {
  try {
    // Dynamically import nanoid within the route handler
    const { customAlphabet } = await import("nanoid");
    const nanoid = customAlphabet(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      10
    );

    const {
      name,
      phone,
      email,
      gender,
      dateOfBirth,
      address,
      emergencyContact,
      medicalInfo,
      questions,
      category,
      nameOnBib,
      clubParticipation,
      couponCode,
      consent,
    } = req.body;

    //! Generate the `register_id` based on category and unique ID
    const categoryCodes = {
      HalfMarathon: "HALF",
      "10KmMarathon": "10KM",
      FamilyFunRun: "FAMILY",
    };
    const categoryCode = categoryCodes[category];
    const uniqueId = nanoid(10);
    const register_id = `PALAMARATHON-${categoryCode}-${uniqueId}`;

    //! Format the data according to the schema
    const formattedData = {
      register_id,
      data: {
        name,
        phone,
        email,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        address: {
          line1: address.line1,
          city: address.city,
          state: address.state,
          pinCode: address.pinCode,
          country: address.country,
        },
        emergencyContact: {
          name: emergencyContact.name,
          relation: emergencyContact.relation,
          contactNumber: emergencyContact.contactNumber,
        },
        medicalInfo: medicalInfo || null,
        questions: {
          heartCondition: questions?.heartCondition || null,
          chestPainActivity: questions?.chestPainActivity || null,
          chestPainRest: questions?.chestPainRest || null,
          dizziness: questions?.dizziness || null,
          boneOrJointProblem: questions?.boneOrJointProblem || null,
          bloodPressureMedication: questions?.bloodPressureMedication || null,
          otherReason: questions?.otherReason || null,
        },
        category,
        nameOnBib,
        clubParticipation: clubParticipation || null,
        couponCode: couponCode || null,
        consent,
      },
    };

    const registration = new Registration(formattedData);
    await registration.save();

    // Pricing based on category
    const PRICING = {
      HalfMarathon: 900,
      "10KmMarathon": 700,
      FamilyFunRun: 500,
    };

    const razorpayOrder = await razorpay.orders.create({
      amount: PRICING[category] * 100,
      currency: "INR",
      receipt: register_id,
    });

    // Respond with registration ID and Razorpay order details
    res.status(201).json({
      message: "Order created successfully!",
      registrationId: register_id,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Error processing order",
      details: error.message || "An unknown error occurred",
    });
  }
});

module.exports = router;
