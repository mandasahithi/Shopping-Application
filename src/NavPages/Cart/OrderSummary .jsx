import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const items = useSelector((state) => state.ProductReducer.cartItems);

  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxes = parseFloat((subTotal * 0.12).toFixed(2));
  const shipping = 150;
  const total = (subTotal + taxes + shipping).toFixed(2);

  return (
    <div className="card p-3 bg-light">
      <h5 className="mb-3">Order Summary</h5>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between">
          <span>Sub Total</span>
          <strong>₹ {subTotal.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Taxes</span>
          <strong>₹ {taxes}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Shipping</span>
          <strong>₹ {shipping}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between fw-bold">
          <span>Total</span>
          <strong>₹ {total}</strong>
        </li>
      </ul>
      <button className="btn btn-dark w-100">Place Order</button>
    </div>
  );
};

export default OrderSummary;
