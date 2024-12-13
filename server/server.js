const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/databaseConnect');

const app = express();

// Middleware and routes
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

connectDB(); //! Initialize MongoDB connection

//* Define routes
const registrationRoute = require('./routes/Registration');
const PaymentverifyRoute = require('./routes/Payment_verify');
//? API routes
app.use('/payment/order', registrationRoute);
app.use('/payment/verify', PaymentverifyRoute);
// const emailNotificationRouter = require('./routes/EmailNotification');
// app.use('/email', emailNotificationRouter);

//? Payment webhook route
const paymentWebhookRoute = require("./routes/paymentWebhook");
// Raw body parser for Razorpay webhook signature validation
app.use(
  "/payment/razorpay-webhook",
  bodyParser.raw({ type: "application/json" }),
  paymentWebhookRoute
);


const PORT = process.env.PORT || 5000;

//! TEST ONLY -----------
app.get("/", (req, res) => {
    res.send("<h1> Pala Marathon Backend</h1>");
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
