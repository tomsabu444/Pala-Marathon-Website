import { useLocation } from "react-router-dom";

function OrderReceipt() {
  const location = useLocation();
  const { registrationId, orderId, amount, category, name, email } = location.state || {};

  return (
    <div>
      <h1>Order Receipt</h1>
      {registrationId ? (
        <div>
          <p><strong>Registration ID:</strong> {registrationId}</p>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Amount Paid:</strong> ₹{amount / 100}</p> {/* Convert paise to INR */}
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      ) : (
        <p>No order data available. Please try again.</p>
      )}
    </div>
  );
}

export default OrderReceipt;
