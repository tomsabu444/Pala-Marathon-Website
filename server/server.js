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
const registrationRoutes = require('./routes/Registration');
app.use('/api', registrationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
