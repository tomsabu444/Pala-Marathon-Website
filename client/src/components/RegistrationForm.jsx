import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

function RegistrationForm() {
  const steps = [
    "Basic details",
    "Medical and Emergency details",
    "Category and Consent",
  ];

  return (
    <div className="py-7 mx-auto">
      <Stepper
        activeStep={0}
        alternativeLabel
        sx={{
          padding: "20px",
          justifyContent: "center",
          width: "100%",
          ".MuiStepConnector-line": {
            borderColor: "#9D356D",
            marginTop: ".5rem",
          },
        }}
      >
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepIcon-root": {
                fontSize: "2.5rem",
                color: "#9D356D",
                "&.Mui-active": {
                  color: "#9D356D",
                },
                "&.Mui-completed": {
                  color: "#9D356D",
                },
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
                color: "#000080",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default RegistrationForm;
