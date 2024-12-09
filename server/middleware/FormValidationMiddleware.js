const { z } = require("zod");

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(/^\+91\d{10}$/, "Phone number must be in format +91xxxxxxxxxx"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
  }),
  dateOfBirth: z
    .string().date("Invalid date format")
    .min(1, "Date of Birth is required")
    .refine(
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
    pinCode: z.string().regex(/^\d{6}$/, "PIN code must be 6 digits"),
    country: z.string().min(1, "Country is required"),
  }),
  emergencyContact: z.object({
    name: z.string().min(1, "Emergency Contact Name is required"),
    relation: z.string().min(1, "Relation with Emergency Contact is required"),
    contactNumber: z
      .string()
      .regex(
        /^\+91\d{10}$/,
        "Emergency Contact Number must be in format +91xxxxxxxxxx"
      ),
  }),
  medicalInfo: z.string().optional(),
  questions: z.object({
    heartCondition: z.enum(["yes", "no"], {
      required_error: "Heart Condition question is required",
    }),
    chestPainActivity: z.enum(["yes", "no"], {
      required_error: "Chest Pain Activity question is required",
    }),
    chestPainRest: z.enum(["yes", "no"], {
      required_error: "Chest Pain Rest question is required",
    }),
    dizziness: z.enum(["yes", "no"], {
      required_error: "dizziness question is required",
    }),
    boneOrJointProblem: z.enum(["yes", "no"], {
      required_error: "Bone Or Joint Problem question is required",
    }),
    bloodPressureMedication: z.enum(["yes", "no"], {
      required_error: "Blood Pressure Medication question is required",
    }),
    otherReason: z.enum(["yes", "no"], {
      required_error: "other Reason question is required",
    }),
  }),

  category: z.enum(["HalfMarathon", "FamilyFunRun", "10KmMarathon"], {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: `Invalid category !`,
        };
      }
      return { message: ctx.defaultError };
    },
  }),
  nameOnBib: z
    .string()
    .min(1, "Name on BIB is required")
    .max(12, "Name on BIB should be less than 12 characters"),
  clubParticipation: z.string().optional(),
  couponCode: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
});

//! Middleware for validating data
const FormValidationMiddleware = (req, res, next) => {
  try {
    formSchema.parse(req.body);
    next();
  } catch (error) {
    const errorMessages = error.errors.map((err) => err.message);
    res.status(400).json({ errors: errorMessages });
  }
};

module.exports = { FormValidationMiddleware };
