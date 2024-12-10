import { z } from "zod";

const basicDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\+91\d{10}$/, "Phone number be +91xxxxxxxxxx"),
  email: z.string().email("Invalid email address"),
  gender: z
    .enum(["male", "female", "other"], {
      required_error: "Please select your gender",
      invalid_type_error: "Please select a valid gender option",
    })
    .refine((val) => val !== undefined && val !== null, {
      message: "Gender selection is required",
    }),
  dateOfBirth: z
    .string().date("Date of Birth is required")
    .min(1, "Date of Birth is required")
    .refine(
      (date) => {
        const currentDate = new Date();
        const birthDate = new Date(date);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        // Check if the user is at least 12 years old
        return (
          age > 12 ||
          (age === 12 &&
            currentDate >= birthDate.setFullYear(birthDate.getFullYear() + 12))
        );
      },
      {
        message: "Participant must be at least 12 years old",
      }
    ),

  address: z.object({
    line1: z.string().min(1, "Address line 1 is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    pinCode: z
      .string()
      .min(6, "PIN code is not valid")
      .regex(/^\d+$/, "PIN code must be numeric"),
    country: z.string().min(1, "Country is required"),
  }),
});

const medicalDetailsSchema = z.object({
  emergencyContact: z.object({
    name: z.string().min(1, "Emergency Contact Name is required"),
    relation: z.string().min(1, "Relation with Emergency Contact is required"),
    contactNumber: z
      .string()
      .regex(
        /^\+91\d{10}$/,
        "Emergency Contact Number Phone number be +91xxxxxxxxxx"
      ),
  }),
  medicalInfo: z.string().optional(),
  questions: z.object({
    heartCondition: z.enum(["yes", "no"], {
      required_error: "This question is required",
      invalid_type_error: "Please select yes or no",
    }),
    chestPainActivity: z.enum(["yes", "no"], {
      required_error: "This question is required",
      invalid_type_error: "This question is required",
    }),
    chestPainRest: z.enum(["yes", "no"], {
      required_error: "This question is required",
      invalid_type_error: "This question is required",
    }),
    dizziness: z.enum(["yes", "no"], {
      required_error: "This question is required",
      invalid_type_error: "This question is required",
    }),
    boneOrJointProblem: z.enum(["yes", "no"], {
      required_error: "This question is required",
      invalid_type_error: "This question is required",
    }),
    bloodPressureMedication: z.enum(["yes", "no"], {
      required_error: "This question is required",
      invalid_type_error: "This question is required",
    }),
    otherReason: z.enum(["yes", "no"], {
      required_error: "This question is required",
      invalid_type_error: "This question is required",
    }),
  }),
});

const categoryConsentSchema = z.object({
  category: z.string().min(1, "Category is required"),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
  nameOnBib: z
    .string()
    .min(1, "Name on BIB is required")
    .max(12, "Name on BIB should be less than 12 characters"),
  clubParticipation: z.string().optional(),
  couponCode: z.string().optional(),
});

export const stepSchemas = [
  basicDetailsSchema,
  medicalDetailsSchema,
  categoryConsentSchema,
];
