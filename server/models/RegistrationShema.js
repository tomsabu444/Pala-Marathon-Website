const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
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
    medicalInfo: { type: String },
    questions: {
      heartCondition: { type: String, enum: ["yes", "no"], required: true },
      chestPainActivity: { type: String, enum: ["yes", "no"], required: true },
      chestPainRest: { type: String, enum: ["yes", "no"], required: true },
      dizziness: { type: String, enum: ["yes", "no"], required: true },
      boneOrJointProblem: { type: String, enum: ["yes", "no"], required: true },
      bloodPressureMedication: {
        type: String,
        enum: ["yes", "no"],
        required: true,
      },
      otherReason: { type: String, enum: ["yes", "no"], required: true },
    },
    category: { type: String, required: true },
    consent: { type: Boolean, required: true },
    nameOnBib: { type: String, maxlength: 4, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Registration", RegistrationSchema);
