import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Loading from "./components/Loading";
import NotFoundPage from "./pages/NotFoundPage";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const TermsConditionsPage = lazy(() => import("./pages/TermsConditionsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage"));
const AboutUS = lazy(() => import("./pages/AboutUS"));
const OrderReceipt = lazy(() => import("./pages/OrderReceipt"));
const RefundPage = lazy(() => import("./pages/RefundPage"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/refund-policy" element={<RefundPage />} />
          <Route path="/order-receipt" element={<OrderReceipt />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
