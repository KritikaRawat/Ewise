import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellerLogin from "./screens/SellerLogin";
import SellerSignup from "./screens/SellerSignup";
import BuyerLogin from "./screens/BuyerLogin";
import BuyerSignup from "./screens/BuyerSignup";
import Home from "./screens/Home";
import Home1 from "./screens/home1";
import BargainPrice from "./screens/BargainPrice";
import Blogs from "./screens/Blogs";
import SellerList from "./screens/SellerList.js";
import Marketplace from "./screens/Marketplace";
import Blog1 from "./screens/Blog1";
import Blog2 from "./screens/Blog2";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Shop1 from "./screens/Shop1";
import SelectItems from "./screens/SelectItems.js";
import HomeFacility from "./screens/HomeFacility.js";
import Product from "./screens/Product.js";
import { CartProvider } from "./components/ContextReducer.js";
import MyOrder from './screens/MyOrder.js';
import Option from "./screens/Option.js";
import Additemsdonate from "./screens/Additemsdonate.js";
import PricesonMarketplace from "./screens/PricesonMarketplace.js";
import Emailchalo from "./screens/Emailchalo.js";
import { RewardContextProvider, useRewardPoints } from './screens/RewardContext.js';

function App() {
  return (
      <CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home1 />} />
          <Route exact path="/shop1" element={<Shop1 />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blog1" element={<Blog1 />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/createseller" element={<SellerSignup />} />
          <Route exact path="/createbuyer" element={<BuyerSignup />} />
          <Route exact path="/loginbuyer" element={<BuyerLogin />} />
          <Route exact path="/loginseller" element={<SellerLogin />} />
          <Route exact path="/marketplace" element={<Marketplace />} />
          <Route exact path="/auction" element={<BargainPrice />} />
          <Route exact path="/selectitems" element={<SelectItems />} />
          <Route exact path="/HomeFacility" element={<HomeFacility />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
          <Route exact path="/SellerList" element={<SellerList />} />
          <Route exact path="/PricesonMarketplace" element={<PricesonMarketplace />} />
          <Route exact path="/RewardPointsProvider" element={<RewardContextProvider />} />

          <Route exact path="/Option" element={<Option />} />
          <Route exact path="/Additemstodonate" element={<Additemsdonate />} />
          <Route exact path="/Emailchalo" element={<Emailchalo />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
