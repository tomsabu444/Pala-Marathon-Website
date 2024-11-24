const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const router = express.Router();

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Async function to configure handlebars
async function configureHandlebars() {
    // Dynamically import nodemailer-express-handlebars
    const { default: hbs } = await import('nodemailer-express-handlebars');

    const handlebarsOptions = {
        viewEngine: {
            partialsDir: path.resolve('./routes/template/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./routes/template/'),
        extName: '.hbs',
    };

    // Use handlebars with the transporter
    transporter.use('compile', hbs(handlebarsOptions));
}

// Call the async function to configure handlebars
configureHandlebars();

// Define the email route
router.post('/send-email', (req, res) => {
    const { to, subject, ticketNumber, barcodeURL } = req.body; 

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        template: 'ticket',
        context: {
            ticketNumber,
            barcodeURL,
        },
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({ message: 'Email sent successfully!' });
        }
    });
});

module.exports = router;
