// MedicalDetails.jsx
import React from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function MedicalDetails() {
  const {
    register,
    formState: { errors },
    control,
    watch
  } = useFormContext();

  return (
    <div className="my-1 flex flex-col">
      <TextField
        label="Emergency Contact Name *"
        variant="outlined"
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
        select
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
        value={watch("emergencyContact.relation") ?? ""}
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
      >
        <MenuItem value="Mother">Mother</MenuItem>
        <MenuItem value="Father">Father</MenuItem>
        <MenuItem value="Parent">Parent</MenuItem>
        <MenuItem value="Sibling">Sibling</MenuItem>
        <MenuItem value="Spouse">Spouse</MenuItem>
        <MenuItem value="Friend">Friend</MenuItem>
        <MenuItem value="Partner">Partner</MenuItem>
        <MenuItem value="Aunt">Aunt</MenuItem>
        <MenuItem value="Uncle">Uncle</MenuItem>
        <MenuItem value="Cousin">Cousin</MenuItem>
        <MenuItem value="Grandparent">Grandparent</MenuItem>
        <MenuItem value="Child">Child</MenuItem>
        <MenuItem value="Neighbor">Neighbour</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>
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
            Medical Questions listed below are very important aspects of the
            race registration and must be filled honestly and to the best of the
            knowledge. If you are registering for another participant, then you
            must consult with the participant before filling in the
            questionnaire.
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
              control={control}
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
                {errors.questions[question.name.split(".")[1]].message}
              </FormHelperText>
            )}
          </FormControl>
        ))}
      </div>
      <div className=" bg-custom-lightpink p-6 border  border-custom-pink rounded-lg my-5 ">
        <p className=" text-custom-purple-1001 ">
          If you answered <b> YES </b> to any of the above questions, please
          talk with your doctor by phone or in person
          <b> BEFORE </b> you start becoming physically active or
          <b> BEFORE </b> coming to participate in the Spice Coast Marathon.
          Even if you answered NO to any of the questions and the situation
          changes after registration to a<b> YES </b> , then also you must
          consult with your doctor before doing any physical exercise or
          participating in this or any other race.
        </p>
      </div>
    </div>
  );
}

export default MedicalDetails;
