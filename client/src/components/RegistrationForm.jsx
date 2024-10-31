import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  RadioGroup, 
  Radio, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Checkbox, 
  Typography, 
  Grid2 as Grid 
} from '@mui/material';

function RegistrationForm() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    dob: '',
    bibName: '',
    address: {
      line1: '',
      city: '',
      state: '',
      pincode: '',
      country: ''
    },
    emergencyContact: {
      name: '',
      relation: '',
      contact: ''
    },
    isClubMember: false,
    clubName: '',
    couponCode: '',
    medicalQuestions: Array(7).fill('')
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name.includes('address')) {
      const field = name.split('.')[1];
      setFormValues((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value }
      }));
    } else if (name.includes('emergencyContact')) {
      const field = name.split('.')[1];
      setFormValues((prev) => ({
        ...prev,
        emergencyContact: { ...prev.emergencyContact, [field]: value }
      }));
    } else if (name === 'isClubMember') {
      setFormValues((prev) => ({ ...prev, isClubMember: checked, clubName: '' }));
    } else if (name.startsWith('medical')) {
      const index = parseInt(name.split('medical')[1], 10) - 1;
      setFormValues((prev) => {
        const newMedicalQuestions = [...prev.medicalQuestions];
        newMedicalQuestions[index] = value;
        return { ...prev, medicalQuestions: newMedicalQuestions };
      });
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    alert('Form Submitted!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>Registration Form</Typography>

      {/* Personal Details */}
      <Typography variant="h6">Personal Details</Typography>
      <TextField fullWidth label="Full Name" name="fullName" required value={formValues.fullName} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Phone Number" name="phone" required value={formValues.phone} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Email" name="email" required type="email" value={formValues.email} onChange={handleChange} margin="normal" />
      
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup name="gender" value={formValues.gender} onChange={handleChange}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <TextField fullWidth label="Date of Birth" name="dob" required type="date" InputLabelProps={{ shrink: true }} value={formValues.dob} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Name on BIB" name="bibName" required value={formValues.bibName} onChange={handleChange} margin="normal" />

      {/* Address */}
      <Typography variant="h6">Address</Typography>
      <TextField fullWidth label="Address Line 1" name="address.line1" required value={formValues.address.line1} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="City" name="address.city" required value={formValues.address.city} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="State" name="address.state" required value={formValues.address.state} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Pin Code" name="address.pincode" required value={formValues.address.pincode} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Country" name="address.country" required value={formValues.address.country} onChange={handleChange} margin="normal" />

      {/* Emergency Contact */}
      <Typography variant="h6">Emergency Contact</Typography>
      <TextField fullWidth label="Emergency Contact Name" name="emergencyContact.name" required value={formValues.emergencyContact.name} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Relation With" name="emergencyContact.relation" required value={formValues.emergencyContact.relation} onChange={handleChange} margin="normal" />
      <TextField fullWidth label="Contact Number" name="emergencyContact.contact" required value={formValues.emergencyContact.contact} onChange={handleChange} margin="normal" />

      {/* Club Membership */}
      <Typography variant="h6">Club Membership</Typography>
      <FormControlLabel
        control={<Checkbox checked={formValues.isClubMember} onChange={handleChange} name="isClubMember" />}
        label="Are you part of any club?"
      />
      {formValues.isClubMember && (
        <>
          <TextField fullWidth label="Club Name" name="clubName" value={formValues.clubName} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Coupon Code" name="couponCode" value={formValues.couponCode} onChange={handleChange} margin="normal" />
        </>
      )}

      {/* Medical Questions */}
      <Typography variant="h6">Medical Questions</Typography>
      {[...Array(7)].map((_, index) => (
        <FormControl component="fieldset" key={index} margin="normal">
          <FormLabel component="legend">
            {index + 1}. {[
              "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
              "Do you feel pain in your chest when you do physical activity?",
              "In the past month, have you had chest pain when you were not doing physical activity?",
              "Do you lose your balance because of dizziness or do you ever lose consciousness?",
              "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
              "Is your doctor currently prescribing drugs (for example, water pills) for your blood pressure or heart condition?",
              "Do you know of any other reason why you should not do physical activity?"
            ][index]}
          </FormLabel>
          <RadioGroup name={`medical${index + 1}`} value={formValues.medicalQuestions[index]} onChange={handleChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      ))}

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
    </form>
  );
}

export default RegistrationForm;
