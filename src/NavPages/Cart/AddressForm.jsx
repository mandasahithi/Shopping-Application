import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const AddressForm = ({ onNext }) => {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(address);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-90" style={{background:'#f6f6f6'}}>
  <Card className="p-5 shadow-lg" style={{ minWidth: 480, maxWidth: 600, width: '100%', borderRadius: 24 }}>
      <h5 className="mb-3">Shipping Address</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={address.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Street</Form.Label>
          <Form.Control name="street" value={address.street} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" value={address.city} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>State</Form.Label>
          <Form.Control name="state" value={address.state} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>ZIP Code</Form.Label>
          <Form.Control name="zip" value={address.zip} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phone" value={address.phone} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="dark" className="w-100 py-2 mt-3 fs-5" style={{ borderRadius: 12 }}>Continue to Payment</Button>
      </Form>
    </Card>
  </div>
  );
};

export default AddressForm;
