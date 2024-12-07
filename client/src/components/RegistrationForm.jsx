import React, { useEffect, useState } from "react";
import {
  Step,
  StepLabel,
  Stepper,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BasicDetails from "./BasicDetails";
import MedicalDetails from "./MedicalDetails";
import CategoryConsent from "./CategoryConsent";
import { stepSchemas } from "../Schema/FormValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { SERVER_BASE_URL } from "../config/Backend_URL";
import Loading from "./Loading";

function RegistrationForm() {
  const steps = [
    "Basic details",
    "Medical and Emergency details",
    "Category and Consent",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const clubParticipation = watch("clubParticipation");
  useEffect(() => {
    if (clubParticipation === "no") {
      setValue("couponCode", "");
    }
  }, [clubParticipation, setValue]);

  const [formData, setFormData] = useState({});

  //! On form submission
  const onSubmit = async (data) => {
    setFormData((prev) => ({ ...prev, ...data }));

    if (activeStep < steps.length - 1) {
      const isStepValid = await trigger();
      if (isStepValid) setActiveStep((prev) => prev + 1);
    } else {
      // Final step: open dialog
      setDialogOpen(true);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setError("");
  };

  const handleProceedToPayment = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("Form Data:", formData);
      const response = await axios.post(
        `${SERVER_BASE_URL}/register`,
        formData
      );
      const registrationId = response.data.registrationId;
      console.log("Registration ID:", registrationId);

      // navigate(`/payment?registrationId=${registrationId}`);
    } catch (error) {
      console.error("Error during registration:", error);
      setError("There was an error processing your payment. Please try again.");
    } finally {
      setLoading(false); // Always stop loading after request completes
      //! setDialogOpen(false);
    }
  };

  return (
    <div className="py-7 mx-auto">
      {/* Stepper */}
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
            {activeStep === 0 && <BasicDetails />}
            {activeStep === 1 && <MedicalDetails />}
            {activeStep === 2 && <CategoryConsent />}

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

      {/* //! Dialog for Proceeding to Payment */}
      <Dialog open={dialogOpen} onClose={loading ? null : handleDialogClose}>
        <DialogTitle>
          {loading ? "Processing Payment..." : "Proceed to Payment"}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            <div>
              {error ? (
                <p className="text-red-500 mt-1  text-lg">
                  There was an error processing your payment. This could be due
                  to a network issue or a problem with the payment gateway.
                  Please try again. If the issue persists, you can contact
                  support for further assistance. We apologize for the
                  inconvenience.
                </p>
              ) : (
                <p>
                  You're almost done! Please confirm that all provided
                  information is accurate. By clicking <b>"Pay Now,"</b> you'll
                  be redirected to the payment gateway to complete your
                  registration.
                </p>
              )}
            </div>
          )}
        </DialogContent>
        {!loading && (
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingX: "30px",
              paddingBottom: "20px",
            }}
          >
            <Button
              sx={{ borderColor: "#9D356D", color: "#9D356D" }}
              onClick={handleDialogClose}
              color="secondary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "#9D356D",
                "&:hover": { backgroundColor: "#822C59" },
              }}
              onClick={handleProceedToPayment}
              color="primary"
              variant="contained"
            >
              Pay Now
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default RegistrationForm;
