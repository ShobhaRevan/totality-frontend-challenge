// pages/checkout.js
import Link from 'next/link';
import React, { useState } from 'react';


const CheckoutPage = () => {
  // State variables to store form data
  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
  });

  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Event handlers to update form data
  const handleBookingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., submit to backend, calculate total cost, etc.)
    console.log('Booking Details:', bookingDetails);
    console.log('Contact Information:', contactInfo);
    console.log('Payment Details:', paymentDetails);
  };

  return (
    <div>
      <h1>Checkout</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Booking Details Form */}
        <div>
          <h2>Booking Details</h2>
          <label>
            Check-in Date:
            <input
              type="date"
              name="checkInDate"
              value={bookingDetails.checkInDate}
              onChange={handleBookingDetailsChange}
            />
          </label>
          <label>
            Check-out Date:
            <input
              type="date"
              name="checkOutDate"
              value={bookingDetails.checkOutDate}
              onChange={handleBookingDetailsChange}
            />
          </label>
          <label>
            Number of Guests:
            <input
              type="number"
              name="numberOfGuests"
              value={bookingDetails.numberOfGuests}
              onChange={handleBookingDetailsChange}
            />
          </label>
        </div>
        {/* Contact Information Form */}
        <div>
          <h2>Contact Information</h2>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={contactInfo.firstName}
              onChange={handleContactInfoChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={contactInfo.lastName}
              onChange={handleContactInfoChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleContactInfoChange}
            />
          </label>
        </div>
        {/* Payment Details Form */}
        <div>
          <h2>Payment Details</h2>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentDetailsChange}
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              name="expirationDate"
              value={paymentDetails.expirationDate}
              onChange={handlePaymentDetailsChange}
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handlePaymentDetailsChange}
            />
          </label>
        </div>
        {/* Submit Button */}
        <button type="submit">Complete Booking</button>
      </form>
      {/* Navigation link to return to previous page */}
      <Link href="/">
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default CheckoutPage;
