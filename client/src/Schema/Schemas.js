import { z } from "zod";

const basicDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\+91\d{10}$/, "Phone number should be +91xxxxxxxxxx"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select your gender" }),
  dateOfBirth: z.string().refine(
    (date) => {
      const currentDate = new Date();
      const birthDate = new Date(date);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age >= 12;
    },
    { message: "Participant must be at least 12 years old" }
  ),
  address: z.object({
    line1: z.string().min(1, "Address line 1 is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    pinCode: z.string().min(5, "PIN code must be at least 5 digits").regex(/^\d+$/, "PIN code must be numeric"),
    country: z.string().min(1, "Country is required"),
  }),
});

const medicalDetailsSchema = z.object({
  emergencyContact: z.object({
    name: z.string().min(1, "Emergency Contact Name is required"),
    relation: z.string().min(1, "Relation with Emergency Contact is required"),
    contactNumber: z.string().regex(/^\+91\d{10}$/, "Emergency Contact Number must be +91xxxxxxxxxx"),
  }),
  medicalInfo: z.string().optional(),
  questions: z.object({
    heartCondition: z.enum(["yes", "no"], { required_error: "This question is required" }),
    chestPainActivity: z.enum(["yes", "no"], { required_error: "This question is required" }),
    chestPainRest: z.enum(["yes", "no"], { required_error: "This question is required" }),
    dizziness: z.enum(["yes", "no"], { required_error: "This question is required" }),
    boneOrJointProblem: z.enum(["yes", "no"], { required_error: "This question is required" }),
    bloodPressureMedication: z.enum(["yes", "no"], { required_error: "This question is required" }),
    otherReason: z.enum(["yes", "no"], { required_error: "This question is required" }),
  }),
});

const categoryConsentSchema = z.object({
  category: z.string().min(1, "Category is required"),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
  nameOnBib: z.string().min(1, "Name on BIB is required").max(4, "Name on BIB should be less than 4 characters"),
  clubParticipation: z.string().optional(),
  couponCode: z.string().optional(),
});


export const stepSchemas = [basicDetailsSchema, medicalDetailsSchema, categoryConsentSchema];
