import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Account,
  Address,
  AdminPrivateOutlet,
  Cart,
  Checkout,
  ContactUs,
  Dashboard,
  Downloads,
  EditAccount,
  Home,
  ManageOrder,
  ManageUser,
  NotFound,
  OrderDetails,
  Orders,
  Shop,
  UserHome,
  UserPrivateOutlet,
  Wishlist,
} from "./Routes";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";

const App: React.FC = () => {
  // initialize AOS
  useEffect(() => {
    AOS.init({ offset: 160, duration: 1000, delay: 300, once: true });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          {/* private dashboard for user  */}
          <Route path="/dashboard/*" element={<UserPrivateOutlet />}>
            <Route path="" element={<Dashboard />}>
              <Route path="" element={<UserHome />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders/:orderId" element={<OrderDetails />} />
              <Route path="downloads" element={<Downloads />} />
              <Route path="address" element={<Address />} />
              <Route path="account-details" element={<EditAccount />} />
            </Route>
          </Route>
          {/* private dashboard for admin  */}
          <Route path="/dashboard/*" element={<AdminPrivateOutlet />}>
            <Route path="" element={<Dashboard />}>
              <Route path="manage-order" element={<ManageOrder />} />
              <Route path="manage-user" element={<ManageUser />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
