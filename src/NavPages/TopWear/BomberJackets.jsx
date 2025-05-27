import React, { useEffect } from "react";
import styles from "../TopWear/TopWear.module.css"; // Import your custom CSS
import { Link, NavLink } from "react-router-dom";
import poster from "../../assets/poster.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/ShoppingProducts/action";

function BomberJackets() {
  const TopWearLinks = [
    { path: "/tees", text: "TEES" },
    { path: "/shirts", text: "SHIRTS" },
    { path: "/hoodies", text: "HOODIES" },
    { path: "/tanks", text: "TANKS" },
    { path: "/sweatShirts", text: "SWEAT SHIRTS" },
    { path: "/kurtas", text: "KURTAS" },
    { path: "/bomberJackets", text: "BOMBER-JACKETS" },
    { path: "/coOrdsets", text: "CO-ORD SHIRTS" },
  ];
  const renderLinks = (links) => (
    <ul className="d-flex gap-2 list-unstyled flex-wrap ">
      {links.map((link, index) => (
        <li className={`nav-item `} key={index}>
          <NavLink
            className={`nav-link  ${
              link.text === "BOMBER-JACKETS"
                ? styles.NavItemGray
                : styles.navItem
            }`}
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  // images
  const { products, isLoading, isError } = useSelector(
    (store) => store.ProductReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className={`d-flex  flex-column gap-3 ${styles.maincontainer}`}>
      {isLoading && <h1>Loading....</h1>}
      {isError && <h1>Error..........</h1>}

      <div
        className={`d-flex position-relative justify-content-end   align-items-center gap-2 me-2`}
      >
        <div className={`fs-6`}>{renderLinks(TopWearLinks)}</div>
      </div>

      <div>
        <div className={styles.gridContainer}>
          {products.map((item, i) => (
            <div className={`card border-0`} key={i}>
              {/* card: Bootstrap's card component used to create a flexible and extensible content container. */}
              <NavLink
                to={`/products/${item.id}`}
                className="text-decoration-none text-start text-dark"
              >
                <div className="position-relative">
                  {/* position-relative: Applies relative positioning. Used for positioning child elements absolutely inside this container if needed. */}
                  <img
                    src={item.image}
                    className={`card-img-top img-fluid ${styles.uniformImage}`}
                    // ✅ card-img-top: Ensures the image fits in the top section of the card layout.
                    // ✅ img-fluid: Ensures the image resizes responsively to the card width.
                    alt={item.alt}
                  />
                </div>
              </NavLink>
              <div className="card-body px-0 py-2">
                {/* card-body: Bootstrap's standard class for the body content of a card. */}
                <div className="d-flex flex-column gap-1 text-muted text-xs">
                  {/* text-muted: Applies Bootstrap's muted (light gray) text color.
              text-xs: Not a Bootstrap class by default, likely a custom utility for extra-small font size. */}
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink
                      to={`/products/${item.id}`}
                      className="text-decoration-none text-dark w-100"
                    >
                      <h6 className="card-title text-truncate mb-1 fw-semibold text-start">
                        {/* card-title: Standard Bootstrap class for titles inside cards.
                    text-truncate: Truncates the text with an ellipsis if it's too long. */}
                        {item.title}
                      </h6>
                    </NavLink>
                  </div>

                  <NavLink
                    to={`/products/${item.id}`}
                    className="text-decoration-none "
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <div className="fw-bold text-dark">{item.price}</div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`d-flex justify-content-center align-items-center mt-5`}
        >
          <Link to="/shop" className="text-decoration-none">
            <button
              type="button"
              className={`${styles.btn} btn btn-dark px-5 py-3 
              rounded fw-medium text-white text-nowrap d-flex align-items-center transition`}
            >
              SHOP ALL
            </button>
          </Link>
        </div>
        <div>
          <img
            src={poster}
            className={`${styles.postering} mt-4`}
            alt="poster"
          />
        </div>
      </div>
    </div>
  );
}

export default BomberJackets;
