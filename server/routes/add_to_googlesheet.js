const { google } = require("googleapis");

async function addToGoogleSheet(registration) {
  try {


    // Step 1: Authenticate using the service account
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Step 2: Define the spreadsheet ID and range
    const spreadsheetId = process.env.GOOGLE_SHEET_ID; 
    const range = "Sheet1!A:Z";

    // Step 3: Flatten the registration data
    const {
      register_id,
      paymentStatus,
      razorpayDetails: { amount, paymentMethod },
      data: {
        name,
        phone,
        email,
        gender,
        dateOfBirth,
        address: { line1, city, state, pinCode, country },
        emergencyContact: { name: emergencyName, relation, contactNumber },
        medicalInfo,
        questions: {
          heartCondition,
          chestPainActivity,
          chestPainRest,
          dizziness,
          boneOrJointProblem,
          bloodPressureMedication,
          otherReason,
        },
        category,
        nameOnBib,
        clubParticipation,
        couponCode,
        consent,
        description,
      },
    } = registration;

    // Step 4: Prepare the data to be added
    const values = [
      [
        register_id,
        name,
        phone,
        email,
        gender,
        dateOfBirth,
        `${line1}, ${city}, ${state}, ${pinCode}, ${country}`, // Full address
        emergencyName,
        relation,
        contactNumber,
        medicalInfo || "N/A",
        heartCondition || "N/A",
        chestPainActivity || "N/A",
        chestPainRest || "N/A",
        dizziness || "N/A",
        boneOrJointProblem || "N/A",
        bloodPressureMedication || "N/A",
        otherReason || "N/A",
        category,
        nameOnBib,
        clubParticipation || "N/A",
        couponCode || "N/A",
        consent ? "Yes" : "No",
        description || "N/A",
        paymentStatus,
        amount,
        paymentMethod || "N/A",
      ],
    ];

    // Step 5: Append data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values,
      },
    });

    console.log("Data successfully added to Google Sheet.");
    return { success: true };
  } catch (error) {
    console.error("Error adding data to Google Sheet:", error);
    return { success: false, error };
  }
}

module.exports = addToGoogleSheet;
