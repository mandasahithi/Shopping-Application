import React, { useEffect, useState } from "react";
import styles from "../Buttons/sizeButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setSelectedSize,
} from "../../redux/ShoppingProducts/action";
import { useNavigate } from "react-router-dom";

const SizeAndCart = ({ sizes = [], price = 0, product }) => {
  // const [selectedSize, setSelectedSize] = useState(null);
  const [cartEnabled, setCartEnabled] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSizeClick = (size) => {
    // setSelectedSize(size);
    setCartEnabled(true);
    setCartClicked(false);
    dispatch(setSelectedSize(size)); // dispatch to Redux store
  };

  const handleCartClick = () => {
    if (!cartClicked) {
      dispatch(addToCart(product));
      setCartClicked(true);
    }
  };

  const handleViewCartClick = () => {
    navigate("/cart");
  };
  const selectedSize = useSelector(
    (state) => state.ProductReducer.selectedSize
  ); // or whatever your slice name is

  useEffect(() => {
    dispatch(setSelectedSize(null)); // reset on mount
  }, [dispatch]);
  return (
    <div>
      {/* Size Section */}
      <div className="mb-3">
        <label className={styles.labelField}>Size</label>
        <div className="d-flex gap-3">
          {sizes.map((size, idx) => (
            <span key={idx}>
              <button
                title={size}
                className={` ${styles.sizeButton} ${
                  selectedSize === size
                    ? `${styles.sizeButtonStyle}`
                    : "btn-outline-primary"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Price */}
      <label className={styles.labelField}>Price</label>
      <p className={styles.paragraph}>
        <b>₹{price}</b> Inclusive of all taxes
      </p>
      <hr className="w-100 mb-4" />

      {/* Cart Buttons */}
      <div className="d-flex gap-3">
        <button
          className={`text-uppercase text-white border fw-medium small px-3 py-2 ${
            styles.addButton
          } ${cartEnabled ? styles.cartEnableSuccess : styles.cartDisable}`}
          onClick={cartClicked ? handleViewCartClick : handleCartClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={!cartEnabled}
        >
          {cartClicked ? (
            hovered ? (
              <span>
                VIEW CART <i className="bi bi-cart-check fs-6"></i>
              </span>
            ) : (
              <span>
                ADDED TO CART <i className="bi bi-check-lg text-success"></i>
              </span>
            )
          ) : (
            <span>
              ADD TO CART <i className="bi bi-cart-check fs-6"></i>
            </span>
          )}
        </button>

        <button
          className={`rounded-0 text-dark border border-dark fw-medium small px-3 py-2 
          ${cartEnabled ? styles.buyButton : styles.cartDisable}
          `}
          onClick={cartClicked ? handleViewCartClick : handleCartClick}
          disabled={!cartEnabled}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default SizeAndCart;
