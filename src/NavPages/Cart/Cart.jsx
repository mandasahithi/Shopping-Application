import React, { useState } from "react";
import AddressForm from "./AddressForm";
import CheckoutForm from "./CheckoutForm";
import { useSelector, useDispatch } from "react-redux";
import styles from "../Cart/cartStyle.module.css";
import {
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
} from "../../redux/ShoppingProducts/action";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";

const Cart = () => {
  const { cartItems = [], selectedSize } = useSelector(
    (state) => state.ProductReducer || {}
  );

  const [step, setStep] = useState(0); // 0: cart, 1: address, 2: payment, 3: complete
  const [address, setAddress] = useState(null);

  // Calculate subtotal, taxes, shipping, total
  const subTotal = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return acc + price * quantity;
  }, 0);
  const taxes = subTotal * 0.18; // 18% GST
  const shipping = subTotal > 1000 || subTotal === 0 ? 0 : 50;
  const total = subTotal + taxes + shipping;
  console.log(cartItems);
  const dispatch = useDispatch();
  console.log("cart", cartItems);
  console.log("size", selectedSize);

  // Remove, increment, decrement handlers
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) dispatch(decrementCartItem(id));
  };

  const handleIncrease = (id) => {
    dispatch(incrementCartItem(id));
  };

  if (step === 1) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <AddressForm
          onNext={(addr) => {
            setAddress(addr);
            setStep(2);
          }}
        />
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <CheckoutForm
          address={address}
          onBack={() => setStep(1)}
          onComplete={() => setStep(3)}
        />
      </div>
    );
  }
  if (step === 3) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="p-5 text-center">
          <h4>Order Placed Successfully!</h4>
          <p>Thank you for shopping with us.</p>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Container fluid className="my-4">
        <h4 className="fw-bold mb-4">CART</h4>
        <Row>
          <Col md={8}>
            {cartItems.length === 0 ? (
              <Card className="mb-3 p-3">
                <h5>Your cart is empty.</h5>
              </Card>
            ) : (
              cartItems.map((item) => (
                <Card key={item.id} className="mb-3 p-3">
                  <Row className="align-items-center">
                    <Col xs={2} md={2}>
                      <Image src={item.image} fluid rounded />
                    </Col>
                    <Col xs={7} md={7}>
                      <h5 className={`fw-bold d-flex align-items-start`}>
                        {item.title}
                      </h5>
                      <div
                        className={`fw-bold d-flex align-items-start flex-column`}
                      >
                        <h6 className="fw-semibold">₹ {item.price}</h6>
                        <div className="mb-1 d-flex">
                          <span className="me-1 text-black">Size:</span>
                          <span className="text-muted">
                            {typeof item.size === "string"
                              ? item.size
                              : selectedSize || ""}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <span className="me-2">Quantity:</span>
                        <Button
                          variant="outline-dark"
                          size="sm"
                          className="me-1"
                          onClick={() => handleDecrease(item.id, item.quantity)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="px-2">{item.quantity}</span>
                        <Button
                          variant="outline-dark"
                          size="sm"
                          onClick={() => handleIncrease(item.id)}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                    <Col
                      xs={3}
                      md={3}
                      className="d-flex flex-column align-items-end justify-content-between"
                    >
                      <div className="mb-2">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="fw-bold">
                        Subtotal: ₹{" "}
                        {(
                          (Number(item.price) || 0) *
                          (Number(item.quantity) || 0)
                        ).toFixed(2)}
                      </div>
                    </Col>
                  </Row>
                </Card>
              ))
            )}
          </Col>

          <Col md={4}>
            <Card className="p-3">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Sub Total</span>
                  <span>₹ {subTotal.toFixed(2)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Taxes (18% GST)</span>
                  <span>₹ {taxes.toFixed(2)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Shipping Charges</span>
                  <span>₹ {shipping}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹ {total.toFixed(2)}</span>
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="dark"
                className="w-100 mt-3"
                onClick={() => setStep(1)}
                disabled={cartItems.length === 0}
              >
                Place Order
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
