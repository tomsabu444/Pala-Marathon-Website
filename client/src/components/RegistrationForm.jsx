import {
  Step,
  StepLabel,
  Stepper,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BasicDetails from "./BasicDetails";
import MedicalDetails from "./MedicalDetails";
import CategoryConsent from "./CategoryConsent";
import { stepSchemas } from "../Schema/FormValidation";

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
            {/*//! setp 0 start */}
            {activeStep === 0 && <BasicDetails />}
            {/*//! setp 0 end */}

            {/* //? step 1 start */}
            {activeStep === 1 && <MedicalDetails />}
            {/* //? step 1 end */}

            {/* //! step 2 start */}
            {activeStep === 2 && <CategoryConsent />}
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
