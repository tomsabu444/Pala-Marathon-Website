// CategoryConsent.jsx
import React from "react";
import {
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function CategoryConsent() {
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = useFormContext();

  return (
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
        value={watch("category") ?? ""}
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
        <MenuItem value="HalfMarathon">
          Half Marathon (21 Kms) - 900 INR
        </MenuItem>
        <MenuItem value="10KmMarathon">
          10 Km Marathon (10 Kms) - 700 INR
        </MenuItem>
        <MenuItem value="FamilyFunRun">
          Family Fun Run (3 Kms) - 500 INR
        </MenuItem>
      </TextField>

      {/* Name on BIB */}
      <TextField
        label="Name on BIB *"
        variant="outlined"
        margin="normal"
        autoComplete="off"
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
          errors.clubParticipation ? errors.clubParticipation.message : ""
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
      {watch("clubParticipation") !== "no" && (
        <TextField
          label="Coupon Code"
          variant="outlined"
          margin="normal"
          fullWidth
          error={!!errors.couponCode}
          helperText={errors.couponCode ? errors.couponCode.message : ""}
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

      {/* Printed Name Acknowledgment 
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
    </div> */}

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
            control={control}
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
            By registering for the <b> Pala Marathon</b>, the participant agrees
            to abide by the conditions of entry listed below, as well as any
            instructions given by the race organizer and officials of the race.
            {/* Add the rest of your Terms & Conditions here */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryConsent;
