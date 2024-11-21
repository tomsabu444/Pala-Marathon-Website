import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import PrivacyPolicyPage  from "./pages/PrivacyPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}

        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
