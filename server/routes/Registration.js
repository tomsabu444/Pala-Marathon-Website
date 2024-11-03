const express = require('express');
const router = express.Router();
const Registration = require('../models/RegistrationShema');
const { FormValidationMiddleware } = require('../middleware/FormValidationMiddleware');

router.post('/register',FormValidationMiddleware , async (req, res) => {
  try {
    const registrationData = req.body;
    console.log(registrationData);
    
    // const registration = new Registration(registrationData);
    // await registration.save();
    res.status(201).json({ message: 'Registration saved successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving registration data' });
  }
});

module.exports = router;

