const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
const path = require("path");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Async function to configure handlebars
async function configureHandlebars() {
  const { default: hbs } = await import("nodemailer-express-handlebars");

  const handlebarsOptions = {
    viewEngine: {
      partialsDir: path.resolve("./routes/template/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./routes/template/"),
    extName: ".hbs",
  };

  transporter.use("compile", hbs(handlebarsOptions));
}

// Call the configuration function
configureHandlebars();


/**
 * Sends an email notification with QR code as an inline attachment.
 * @param {Object} options - Email options.
 * @param {Object} options.registration - Registration data from the database.
 * @returns {Promise<Object>} Result of the email operation.
 */
async function sendEmail({ registration }) {
  const { data, razorpayDetails } = registration;
  const { razorpay_payment_id, razorpay_order_id } = razorpayDetails;

  // Generate QR code as a buffer
  const qrCodeBuffer = await QRCode.toBuffer(registration.register_id);

  // Email context for the Handlebars template
  const emailContext = {
    name: data.name,
    marathonName: "Pala Marathon", 
    category: data.description, //!!@ Use the description as the category
    phone: data.phone,
    amountPaid: razorpayDetails.amount, 
    paymentType: razorpayDetails.paymentMethod,
    transactionId: razorpay_payment_id,
    orderId: razorpay_order_id,
    qrCodeCid: "qrcode_cid",
  };

  return new Promise((resolve) => {
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: data.email,
      subject: "Marathon Registration Confirmation",
      template: "ticket",
      context: emailContext,
      attachments: [
        {
          filename: "QRCode.png",
          content: qrCodeBuffer,
          contentType: "image/png",
          cid: "qrcode_cid",
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        resolve({ success: false, error });
      } else {
        console.log("Email sent: " + info.response);
        resolve({ success: true, response: info.response });
      }
    });
  });
}

module.exports = { sendEmail };
