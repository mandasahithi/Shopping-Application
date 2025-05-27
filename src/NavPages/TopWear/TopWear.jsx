import React from "react";
import styles from "../TopWear/TopWear.module.css"; // Import your custom CSS
import { Link, NavLink } from "react-router-dom";
import tees1 from "../../assets/TopWear/tees1.jpg";
import poster from "../../assets/poster.jpg";

function TopWear() {
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
    <ul className="d-flex gap-2 list-unstyled flex-wrap  ">
      {links.map((link, index) => (
        <li className={`nav-item ${styles.navItem}`} key={index}>
          <NavLink className={`nav-link ${styles.navLink}`} to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  // images
  const Products = [
    {
      link: "/link",
      image: tees1,
      alt: "RWDY SUMMER FORMAL SHIRT",
      productName: "RWDY SUMMER FORMAL SHIRT",
      price: 3000,
    },
    {
      link: "/link",
      image: "SummerwinterDresses/Summer2.jpg",
      alt: "RWDY SUMMER WHITE SKIRT",
      productName: "RWDY SUMMER WHITE SKIRT",
      price: 2500,
    },
    {
      link: "/link",
      image: "SummerwinterDresses/Summer3.jpg",
      alt: "RWDY SUMMER COTTON DRESS",
      productName: "RWDY SUMMER COTTON DRESS",
      price: 1500,
    },
    {
      link: "/link",
      image: "SummerwinterDresses/Summer4.jpg",
      alt: "RWDY SUMMER YELLOW DRESS",
      productName: "RWDY SUMMER YELLOW DRESS",
      price: 3500,
    },
    {
      link: "/link",
      image: "SummerwinterDresses/Summer5.jpg",
      alt: "RWDY SUMMER GOA SHIRT",
      productName: "RWDY SUMMER GOA SHIRT",
      price: 1800,
    },
    {
      link: "/link",
      image: "SummerwinterDresses/Summer6.jpg",
      alt: "RWDY SUMMER FLOWERS SKIRT",
      productName: "RWDY SUMMER FLOWERS SKIRT",
      price: 3200,
    },
    {
      link: "/link",
      image: "SummerwinterDresses/Summer7.jpg",
      alt: "RWDY SUMMER PURPLE FROCK",
      productName: "RWDY SUMMER PURPLE FROCK",
      price: 1200,
    },
    {
      link: "/link",
      image: "SummerwinterDresses/winter1.jpg",
      alt: "RWDY WINTER JACKET",
      productName: "RWDY WINTER JACKET",
    },
    {
      link: "/link",
      image: "SummerwinterDresses/winter2.jpg",
      alt: "RWDY WINTER JACKET MEN",
      productName: "RWDY WINTER JACKET MEN",
    },
    {
      link: "/link",
      image: "SummerwinterDresses/winter3.jpg",
      alt: "RWDY WINTER FROCK",
      productName: "RWDY WINTER FROCK",
    },
    {
      link: "/link",
      image: "SummerwinterDresses/winter4.jpg",
      alt: "RWDY WINTER TOTAL-OUTFIT",
      productName: "RWDY WINTER TOTAL-OUTFIT",
    },
    {
      link: "/link",
      image: "SummerwinterDresses/winter5.jpg",
      alt: "RWDY WINTER CROPTOP-SKIRT",
      productName: "RWDY WINTER CROPTOP-SKIRT",
    },
  ];
  return (
    <div className={`d-flex  flex-column gap-3 ${styles.maincontainer}`}>
      <div
        className={`d-flex position-relative justify-content-end align-items-center gap-2 me-2 `}
      >
        <div className={`fs-6 `}>{renderLinks(TopWearLinks)}</div>
      </div>

      <div>
        <div className={styles.gridContainer}>
          {Products.map((item, i) => (
            <div className={`card border-0`} key={i}>
              {/* card: Bootstrap's card component used to create a flexible and extensible content container. */}
              <a
                href={item.link}
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
              </a>
              <div className="card-body px-0 py-2">
                {/* card-body: Bootstrap's standard class for the body content of a card. */}
                <div className="d-flex flex-column gap-1 text-muted text-xs">
                  {/* text-muted: Applies Bootstrap's muted (light gray) text color.
                text-xs: Not a Bootstrap class by default, likely a custom utility for extra-small font size. */}
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href={item.link}
                      className="text-decoration-none text-dark w-100"
                    >
                      <h6 className="card-title text-truncate mb-1 fw-semibold text-start">
                        {/* card-title: Standard Bootstrap class for titles inside cards.
                      text-truncate: Truncates the text with an ellipsis if it's too long. */}
                        {item.productName}
                      </h6>
                    </a>
                  </div>
                  <a href={item.link} className="text-decoration-none">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="fw-bold text-dark">₹ 2490</div>
                    </div>
                  </a>
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

export default TopWear;
