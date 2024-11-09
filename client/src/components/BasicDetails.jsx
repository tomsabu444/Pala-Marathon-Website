// BasicDetails.jsx
import React from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function BasicDetails() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  return (
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
        type="tel"
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
          control={control}
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
        helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ""}
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
        helperText={errors.address?.line1 ? errors.address.line1.message : ""}
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
        helperText={errors.address?.city ? errors.address.city.message : ""}
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
        helperText={errors.address?.state ? errors.address.state.message : ""}
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
          errors.address?.pinCode ? errors.address.pinCode.message : ""
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
          errors.address?.country ? errors.address.country.message : ""
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
  );
}

export default BasicDetails;
