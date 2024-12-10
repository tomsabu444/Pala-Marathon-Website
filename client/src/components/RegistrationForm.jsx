import React, { useEffect, useRef, useState } from "react";
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
import { loadScript } from "../utils/loadScript";

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
  const [success, setSuccess] = useState(false);

  // ? Countdown for Payment Success Dialog
  const [PaymentSuccessCountdown, setPaymentSuccessCountdown] = useState(3);
  useEffect(() => {
    let timer;
  
    if (success) {
      timer = setInterval(() => {
        setPaymentSuccessCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
  
    return () => clearInterval(timer); // Cleanup interval on component unmount or success state change
  }, [success])
  console.log("Countdown:", PaymentSuccessCountdown);
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
    setSuccess(false);
  };

  const handleProceedToPayment = async () => {
    setLoading(true);
    setError("");

    const isScriptLoaded = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!isScriptLoaded) {
      setError("Failed to load Razorpay SDK. Please check your connection.");
      setLoading(false);
      return;
    }

    try {
      console.log("Form Data:", formData); //! For TESTING

      // Single request to register user and create Razorpay order
      const response = await axios.post(
        `${SERVER_BASE_URL}/payment/order`,
        formData
      );

      const { registrationId, orderId, amount , description } = response.data;

      // Configure Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount, // Amount in paise
        currency: "INR",
        name: "Pala Marathon Event",
        description: `${description} Registration`,
        order_id: orderId,
        handler: async function (response) {
          try {
            setLoading(true);
            // Verify payment on the backend
            const verificationResponse = await axios.post(
              `${SERVER_BASE_URL}/payment/verify`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                registrationId,
              }
            );

            if (verificationResponse.data.success) {
              setLoading(false); //? Stop loading
              setSuccess(true); //? Set success state
              setDialogOpen(true); //? Keep the dialog open to show the success message
              setTimeout(() => {
                navigate("/order-receipt", {
                  state: {
                    registrationId,
                    orderId,
                    amount:verificationResponse.data.totalamount,
                    category: description, //!!@ Use the description as the category
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    qrCodeData: verificationResponse.data.qrCodeData,
                  },
                });
              }, 3000); //? Redirect to /order-receipt page in 3 seconds delay
            } else {
              throw new Error("Payment verification failed.");
            }
          } catch (error) {
            console.error("Error during payment verification:", error);
            setError(
              "We encountered an issue while verifying your payment. This could be due to a network problem or an issue with the payment gateway. Please try again or contact our support team at support@hultinfo.tech for assistance. We apologize for the inconvenience."
            );
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#FFC1E2",
        },
        modal: {
          ondismiss: () => {
            setError("Payment was cancelled by the user.");
            setLoading(false);
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error during registration or payment:", error);
      setError(
        "There was an error processing your payment. This could be due to a network issue or a problem with the payment gateway.Please try again. If the issue persists, you can contact support for further assistance. We apologize for the inconvenience."
      );
    } finally {
      setLoading(false); // Always stop loading after request completes
      setDialogOpen(true); // Ensure dialog stays open
    }
  };
 
  //! scroll top of the form on step change
  const formRef = useRef(null);
  const [ActiveStepChanged, setActiveStepChanged] = useState(false);
  useEffect(() => {
    if (!ActiveStepChanged) {
      setActiveStepChanged(true); // Mark step change as detected after the first render
      return; //? Skip scrolling on initial render
    }

    if (formRef.current) {
      const yOffset = -150; 
      const yPosition = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({
        top: yPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, [activeStep]);
  
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

      <div ref={formRef} className="mx-6 md:px-10 lg:mx-auto max-w-screen-2xl ">
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
      <Dialog
        open={dialogOpen}

      >
        <DialogTitle>
          {loading
            ? "Processing Payment..."
            : success
            ? ""
            : error ? "Payment Failed"
            : "Proceed to Payment"}
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
          ) : success ? (
            <div className="flex flex-col justify-center items-center text-center">
              {/* Success SVG */}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
                className="w-20 h-20"
              >
                <circle
                  className="path circle"
                  fill="none"
                  stroke="#189e14"
                  strokeWidth="6"
                  strokeMiterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <polyline
                  className="path check"
                  fill="none"
                  stroke="#189e14"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="100.2,40.2 51.5,88.8 29.8,67.5"
                />
              </svg>
              {/* Heading */}
              <h4 className="text-green-600 text-xl font-semibold mt-3">
                Payment Successful
              </h4>
              {/* Success Message */}
              <p className="text-gray-700 mt-3">
                Payment successfully verified! Redirecting to receipt page in <span className=" text-custom-purple-1001 font-bold">  {PaymentSuccessCountdown}</span>...
              </p>
            </div>
          ) : (
            <div>
              {error ? (
                <p className="text-red-500 mt-1 text-lg">{error}</p>
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
              disabled={loading || success} // Disable if loading or success state is active
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
              disabled={loading || success} // Disable if loading or success state is active
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
