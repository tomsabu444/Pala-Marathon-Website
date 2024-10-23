# Pala Marathon Website

Welcome to the Pala Marathon website! This project aims to provide an online platform for participants to register for the marathon, process payments, and receive confirmation via email.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration with personal details and medical questions
- Club membership validation with discount coupon code
- Payment processing via Razorpay
- Confirmation email sent upon successful registration
- User can download their registration ticket from the frontend
- Admin access for event organizers to view registration details

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Payment Gateway:** Razorpay
- **Email Notifications:** Nodemailer
- **Deployment:** AWS Lightsail, Nginx, PM2
- **Testing:** Jest (to be implemented)

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/tomsabu444/pala-marathon-website.git
   cd pala-marathon-website
   ```

2. **Install Dependencies:**
   Install the required dependencies for both the client and server using the command:

   ```bash
   npm install
   npm run ci:all
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `server` and `client` directory and add your environment variables:

   ```
   server/.env
   client/.env
   ``` 

4. **Start the Application:**
   To run both the frontend and backend, use:
   ```bash
   npm start
   ```

## Usage

- Navigate to the frontend URL in your browser.
- Fill out the registration form with your details.
- If applicable, enter your club membership and coupon code.
- Complete the payment process.
- A confirmation email will be sent to your registered email address.
- You can download your registration ticket from the frontend.

## Running Tests

Testing will be added later. To run existing tests (if any), use:

```bash
npm run test
```

You can run frontend and backend tests separately using:

```bash
npm run test:frontend
npm run test:backend
```

## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

```

```
