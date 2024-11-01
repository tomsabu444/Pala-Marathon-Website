const express = require('express');
const router = express.Router();
const Registration = require('../models/RegistrationShema');

// Endpoint to save registration data
router.post('/register', async (req, res) => {
  try {
    const registrationData = req.body; // Data from the frontend
    const registration = new Registration(registrationData);
    await registration.save();
    res.status(201).json({ message: 'Registration saved successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving registration data' });
  }
});

module.exports = router;
