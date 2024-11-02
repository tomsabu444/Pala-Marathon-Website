import {
  Step,
  StepLabel,
  Stepper,
  Button,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  dateOfBirth: z.string().min(1, "Date of Birth is required"),

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
  consent: z.boolean().refine((val) => val === true, "Consent is Required"),
  nameOnBib: z.string().min(1, "Name on BIB is required").max(4, "Name on BIB should be less that 4 characters"),
  clubParticipation: z.string().optional(), 
  couponCode: z.string().optional(),
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
    defaultValues: {
      gender: null,
      category: "",
      clubParticipation: "no",
      consent: false,
      printedNameAcknowledgment: false,
      couponCode: "",
      questions: {
        heartCondition: null,
        chestPainActivity: null,
        chestPainRest: null,
        dizziness: null,
        boneOrJointProblem: null,
        bloodPressureMedication: null,
        otherReason: null,
      },
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors },
    register,
    watch,
    setValue,
  } = methods;


  // Use an effect to reset couponCode when clubParticipation changes
  const clubParticipation = watch("clubParticipation");
  useEffect(() => {
    if (clubParticipation === "no") {
      setValue("couponCode", "");
    }
  }, [clubParticipation, setValue]);

  const [formData, setFormData] = useState({});


  //! On form submission
  const onSubmit = async (data) => {
    //? Merge current step data with formData
    setFormData((prev) => ({ ...prev, ...data }));

    if (activeStep < steps.length - 1) {
      const isStepValid = await trigger();
      if (isStepValid) setActiveStep((prev) => prev + 1);
    } else {
      console.log("Final Form Submission Data:", { ...formData, ...data });
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

      <div className="mx-6 md:px-10 lg:mx-auto max-w-screen-2xl ">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === 0 && (
              <div className="my-1 flex flex-col">
                <TextField
                  label="Full Name *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                  {...register("name")}
                  id="name"
                  autoComplete="name"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="Phone Number *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ""}
                  {...register("phone")}
                  id="phone"
                  autoComplete="phone"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="Email *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  {...register("email")}
                  id="email"
                  autoComplete="email"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />

                <FormControl
                  required
                  error={!!errors.gender}
                  component="fieldset"
                  sx={{
                    display: "block",
                    my: 2,
                  }}
                >
                  <FormLabel
                    component="legend" //? Acts as a legend for the fieldset for accessibility
                    sx={{
                      "&.Mui-focused": { color: "#330A48" },
                      "&.MuiFormLabel-root.Mui-focused": { color: "#330A48" },
                    }}
                  >
                    Gender
                  </FormLabel>
                  <Controller
                    name="gender"
                    control={methods.control}
                    rules={{ required: "Please select your gender" }}
                    render={({ field }) => (
                      <RadioGroup row {...field}>
                        <FormControlLabel
                          value="male"
                          control={
                            <Radio
                              id="gender-male" // Unique id for accessibility
                              sx={{
                                color: "#9D356D",
                                "&.Mui-checked": {
                                  color: "#9D356D",
                                },
                              }}
                            />
                          }
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={
                            <Radio
                              id="gender-female" // Unique id for accessibility
                              sx={{
                                color: "#9D356D",
                                "&.Mui-checked": {
                                  color: "#9D356D",
                                },
                              }}
                            />
                          }
                          label="Female"
                        />
                        <FormControlLabel
                          value="other"
                          control={
                            <Radio
                              id="gender-other" // Unique id for accessibility
                              sx={{
                                color: "#9D356D",
                                "&.Mui-checked": {
                                  color: "#9D356D",
                                },
                              }}
                            />
                          }
                          label="Other"
                        />
                      </RadioGroup>
                    )}
                  />
                  {errors.gender && (
                    <FormHelperText sx={{ color: "#d32f2f" }}>
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
                  helperText={
                    errors.dateOfBirth ? errors.dateOfBirth.message : ""
                  }
                  {...register("dateOfBirth")}
                  id="dateOfBirth"
                  autoComplete="bday"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="Address Line 1 *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.line1}
                  helperText={
                    errors.address?.line1 ? errors.address.line1.message : ""
                  }
                  {...register("address.line1")}
                  id="addressLine1"
                  autoComplete="address-line1"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="City *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.city}
                  helperText={
                    errors.address?.city ? errors.address.city.message : ""
                  }
                  {...register("address.city")}
                  id="city"
                  autoComplete="address-level2"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="State *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.state}
                  helperText={
                    errors.address?.state ? errors.address.state.message : ""
                  }
                  {...register("address.state")}
                  id="state"
                  autoComplete="address-level1"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="PIN Code *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.pinCode}
                  helperText={
                    errors.address?.pinCode
                      ? errors.address.pinCode.message
                      : ""
                  }
                  {...register("address.pinCode")}
                  id="pinCode"
                  autoComplete="postal-code"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="Country *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.address?.country}
                  helperText={
                    errors.address?.country
                      ? errors.address.country.message
                      : ""
                  }
                  {...register("address.country")}
                  id="country"
                  autoComplete="country"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
              </div>
            )}
            {/*//! setp 0 end */}

            {/* //? step 1 start */}

            {activeStep === 1 && (
              <div className="my-1 flex flex-col">
                <TextField
                  label="Emergency Contact Name *"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.emergencyContact?.name}
                  helperText={
                    errors.emergencyContact?.name
                      ? errors.emergencyContact.name.message
                      : ""
                  }
                  {...register("emergencyContact.name")}
                  id="emergencyContactName"
                  autoComplete="name"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="Relation With Emergency Contact *"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.emergencyContact?.relation}
                  helperText={
                    errors.emergencyContact?.relation
                      ? errors.emergencyContact.relation.message
                      : ""
                  }
                  {...register("emergencyContact.relation")}
                  id="relationWithEmergencyContact"
                  autoComplete="relationship"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="Emergency Contact Number *"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.emergencyContact?.contactNumber}
                  helperText={
                    errors.emergencyContact?.contactNumber
                      ? errors.emergencyContact.contactNumber.message
                      : ""
                  }
                  {...register("emergencyContact.contactNumber")}
                  id="emergencyContactNumber"
                  autoComplete="tel"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <TextField
                  label="Medical Information (optional)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("medicalInfo")}
                  id="medicalInfo"
                  autoComplete="off"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />
                <hr className="mt-10 mx-auto border-1 w-full  border-custom-pink" />
                {/* Medical Questions */}
                <div className="flex flex-col">
                  <div className=" bg-custom-lightpink p-6  border  border-custom-pink rounded-lg my-10 ">
                    <p className=" text-custom-purple-1001">
                      Medical Questions listed below are very important aspects
                      of the race registration and must be filled honestly and
                      to the best of the knowledge. If you are registering for
                      another participant, then you must consult with the
                      participant before filling in the questionnaire.
                    </p>
                  </div>
                  {[
                    {
                      label:
                        "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
                      name: "questions.heartCondition",
                    },
                    {
                      label:
                        "Do you feel pain in your chest when you do physical activity?",
                      name: "questions.chestPainActivity",
                    },
                    {
                      label:
                        "In the past month, have you had chest pain when you were not doing physical activity?",
                      name: "questions.chestPainRest",
                    },
                    {
                      label:
                        "Do you lose your balance because of dizziness or do you ever lose consciousness?",
                      name: "questions.dizziness",
                    },
                    {
                      label:
                        "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
                      name: "questions.boneOrJointProblem",
                    },
                    {
                      label:
                        "Is your doctor currently prescribing drugs (for example, water pills) for your blood pressure or heart condition?",
                      name: "questions.bloodPressureMedication",
                    },
                    {
                      label:
                        "Do you know of any other reason why you should not do physical activity?",
                      name: "questions.otherReason",
                    },
                  ].map((question, index) => (
                    <FormControl
                      key={index}
                      component="fieldset"
                      error={!!errors.questions?.[question.name.split(".")[1]]}
                      sx={{ my: 2 }}
                    >
                      <FormLabel
                        component="legend"
                        sx={{
                          color: errors.questions?.[question.name.split(".")[1]]
                            ? "#d32f2f"
                            : "inherit",
                          "&.Mui-focused": { color: "#330A48" },
                          "&.MuiFormLabel-root.Mui-focused": {
                            color: "#330A48",
                          },
                        }}
                      >
                        {`${index + 1}. ${question.label}`}{" "}
                        <span style={{ color: "#d32f2f" }}>(Required)</span>
                      </FormLabel>

                      <Controller
                        name={question.name}
                        control={methods.control}
                        rules={{ required: "This question is required" }}
                        render={({ field }) => (
                          <RadioGroup row {...field}>
                            <FormControlLabel
                              value="yes"
                              control={
                                <Radio
                                  id={`${question.name}-yes`}
                                  sx={{
                                    color: "#9D356D",
                                    "&.Mui-checked": {
                                      color: "#9D356D",
                                    },
                                  }}
                                />
                              }
                              label="Yes"
                            />
                            <FormControlLabel
                              value="no"
                              control={
                                <Radio
                                  id={`${question.name}-no`}
                                  sx={{
                                    color: "#9D356D",
                                    "&.Mui-checked": {
                                      color: "#9D356D",
                                    },
                                  }}
                                />
                              }
                              label="No"
                            />
                          </RadioGroup>
                        )}
                      />
                      {errors.questions?.[question.name.split(".")[1]] && (
                        <FormHelperText sx={{ color: "#d32f2f" }}>
                          {
                            errors.questions[question.name.split(".")[1]]
                              .message
                          }
                        </FormHelperText>
                      )}
                    </FormControl>
                  ))}
                </div>
                <div className=" bg-custom-lightpink p-6 border  border-custom-pink rounded-lg my-5 ">
                  <p className=" text-custom-purple-1001 ">
                    If you answered <b> YES </b> to any of the above questions,
                    please talk with your doctor by phone or in person
                    <b> BEFORE </b> you start becoming physically active or
                    <b> BEFORE </b> coming to participate in the Spice Coast
                    Marathon. Even if you answered NO to any of the questions
                    and the situation changes after registration to a
                    <b> YES </b> , then also you must consult with your doctor
                    before doing any physical exercise or participating in this
                    or any other race.
                  </p>
                </div>
              </div>
            )}

            {/* //? step 1 end */}

            {/* //! step 2 start */}
            {activeStep === 2 && (
              <div className="my-1 flex flex-col">
                {/* Race Category Dropdown */}
                <TextField
                  select
                  label="Race Category *"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.category}
                  helperText={errors.category ? errors.category.message : ""}
                  {...register("category")}
                  value={methods.watch("category") ?? ""}
                  id="category"
                  name="category"
                  autoComplete="category"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                >
                  <MenuItem value="fullMarathon">
                    Full Marathon (21 Kms) - 1000 INR
                  </MenuItem>
                  <MenuItem value="halfMarathon">
                    Half Marathon (10 Kms) - 800 INR
                  </MenuItem>
                  <MenuItem value="familyFunRun">
                    Family Fun Run (3 Kms) - 500 INR
                  </MenuItem>
                </TextField>

                {/* Name on BIB */}
                <TextField
                  label="Name on BIB *"
                  variant="outlined"
                  margin="normal"
                  error={!!errors.nameOnBib}
                  helperText={errors.nameOnBib ? errors.nameOnBib.message : ""}
                  {...register("nameOnBib")}
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                />

                {/* Club Participation Dropdown */}
                <TextField
                  select
                  label="Are you part of any Club?"
                  fullWidth
                  margin="normal"
                  {...register("clubParticipation")}
                  defaultValue="no"
                  error={!!errors.clubParticipation}
                  helperText={
                    errors.clubParticipation
                      ? errors.clubParticipation.message
                      : ""
                  }
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9D356D",
                      },
                    },
                  }}
                >
                  <MenuItem value="no">No</MenuItem>
                  <MenuItem value="club1">Club 1</MenuItem>
                  <MenuItem value="club2">Club 2</MenuItem>
                  <MenuItem value="club3">Club 3</MenuItem>
                  {/* Add more club options as needed */}
                </TextField>

                {/* Conditional Coupon Code Field */}
                {methods.watch("clubParticipation") !== "no" && (
                  <TextField
                    label="Coupon Code"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.couponCode}
                    helperText={
                      errors.couponCode ? errors.couponCode.message : ""
                    }
                    {...register("couponCode")}
                    sx={{
                      "& .MuiInputLabel-root.Mui-focused": { color: "#9D356D" },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#9D356D",
                        },
                      },
                    }}
                  />
                )}

                {/* Printed Name Acknowledgment */}
                <div className="flex mt-2 items-center">
                  <Controller
                    name="printedNameAcknowledgment"
                    control={methods.control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            sx={{
                              color: "#9D356D",
                              "&.Mui-checked": { color: "#9D356D" },
                            }}
                          />
                        }
                        label="I understand and acknowledge that it is less than a week before the race and it may not be possible to have my name printed on the BIB. I will be given a blank BIB with a BIB number (and Chip for Half & Full Marathon Runners)."
                      />
                    )}
                  />
                  {errors.printedNameAcknowledgment && (
                    <FormHelperText sx={{ color: "#d32f2f", ml: 3 }}>
                      {errors.printedNameAcknowledgment.message}
                    </FormHelperText>
                  )}
                </div>

                <hr className="mt-10 mx-auto border-1 w-full  border-custom-pink" />

                {/* Consent to Terms & Conditions */}
                <div className="flex flex-col my-2">
                  <label className=" flex gap-3 font-medium mb-2 text-custom-purple-1001">
                    Consent
                    {errors.consent && (
                      <p className="text-red-600 my-auto text-sm">
                        {errors.consent.message}
                      </p>
                    )}
                  </label>

                  <div className="flex items-start">
                    <Controller
                      name="consent"
                      control={methods.control}
                      rules={{
                        required: "You must accept the terms and conditions",
                      }}
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              {...field}
                              checked={field.value}
                              sx={{
                                color: "#9D356D",
                                "&.Mui-checked": { color: "#9D356D" },
                              }}
                            />
                          }
                          label="I have read and accept the Terms & Conditions of the race."
                        />
                      )}
                    />
                  </div>

                  {/* Scrollable Terms and Conditions */}
                  <div className="mt-4 p-4 border border-[#9D356D] rounded-sm h-36 overflow-y-scroll bg-[#f7e7eb] text-[#9D356D]">
                    <p className="text-sm leading-relaxed">
                      By registering for the <b> Pala Marathon</b>, the
                      participant agrees to abide by the conditions of entry
                      listed below, as well as any instructions given by the
                      race organizer and officials of the race.
                      {/* Add the rest of your Terms & Conditions here */}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* //! step 2 end */}

            <div className="flex justify-end gap-3 mt-3">
              <Button
                sx={{
                  borderColor: "#9D356D",
                  color: "#9D356D",
                  "&:hover": { Color: "#822C59" },
                }}
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                startIcon={<ArrowBackIosIcon />}
              >
                Back
              </Button>
              <Button
                sx={{
                  backgroundColor: "#9D356D",
                  "&:hover": { backgroundColor: "#822C59" },
                }}
                type="submit"
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default RegistrationForm;
