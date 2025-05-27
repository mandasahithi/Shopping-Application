import React, { useState } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";

const CheckoutForm = ({ address, onBack, onComplete }) => {
  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-90" style={{background:'#f6f6f6'}}>
  <Card className="p-5 shadow-lg" style={{ minWidth: 480, maxWidth: 600, width: '100%', borderRadius: 24 }}>
    <h5 className="mb-3">Payment Details</h5>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Card Number</Form.Label>
        <Form.Control name="cardNumber" value={payment.cardNumber} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Expiry</Form.Label>
        <Form.Control name="expiry" value={payment.expiry} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>CVV</Form.Label>
        <Form.Control name="cvv" value={payment.cvv} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Name on Card</Form.Label>
        <Form.Control name="nameOnCard" value={payment.nameOnCard} onChange={handleChange} required />
      </Form.Group>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button type="submit" variant="dark" className="py-2 fs-5" style={{ borderRadius: 12 }}>Pay Now</Button>
      </div>
    </Form>
    {success && <Alert variant="success" className="mt-3">Payment Successful! Thank you for your order.</Alert>}
  </Card>
</div>
  );
};

export default CheckoutForm;
