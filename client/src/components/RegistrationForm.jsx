import {
  Step,
  StepLabel,
  Stepper,
  Button,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Updated Zod schema for Step 0 with additional fields
const basicDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(10, "Phone number should be at least 10 digits")
    .regex(/^\d+$/, "Phone number must be numeric"),
  email: z.string().email("Invalid email address"),
  gender: z.string().min(1, "Gender is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  nameOnBib: z.string().min(1, "Name on BIB is required"),
  address: z.object({
    line1: z.string().min(1, "Address line 1 is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    pinCode: z
      .string()
      .min(5, "PIN code must be at least 5 digits")
      .regex(/^\d+$/, "PIN code must be numeric"),
    country: z.string().min(1, "Country is required"),
  }),
});

const medicalDetailsSchema = z.object({
  emergencyContact: z.string().min(1, "Emergency Contact is required"),
  medicalInfo: z.string().optional(),
});

const categoryConsentSchema = z.object({
  category: z.string().min(1, "Category is required"),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
});

const stepSchemas = [
  basicDetailsSchema,
  medicalDetailsSchema,
  categoryConsentSchema,
];

function RegistrationForm() {
  const steps = [
    "Basic details",
    "Medical and Emergency details",
    "Category and Consent",
  ];

  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm({
    resolver: zodResolver(stepSchemas[activeStep]),
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    if (activeStep < steps.length - 1) {
      const isStepValid = await trigger();
      if (isStepValid) setActiveStep((prev) => prev + 1);
    } else {
      console.log("Form submitted", data);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="py-7 mx-auto">
      {/* Stepper start */}
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          padding: "20px",
          justifyContent: "center",
          width: "100%",
          "& .MuiStepConnector-root": {
            "&.Mui-active, &.Mui-completed": {
              "& .MuiStepConnector-line": {
                borderColor: "#9D356D",
                marginTop: ".5rem",
                borderWidth: "2px",
              },
            },
            "& .MuiStepConnector-line": {
              borderColor: "#E0E0E0",
              marginTop: ".5rem",
              borderWidth: "2px",
            },
          },
        }}
      >
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepIcon-root": {
                fontSize: "2.5rem",
                "&.Mui-active": { color: "#9D356D" },
                "&.Mui-completed": { color: "#9D356D" },
              },
            }}
          >
            <StepLabel
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                whiteSpace: "normal",
                overflowWrap: "break-word",
                textAlign: "center",
                color: index === activeStep ? "#9D356D" : "grey",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* Stepper end */}

      {/* Form Starting */}
      <div className="mx-5">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === 0 && (
              <Box sx={{ my: 3 }}>
                <TextField
                  label="Full Name *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                  {...methods.register("name")}
                />
                <TextField
                  label="Phone Number *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                  {...methods.register("phone")}
                />
                <TextField
                  label="Email *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  {...methods.register("email")}
                />
                <TextField
                  label="Gender *"
                  variant="outlined"
                  margin="normal"
                  select
                  error={!!errors.gender}
                  helperText={errors.gender ? errors.gender.message : ""}
                  {...methods.register("gender")}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <TextField
                  label="Date of Birth *"
                  variant="outlined"
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ""}
                  {...methods.register("dateOfBirth")}
                />
                <TextField
                  label="Name on BIB *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.nameOnBib}
                  helperText={errors.nameOnBib ? errors.nameOnBib.message : ""}
                  {...methods.register("nameOnBib")}
                />
                <TextField
                  label="Address Line 1 *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.line1}
                  helperText={errors.address?.line1 ? errors.address.line1.message : ""}
                  {...methods.register("address.line1")}
                />
                <TextField
                  label="City *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.city}
                  helperText={errors.address?.city ? errors.address.city.message : ""}
                  {...methods.register("address.city")}
                />
                <TextField
                  label="State *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.state}
                  helperText={errors.address?.state ? errors.address.state.message : ""}
                  {...methods.register("address.state")}
                />
                <TextField
                  label="PIN Code *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.pinCode}
                  helperText={errors.address?.pinCode ? errors.address.pinCode.message : ""}
                  {...methods.register("address.pinCode")}
                />
                <TextField
                  label="Country *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.country}
                  helperText={errors.address?.country ? errors.address.country.message : ""}
                  {...methods.register("address.country")}
                />
              </Box>
            )}

            {/* Step 1 and Step 2 remain unchanged */}
            {activeStep === 1 && (
              <Box sx={{ my: 3 }}>
                <TextField
                  label="Emergency Contact"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.emergencyContact}
                  helperText={
                    errors.emergencyContact
                      ? errors.emergencyContact.message
                      : ""
                  }
                  {...methods.register("emergencyContact")}
                />
                <TextField
                  label="Medical Information"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...methods.register("medicalInfo")}
                />
              </Box>
            )}

            {activeStep === 2 && (
              <Box sx={{ my: 3 }}>
                <TextField
                  label="Category"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.category}
                  helperText={errors.category ? errors.category.message : ""}
                  {...methods.register("category")}
                />
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <label>
                    <input
                      type="checkbox"
                      {...methods.register("consent")}
                      style={{ marginRight: "0.5rem" }}
                    />
                    Consent
                  </label>
                  {errors.consent && (
                    <p style={{ color: "red", marginLeft: "1rem" }}>
                      {errors.consent.message}
                    </p>
                  )}
                </Box>
              </Box>
            )}

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
              >
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </form>
        </FormProvider>
      </div>
      {/* Form ending */}
    </div>
  );
}

export default RegistrationForm;
