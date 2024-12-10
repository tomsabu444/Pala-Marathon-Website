const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema(
  {
    register_id: {
      type: String,
      unique: true,
      required: true,
    },
    data: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      gender: { type: String, required: true },
      dateOfBirth: { type: Date, required: true },
      address: {
        line1: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pinCode: { type: String, required: true },
        country: { type: String, required: true },
      },
      emergencyContact: {
        name: { type: String, required: true },
        relation: { type: String, required: true },
        contactNumber: { type: String, required: true },
      },
      medicalInfo: { type: String, default: null },
      questions: {
        heartCondition: { type: String, default: null },
        chestPainActivity: { type: String, default: null },
        chestPainRest: { type: String, default: null },
        dizziness: { type: String, default: null },
        boneOrJointProblem: { type: String, default: null },
        bloodPressureMedication: { type: String, default: null },
        otherReason: { type: String, default: null },
      },
      category: { type: String, required: true },
      nameOnBib: { type: String, required: true },
      clubParticipation: { type: String, default: null },
      couponCode: { type: String, default: null },
      consent: { type: Boolean, required: true },
      description: { type: String },
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    razorpayDetails: {
      razorpay_order_id: { type: String },
      razorpay_payment_id: { type: String },
      razorpay_signature: { type: String },
      amount: { type: Number },
      paymentMethod: { type: String },
    },
  },
  { versionKey: false, timestamps: true } // Enable timestamps for createdAt and updatedAt
);

module.exports = mongoose.model("Registration", RegistrationSchema);
