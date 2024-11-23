import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import AboutUS from "./pages/AboutUS";
import NotFoundPage from "./pages/NotFoundPage";

// Layout with both Navbar and Footer
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Layout with only Navbar
const NavOnlyLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main layout routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/about-us" element={<AboutUS />} />
        </Route>
        
        {/* Routes with only Navbar */}
        <Route element={<NavOnlyLayout />}>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;