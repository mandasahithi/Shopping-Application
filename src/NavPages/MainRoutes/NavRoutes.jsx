import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Accessories from "../Accessories/Accessories";
import TopWear from "../TopWear/TopWear";
import Rwdy from "../Rwdy";
import Cart from "../Cart/Cart";
import Socks from "../Accessories/Socks";
import BottomWear from "../BottomWear/BottomWear";
import Trousers from "../BottomWear/Trousers";
import Joggers from "../BottomWear/Joggers";
import SweatPants from "../BottomWear/SweatPants";
import Jeans from "../BottomWear/Jeans";
import Tees from "../TopWear/Tees";
import Shirts from "../TopWear/Shirts";
import Hoodies from "../TopWear/Hoodies";
import Tanks from "../TopWear/Tanks";
import Kurtas from "../TopWear/Kurtas";
import BomberJackets from "../TopWear/BomberJackets";
import CoOrdsets from "../TopWear/CoOrdsets";
import Summer from "../ShopBySeason/Summer";
import ShopBySeason from "../ShopBySeason/ShopBySeason";
import SweatShirts from "../TopWear/SweatShirts";
import AutumnWinter from "../ShopBySeason/AutumnWinter";
import AboutRWDY from "../RwdyLogoDropdownPages/AboutRWDY";
import CommunityMarket from "../RwdyLogoDropdownPages/CommunityMarket";
import RWDYAuctions from "../RwdyLogoDropdownPages/RWDYAuctions";
import Leaderboard from "../RwdyLogoDropdownPages/Leaderboard";
import RWDYIRL from "../RwdyLogoDropdownPages/RWDYIRL";
import Recruit from "../RwdyLogoDropdownPages/Recruit";
import Shop from "../Shop";
import AboutUs from "../CompanyPages/AboutUS";
import TermsAndConditions from "../CompanyPages/TermsAndConditions";
import PrivacyPolicy from "../CompanyPages/PrivacyPolicy";
import ReturnPolicy from "../CompanyPages/ReturnPolicy";
import Faqs from "../CompanyPages/Faqs";
import Bottles from "../Accessories/Bottles";
import Product from "../Product/Product";
import Caps from "../Accessories/Caps";

function NavRoutes() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/products/:id" element={<Product />} />

        <Route path="/shopbyseason" element={<ShopBySeason />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/autumnWinter" element={<AutumnWinter />} />
        <Route path="/topWear" element={<TopWear />} />
        <Route path="/tees" element={<Tees />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/tanks" element={<Tanks />} />
        <Route path="/sweatShirts" element={<SweatShirts />} />
        <Route path="/kurtas" element={<Kurtas />} />
        <Route path="/bomberJackets" element={<BomberJackets />} />
        <Route path="/coOrdsets" element={<CoOrdsets />} />
        <Route path="/bottomWear" element={<BottomWear />} />
        <Route path="/trousers" element={<Trousers />} />
        <Route path="/joggers" element={<Joggers />} />
        <Route path="/sweatPants" element={<SweatPants />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/socks" element={<Socks />} />
        <Route path="/bottles" element={<Bottles />} />
        <Route path="/caps" element={<Caps />} />
        <Route path="/" element={<Rwdy />} />
        <Route path="/cart" element={<Cart />} />

        {/* rwdy-logo paths */}
        <Route path="/about-us" element={<AboutRWDY />} />
        <Route path="/community" element={<CommunityMarket />} />
        <Route path="/community/auctions" element={<RWDYAuctions />} />
        <Route path="/community/spotted" element={<Leaderboard />} />
        <Route path="/community/events" element={<RWDYIRL />} />
        <Route path="/community/recruit" element={<Recruit />} />
        {/* Rwdy page paths */}
        <Route path="/shop" element={<Shop />}></Route>
        {/* company pages paths */}
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route
          path="/termsandconditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/returnpolicy" element={<ReturnPolicy />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
      </Routes>
    </div>
  );
}
export default NavRoutes;
