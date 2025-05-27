import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Rwdy.module.css"; // Import your custom CSS
import { Link } from "react-router-dom";

const countryList = [
  {
    name: "India",
    code: "in",
    dialCode: "+91",
    flag: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ee-1f1f3.svg",
  },
  {
    name: "United States",
    code: "us",
    dialCode: "+1",
    flag: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg",
  },
  {
    name: "United Kingdom",
    code: "gb",
    dialCode: "+44",
    flag: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ec-1f1e7.svg",
  },
];

function Login({ handleCloseLoginModal }) {
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [phoneNumber, setPhoneNumber] = useState(`${countryList[0].dialCode} `);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setPhoneNumber(`${country.dialCode} `);
  };

  return (
    <>
      <div
        className={`modal fade show d-block `}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div
          className={`${styles.loginContainer} modal-dialog modal-dialog-centered`}
          role="document"
        >
          <div className="modal-content ">
            <div className=" d-flex justify-content-center align-items-center">
              <h5 className="modal-title mt-5 ">
                <img
                  src="rwdyicon.png"
                  alt="Profile"
                  width="180"
                  height="40"
                  className="mx-auto d-block"
                />
                <span className={`${styles.loginCaption}`}>
                  INDIAN STREET CULTURE
                </span>
              </h5>
              {/* Close button aligned at the top right */}
              <button
                type="button"
                className={`btn-close position-absolute ${styles.loginClose}`}
                onClick={handleCloseLoginModal}
              ></button>
            </div>

            <div className={`modal-body  `}>
              <div
                className={`d-flex flex-column gap-2   mb-5  ${styles.logincc2} `}
              >
                <img
                  src="LoginPoster.png"
                  alt="Profile"
                  width="100%"
                  height="250vh"
                />
                <h5 className=" mt-2 text-start " style={{ color: "black" }}>
                  <b>LOG IN/SIGN UP</b>
                </h5>
                <p className="text-muted mb-1 mt-0 text-start">
                  Enter Your Mobile Number
                </p>
                <div
                  className="d-flex align-items-center"
                  style={{ height: "40px" }}
                >
                  {/* Country selector */}
                  <div className="dropdown me-2">
                    <button
                      className={`btn  d-flex align-items-center  ${styles.CountrySelector}`}
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
                        style={{
                          width: "30px",
                          marginRight: "2px",
                          margin: "1px",
                          padding: "0px",
                        }}
                      />
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {countryList.map((country) => (
                        <li key={country.code}>
                          <button
                            className={`dropdown-item ${
                              selectedCountry.code === country.code
                                ? "active"
                                : ""
                            }`}
                            onClick={() => handleSelectCountry(country)}
                          >
                            <img
                              src={country.flag}
                              alt={country.name}
                              style={{ width: "20px", marginRight: "5px" }}
                            />
                            {country.name} ({country.dialCode})
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phone number input */}
                  <input
                    type="tel"
                    className={`form-control ${styles.numberInput}`}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{
                      height: "40px",
                      borderRadius: "0.4rem",
                      paddingTop: "0.825rem",
                      paddingBottom: "0.625rem",
                    }}
                  />
                </div>
                <span className={`small text-black`}>
                  By Continuing, I Agree to the{" "}
                  <Link className={` ${styles.loginTC}`}>
                    Terms of conditions
                  </Link>{" "}
                  &<Link className={`${styles.loginPP}`}> Privacy Policy</Link>
                </span>
                <div className="d-flex flex-row justify-content-end mt-2">
                  <button type="button" className={`btn ${styles.loginOTP}`}>
                    Request OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
