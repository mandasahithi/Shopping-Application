import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavBar.module.css";
import Login from "../NavPages/Login";

function NavBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false); // Close the modal
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const leftLinks = [
    {
      path: "/shopbyseason",
      text: "SHOP BY SEASON",
      Dropdown: [
        { path: "/summer", text: "SUMMER" },
        { path: "/autumnWinter", text: "AUTUMN/WINTER" },
      ],
    },

    {
      path: "/topWear",
      text: "TOP WEAR",
      Dropdown: [
        { path: "/tees", text: "TEES" },
        { path: "/shirts", text: "SHIRTS" },
        { path: "/hoodies", text: "HOODIES" },
        { path: "/tanks", text: "TANKS" },
        { path: "/sweatShirts", text: "SWEAT SHIRTS" },
        { path: "/kurtas", text: "KURTAS" },
        { path: "/bomberJackets", text: "BOMBER JACKETS" },
        { path: "/coOrdsets", text: "CO-ORD SETS" },
      ],
    },
    {
      path: "/bottomWear",
      text: "BOTTOM WEAR",
      Dropdown: [
        { path: "/jeans", text: "JEANS" },
        { path: "/trousers", text: "TROUSERS" },
        { path: "/joggers", text: "JOGGERS" },
        { path: "/sweatPants", text: "SWEAT PANTS" },
      ],
    },
    {
      path: "/accessories",
      text: "ACCESSORIES",
      Dropdown: [
        { path: "/socks", text: "SOCKS" },
        { path: "/bottles", text: "BOTTLES" },
        { path: "/caps", text: "CAPS" },
      ],
    },
  ];

  const rightLinks = [{ path: "/cart", text: "CART" }, { text: "LOGIN" }];

  const rwdyLogo = [
    { path: "/about-us", text: "About RWDY" },
    { path: "/community", text: "Community Market" },
    { path: "/community/auctions", text: "RWDY Auctions" },
    { path: "/community/spotted", text: "Leaderboard" },
    { path: "/community/events", text: "RWDY IRL" },
    { path: "/community/recruit", text: "Recruit" },
  ];

  // Helper to render navigation links (desktop/mobile shared logic)
  const renderLinks = (links, isRight = false, isdropdown = true) => (
    <ul
      className={`navbar-nav 
  ${
    isRight
      ? "ms-auto text-end text-lg-end"
      : "me-auto text-center text-sm-center text-lg-start"
  } 
     d-flex gap-2 mb-2 mb-lg-0`}
    >
      {links.map((link, index) => (
        <li
          className={`nav-item ${
            isdropdown && link.Dropdown ? `dropdown` : ""
          } ${styles.navItem}  
        `}
          key={index}
        >
          {link.path ? (
            <NavLink className={`nav-link ${styles.navLink}`} to={link.path}>
              {" "}
              {link.text}
            </NavLink>
          ) : (
            <span
              className={`nav-link ${styles.navLink}`}
              style={{ cursor: "pointer" }}
              onClick={() => handleLoginClick()}
            >
              {link.text}
            </span>
          )}
          {isdropdown && link.Dropdown && (
            <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
              {link.Dropdown.map((subLink, subIndex) => (
                <li key={subIndex}>
                  <div className="d-flex align-items-center">
                    <NavLink className={styles.dropdownItem} to={subLink.path}>
                      {subLink.text}
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top bg-white ${styles.headerNavbar}`}
      >
        <div
          className={`d-flex align-items-center position-relative container-fluid  `}
        >
          <button
            className={`navbar-toggler ${styles.toggler} `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLinks"
            aria-controls="navbarLinks"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
          {/* Left Links */}
          <div
            className={`collapse navbar-collapse  ${styles.leftLinks} `}
            id="leftLinks"
          >
            {renderLinks(leftLinks)}
          </div>
          {/* Centered Brand */}
          <div className={`d-none d-lg-block ${styles.rwdyicon} `}>
            <NavLink to="/">
              <img src="rwdyicon.png" alt="Profile" width="180" height="40" />
            </NavLink>{" "}
          </div>
          <div
            className={`position-absolute  d-lg-none start-50 translate-middle-x ${styles.mobileRwdyicon}`}
          >
            <NavLink to="/">
              <img src="rwdyicon.png" alt="Profile" width="180" height="40" />
            </NavLink>
          </div>
          {/* Right Links */}
          <div className="d-flex align-items-center me-4">
            <div className="collapse navbar-collapse" id="rightLinks">
              {renderLinks(rightLinks, true)}
            </div>
            <div
              className={`dropdown position-relative ${styles.iconsContainer} `}
            >
              {/* bag and leaf icon */}
              <NavLink to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="3"
                  fill="gray"
                  stroke="black"
                  strokeWidth="0.4"
                  className={`bi bi-bag ${styles.carticon} d-lg-none  `}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 0-2 2v1H3.5A1.5 1.5 0 0 0 2 5.5v8A1.5 1.5 0 0 0 3.5 15h9A1.5 1.5 0 0 0 14 13.5v-8A1.5 1.5 0 0 0 12.5 4H10V3a2 2 0 0 0-2-2zm3 3H5V3a3 3 0 0 1 6 0v1z" />
                </svg>
              </NavLink>
              <button
                className={`btn ${styles.dropdowntoggle} dropdown-toggle p-0 border-0 `}
                type="button"
                id="brandMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="leafpic.png" alt="Profile" width="40" height="35" />
              </button>
              <ul
                className={`${styles.iconDropdown} dropdown-menu dropdown-menu-end `}
                aria-labelledby="brandMenuButton"
              >
                {rwdyLogo.map((link, index) => (
                  <li
                    className={`${styles.iconDropdownli} dropdown-item bg-transparent text-end`}
                    key={index}
                  >
                    <div className="d-flex flex-column ">
                      <NavLink
                        className={`${styles.iconDropdownNav}`}
                        to={link.path}
                      >
                        {link.text}
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile View - Collapsed Menu */}
        <div
          className={`
                d-flex d-lg-none flex-column justify-content-center 
                ${styles.smallmenu} 
                ${menuOpen ? styles.menuShow : styles.menuHide}
              `}
        >
          <div
            className={`collapse navbar-collapse ${styles.hanburgerMenu} `}
            id="navbarLinks"
          >
            {renderLinks(leftLinks, false, false)}
            <hr></hr>
            {/* <Link className={`${styles.navLink}`} to={'/login'}>{"LOGIN"}</Link> */}
            {/* {renderLinks(
              rightLinks.filter((link) => link.text === "LOGIN"),
              false,
              false
            )} */}
            {renderLinks(rightLinks, false)}
          </div>
        </div>
      </nav>
      {showLoginModal && (
        <Login handleCloseLoginModal={handleCloseLoginModal} />
      )}
    </div>
  );
}

export default NavBar;
