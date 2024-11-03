const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    gender: String,
    dateOfBirth: Date,
    address: {
      line1: String,
      city: String,
      state: String,
      pinCode: String,
      country: String,
    },
    emergencyContact: {
      name: String,
      relation: String,
      contactNumber: String,
    },
    medicalInfo: { type: String, default: null },
    questions: {
      heartCondition: String,
      chestPainActivity: String,
      chestPainRest: String,
      dizziness: String,
      boneOrJointProblem: String,
      bloodPressureMedication: String,
      otherReason: String,
    },
    category: String,
    nameOnBib: String,
    clubParticipation: { type: String, default: null },
    couponCode: { type: String, default: null },
    consent: Boolean,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Registration", RegistrationSchema);
