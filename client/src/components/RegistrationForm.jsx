import {
  Step,
  StepLabel,
  Stepper,
  Button,
  TextField,
  Box,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Updated Zod schema with more explicit gender requirement message
const basicDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(10, "Phone number should be at least 10 digits")
    .regex(/^\d+$/, "Phone number must be numeric"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
    invalid_type_error: "Please select a valid gender option",
  }).refine((val) => val !== undefined && val !== null, {
    message: "Gender selection is required"
  }),
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
    register,
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
                  {...register("name")}
                />
                <TextField
                  label="Phone Number *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                  {...register("phone")}
                />
                <TextField
                  label="Email *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  {...register("email")}
                />
                
                {/* Updated Gender Selection with Required Indication */}
                <FormControl 
                  required
                  error={!!errors.gender}
                  component="fieldset"
                  sx={{ 
                    display: 'block', 
                    my: 2,
                    '& .MuiFormLabel-asterisk': {
                      color: errors.gender ? '#d32f2f' : 'inherit'
                    }
                  }}
                >
                  <FormLabel 
                    component="legend"
                    sx={{
                      color: errors.gender ? '#d32f2f' : 'inherit',
                      '&.Mui-focused': {
                        color: errors.gender ? '#d32f2f' : '#9D356D'
                      }
                    }}
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup 
                    row 
                    aria-required="true"
                    sx={{ mt: 1 }}
                  >
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio 
                          {...register("gender", { required: "Gender selection is required" })}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio 
                          {...register("gender", { required: "Gender selection is required" })}
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={
                        <Radio 
                          {...register("gender", { required: "Gender selection is required" })}
                        />
                      }
                      label="Other"
                    />
                  </RadioGroup>
                  {errors.gender && (
                    <FormHelperText sx={{ color: '#d32f2f', ml: 0 }}>
                      {errors.gender.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <TextField
                  label="Date of Birth *"
                  variant="outlined"
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ""}
                  {...register("dateOfBirth")}
                />
                <TextField
                  label="Name on BIB *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.nameOnBib}
                  helperText={errors.nameOnBib ? errors.nameOnBib.message : ""}
                  {...register("nameOnBib")}
                />
                <TextField
                  label="Address Line 1 *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.line1}
                  helperText={errors.address?.line1 ? errors.address.line1.message : ""}
                  {...register("address.line1")}
                />
                <TextField
                  label="City *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.city}
                  helperText={errors.address?.city ? errors.address.city.message : ""}
                  {...register("address.city")}
                />
                <TextField
                  label="State *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.state}
                  helperText={errors.address?.state ? errors.address.state.message : ""}
                  {...register("address.state")}
                />
                <TextField
                  label="PIN Code *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.pinCode}
                  helperText={errors.address?.pinCode ? errors.address.pinCode.message : ""}
                  {...register("address.pinCode")}
                />
                <TextField
                  label="Country *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.country}
                  helperText={errors.address?.country ? errors.address.country.message : ""}
                  {...register("address.country")}
                />
              </Box>
            )}

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
                  {...register("emergencyContact")}
                />
                <TextField
                  label="Medical Information"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("medicalInfo")}
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
                  {...register("category")}
                />
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <label>
                    <input
                      type="checkbox"
                      {...register("consent")}
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
    </div>
  );
}

export default RegistrationForm;