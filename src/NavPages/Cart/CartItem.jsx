import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.image}
            className="img-fluid rounded-start"
            alt={item.name}
          />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-between p-3">
          <h5 className="card-title">
            {item.name} - {item.color}, {item.size}
          </h5>
          <p className="card-text fw-bold">₹ {item.price}</p>
          <div className="d-flex align-items-center">
            <span className="me-2 fw-bold">Quantity:</span>
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() =>
                dispatch({ type: "cart/decrement", payload: item.id })
              }
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-outline-secondary btn-sm ms-2"
              onClick={() =>
                dispatch({ type: "cart/increment", payload: item.id })
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
