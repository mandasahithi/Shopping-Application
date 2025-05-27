import React from "react";
import styles from "./ShopbySeason.module.css"; // Import your custom CSS
import { Link, NavLink } from "react-router-dom";
import poster from "../../assets/poster.jpg";
import { useSelector } from "react-redux";

function Summer() {
  const ShopBySeasonLinks = [
    { path: "/summer", text: "SUMMER" },
    { path: "/autumnWinter", text: "AUTUMN/WINTER" },
  ];

  const renderLinks = (links) => (
    <ul className="d-flex gap-2 list-unstyled flex-wrap">
      {links.map((link, index) => (
        <li className={`nav-item`} key={index}>
          <NavLink
            className={`nav-link  ${
              link.text === "SUMMER" ? styles.NavItemGray : styles.navItem
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
  const winterProducts = products.filter(
    (product) => product.category === "summerClothing"
  );

  return (
    <div className={`d-flex  flex-column gap-3 ${styles.maincontainer}`}>
      {isLoading && <h1>Loading....</h1>}
      {isError && <h1>Error..........</h1>}
      <div
        className={`d-flex position-relative justify-content-end   align-items-center gap-2 me-2`}
      >
        <div className={`fs-6`}>{renderLinks(ShopBySeasonLinks)}</div>
      </div>

      <div>
        <div className={styles.gridContainer}>
          {winterProducts.map((item, i) => (
            <div className={`card border-0`} key={i}>
              <NavLink
                to={`/products/${item.id}`}
                className="text-decoration-none text-start text-dark"
              >
                <div className="position-relative">
                  <img
                    src={item.image}
                    className={`card-img-top img-fluid ${styles.uniformImage}`}
                    alt={item.alt}
                  />
                </div>
              </NavLink>

              <div className="card-body px-0 py-2">
                <div className="d-flex flex-column gap-1 text-muted text-xs">
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink
                      to={`/products/${item.id}`}
                      className="text-decoration-none text-dark w-100"
                    >
                      <h6 className="card-title text-truncate mb-1 fw-semibold text-start">
                        {item.title}
                      </h6>
                    </NavLink>
                  </div>
                  <NavLink
                    to={`/products/${item.id}`}
                    className="text-decoration-none"
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <div className="fw-bold text-dark">₹ 2490</div>
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

export default Summer;
