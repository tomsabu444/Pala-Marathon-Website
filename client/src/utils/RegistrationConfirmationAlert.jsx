import React, { useEffect, useState } from 'react';

const RegistrationConfirmationAlert = () => {
  const [isTicketPrinted, setIsTicketPrinted] = useState(false);

  useEffect(() => {
    // Handler for beforeunload event (refresh)
    const handleBeforeUnload = (event) => {
      // If ticket is not printed, show alert
      if (!isTicketPrinted) {
        event.preventDefault();
        const alertMessage = "Have you printed your event ticket? You might need this for registration.";
        event.returnValue = alertMessage;
        return alertMessage;
      }
    };

    // Handler for popstate event (back/forward button)
    const handlePopState = (event) => {
      // If ticket is not printed, show confirmation
      if (!isTicketPrinted) {
        const confirmLeave = window.confirm(
          "Have you printed your event ticket?\n\nClick 'Cancel' to stay on this page and print your ticket."
        );
        
        if (!confirmLeave) {
          // If user chooses to stay, prevent navigation
          window.history.pushState(null, document.title, window.location.href);
        }
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isTicketPrinted]);

  // Method to mark ticket as printed (can be called from print button)
  const markTicketAsPrinted = () => {
    setIsTicketPrinted(true);
  };

  // Expose method to be used by print button
  useEffect(() => {
    window.markTicketAsPrinted = markTicketAsPrinted;
    return () => {
      delete window.markTicketAsPrinted;
    };
  }, []);

  return null;
};

export default RegistrationConfirmationAlert;