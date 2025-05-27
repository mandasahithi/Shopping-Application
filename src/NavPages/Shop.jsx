import React, { useEffect } from "react";
import styles from "./Rwdy.module.css"; // Import your custom CSS
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/ShoppingProducts/action";
import { Link, NavLink } from "react-router-dom";
import poster from "../assets/poster.jpg";

const Shop = () => {
  const ShopLinks = [
    { path: "/summer", text: "SUMMER" },
    { path: "/autumnWinter", text: "AUTUMN/WINTER" },
    { path: "/socks", text: "SOCKS" },
    { path: "/bottles", text: "BOTTLES" },
    { path: "/trousers", text: "TROUSERS" },
    { path: "/joggers", text: "JOGGERS" },
    { path: "/sweatPants", text: "SWEAT-PANTS" },
    { path: "/jeans", text: "JEANS" },
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
    <ul className="d-flex gap-2 list-unstyled flex-wrap align-items-center justify-content-end overflow-auto my-1 py-1 ps-3 w-100 ">
      {links.map((link, index) => (
        <li className={`nav-item ${styles.navItem}`} key={index}>
          <NavLink className={`nav-link ${styles.navLink}`} to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  const { products, isLoading, isError } = useSelector(
    (store) => store.ProductReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className={`d-flex  flex-column gap-3 ${styles.maincontainer}`}>
        {isLoading && <h1>Loading....</h1>}
        {isError && <h1>Error..........</h1>}

        {/* Show message if no products are available */}
        {!isLoading && products.length === 0 && <p>No products available.</p>}
        <div
          className={`d-flex position-relative justify-content-end   align-items-center gap-2 me-2`}
        >
          <div className={`fs-6`}>{renderLinks(ShopLinks)}</div>
        </div>
        {/* Show  only if there are products */}
        {products.length > 0 && (
          <div>
            <div className={styles.gridContainer}>
              {products.map((item, i) => (
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
                      <div className="d-flex flex-column justify-content-between align-items-center">
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
            <div>
              <img
                src={poster}
                className={`${styles.postering} mt-4`}
                alt="poster"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
