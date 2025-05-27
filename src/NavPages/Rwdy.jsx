import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Rwdy.module.css"; // Import your custom CSS
import { Link } from "react-router-dom";
import video from "../videos/shoppingvideo.mp4"; // Import your video file

function Rwdy() {
  return (
    <div className="container mb-5">
      {/* Video Banner */}
      <div className="banner my-3 my-md-5 w-100 mx-auto">
        <div className={`${styles.videoBannerWrapper}`}>
          {/* Desktop Video */}
          <video width="100%" autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`${styles.videoBannerMobile} block md:hidden`}
          >
            <source
              src="https://assets.therowdy.club/IMG_5289.MP4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* SHOP NOW Button */}
        <div className="d-flex justify-content-end">
          <div className={styles.rwdyshopli}>
            <Link to="/shop" className="text-decoration-none">
              <button
                type="button"
                className={`${styles.shopnow} ${styles.shopbtn} btn bg-black text-white px-4 py-2 rounded-2 fw-medium d-flex align-items-center justify-content-center`}
              >
                <span>SHOP NOW</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Shop by Season Section */}
      <div className="container mb-5 mt-xl-5">
        <div className="d-flex row justify-content-between align-items-center">
          {/* Left Side: Button + Drop Text */}
          <div className="col-auto d-flex flex-column align-items-start">
            <Link to="/shopbyseason" className="text-decoration-none">
              <button
                type="button"
                className={`${styles.shopbtn} btn bg-black text-white px-4 py-2 rounded fw-medium d-flex align-items-center justify-content-center`}
              >
                <span>SHOP BY SEASON</span>
              </button>
            </Link>
            <div>
              <p className="text-danger fs-6">Drop is live!</p>
            </div>
          </div>

          {/* Right Side: Responsive Image */}
          <div className="col-auto">
            {/* Small Screens Image */}
            <img
              src="reclaim_supremacy.png"
              alt="Reclaim Indian Supremacy"
              className={`${styles.supremacy} d-md-none ml-auto`}
            />

            {/* Medium and Larger Screens Image */}
            <img
              src="reclaim_supremacy.png"
              alt="Reclaim Indian Supremacy"
              className={`${styles.supremacylg} d-none d-md-block ml-auto`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rwdy;
