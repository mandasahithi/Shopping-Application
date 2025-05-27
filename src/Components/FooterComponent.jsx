// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const shopbyseason = [
  { path: '/shopbyseason', text: "SHOP BY SEASON" },
  {path:'/summer',text:'SUMMER'},
  {path:'/autumnWinter', text:"AUTUMN/WINTER"},
]
const topWear=[

  { path: '/topWear', text: "TOP WEAR"} ,
        {path:'tees' , text:"TEES"},
        {path:'shirts' , text:"SHIRTS"},
        {path:'hoodies' , text:"HOODIES"},
        {path:'tanks' , text:"TANKS"},
        {path:'sweatShirts' , text:"SWEAT SHIRTS"},
        {path:'kurtas' , text:"KURTAS"},
        {path:'bomberJackets' , text:"BOMBER JACKETS"},
        {path:'coOrdsets' , text:"CO-ORD SETS"}]
 const bottomWear=[
  {path:'/bottomWear',text:"BOTTOM WEAR"},
  {path:'jeans' , text:"JEANS"},
  {path:'trousers' , text:"TROUSERS"},
  {path:'joggers' , text:"JOGGERS"},
  {path:'sweatPants' , text:"SWEAT PANTS"},
 ];
 const accessories=[
  { path: '/accessories', text: "ACCESSORIES"},
  {path:'/socks',text:'SOCKS'}
];

const companyLinks=[
  {path:'/aboutus' , text:"ABOUT US"},
  {path:'/termsAndConditions' , text:"TERMS & CONDITIONS"},
  {path:'/privacyPolicy', text:"PRIVACY POLICY"},
  {path:'/returnPolicy' , text:"RETURN POLICY"},
  {path:'/faqs' , text:"FAQs"}

]

const FooterComponent = () => {
  return (
    <>
    <div className="d-flex flex-wrap  footer-fix flex-column gap-5 ">
      <div className= "footer-fix container-fluid px-4 mt-4">
       <div className={styles.gridLayout}>
            {/* Address Section */}
            <div className="d-flex align-items-start gap-2 flex-column">
              <h1>RWDY</h1>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt fs-6"></i>
                <span className={styles.footerfont}>Hyderabad Telangana 500073</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone fs-6"></i>
                <span className={styles.footerfont}>+91 912121200335/6/7</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope fs-6"></i>
                <span className={styles.footerfont}>hey@rwdy.in</span>
              </div>
            </div>

            {/* Shop Section */}
            <div className={`d-flex flex-column gap-3 col-md-12 col-12 text-start ${styles.font}`}>
             
              {/* shopbyseason */}
              <div className={`d-flex flex-column gap-0 col-md-6 col-12 text-start ${styles.font} `}>
              <h6>Shop</h6>
              {shopbyseason.map((link, index) => (
                <Link
                  key={index}
                  className={`me-3 text-decoration-none ${styles.glow}`}
                  to={link.path}
                >
                  {link.text}
                </Link>
              ))}
              </div>
            
                {/* Top Wear */}
                <div className={`d-flex flex-column gap-0 col-md-6 col-12 text-start ${styles.font}`}>
                {topWear.map((link , index)=>(
                  <Link key={index} 
                  className={`me-3 text-decoration-none ${styles.glow}`}  to={link.path}>
                    {link.text}
                  </Link>
                ))}
                </div>
                {/* bottomWear */}
                <div className={`d-flex flex-column gap-0 col-md-6 col-12 text-start ${styles.font}`}>
                {bottomWear.map((link,index)=>(
                  <Link key={index} className={`me-3 text-decoration-none ${styles.glow}`} 
                  to={link.path}> {link.text}
                  </Link>
               ))}
                </div>
                {/* accessories */}
                <div className={`d-flex flex-column gap-0 col-md-6 col-12 text-start ${styles.font}`}>
                  {accessories.map((link , index)=>(
                    <Link key={index} className={`me-3 text-decoration-none ${styles.glow}`} to={link.path}>{link.text}</Link>
                  ))

                  }

                </div>
            </div>

            {/* Future Section Placeholder */}
            <div className={`d-flex flex-column gap-0 col-md-12 col-12 text-start ${styles.font}`}>
              <h6>Company</h6>
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  className={`me-3 text-decoration-none ${styles.glow}`}
                  to={link.path}
                >
                  {link.text}
                </Link>
              ))}            
            </div>
            {/* follow us on section */}
              <div className={`d-flex flex-column gap-1 col-md-12 col-12 text-start ${styles.font}`}>
                <h6>Follow us on</h6>
                <div className={`d-flex align-items-center gap-2`}> 
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-youtube"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter-x"></i>
                  <i className="bi bi-pinterest"></i>
                </div>

              </div>
        </div>
        </div>
    </div>
    
      {/* Footer Bottom */}
      <div className={`w-100   text-start px-4 py-3 mt-3 ${styles.footerBottom}`}>
  <p className="mb-0">@2025 rwdy. All rights reserved</p>
</div>

    </>
  );
};

export default FooterComponent;
