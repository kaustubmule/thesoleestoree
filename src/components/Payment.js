import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Payment.css';
import { FaCreditCard, FaGooglePay, FaApplePay } from 'react-icons/fa';
import { MdPayment, MdCheckCircle } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: '',
    method: 'card'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');

    // Add space after every 4 digits
    const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();

    return formatted;
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData({ ...formData, cardNumber: formattedValue });
  };

  const handleChange = (e) => {
    if (e.target.name === 'cardNumber') {
      handleCardNumberChange(e);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Start processing
    setIsProcessing(true);

    // Simulate payment processing steps
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      // Redirect after showing success
      setTimeout(() => {
        navigate('/contactus');
      }, 2000);
    }, 3000);
  };

  if (isProcessing) {
    return (
      <div className="payment-wrapper">
        <div className="payment-box processing">
          <div className="processing-content">
            <FaSpinner className="spinner" size={60} />
            <h2>Processing Payment</h2>
            <p>Please wait while we process your payment...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="payment-wrapper">
        <div className="payment-box success">
          <div className="success-content">
            <MdCheckCircle size={80} color="#4caf50" />
            <h2>Payment Successful!</h2>
            <p>Thank you for your purchase. Redirecting to feedback page...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-wrapper">
      <div className="payment-box">
        <div className="checkout-logo">
          <MdPayment size={60} />
          <h2 className="title">Secure Checkout</h2>
        </div>

        <div className="payment-methods">
          <input
            type="radio"
            name="method"
            value="card"
            id="card"
            checked={formData.method === 'card'}
            onChange={handleChange}
          />
          <label htmlFor="card">
            <FaCreditCard />
            Credit / Debit Card
          </label>

          <input
            type="radio"
            name="method"
            value="gpay"
            id="gpay"
            checked={formData.method === 'gpay'}
            onChange={handleChange}
          />
          <label htmlFor="gpay">
            <FaGooglePay />
            Google Pay
          </label>

          <input
            type="radio"
            name="method"
            value="applepay"
            id="applepay"
            checked={formData.method === 'applepay'}
            onChange={handleChange}
          />
          <label htmlFor="applepay">
            <FaApplePay />
            Apple Pay
          </label>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="cardName"
            placeholder="Cardholder Name"
            required
            onChange={handleChange}
          />
          <div className="card-input-wrapper">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              maxLength="19"
              required
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <input
              type="month"
              name="expiry"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              maxLength="4"
              required
              onChange={handleChange}
            />
          </div>
          <textarea
            name="address"
            placeholder="Billing Address"
            required
            onChange={handleChange}
          ></textarea>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
