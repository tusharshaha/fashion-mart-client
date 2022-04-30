import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import NotFound from './Pages/NotFound/NotFound';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/About/About';
import Account from './Pages/Account/Account';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserHome from './Components/Account/Dashboard/User/UserHome/UserHome';
import UserPrivateOutlet from './UserPrivateOutlet/UserPrivateOutlet';
import Orders from './Components/Account/Dashboard/User/Orders/Orders';
import OrderDetails from './Components/Account/Dashboard/User/Orders/OrderDetails';
import Downloads from './Components/Account/Dashboard/User/Downloads/Downloads';
import Address from './Components/Account/Dashboard/User/Address/Address';
import EditAccount from './Components/Account/Dashboard/User/EditAccount/EditAccount';
import AdminPrivateOutlet from './AdminPrivateOutlet/AdminPrivateOutlet';
import './App.css'
import ManageOrder from './Components/Account/Dashboard/Admin/ManageOrder/ManageOrder';
import ManageUser from './Components/Account/Dashboard/Admin/ManageUser/ManageUser';
import Checkout from './Pages/Checkout/Checkout';

const App: React.FC = () => {
  // initialize AOS
  useEffect(() => {
    AOS.init({ offset: 160, duration: 1000, delay: 300 });
  });
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<Account />} />
          {/* private dashboard for user  */}
          <Route path='/dashboard/*' element={<UserPrivateOutlet />}>
            <Route path='' element={<Dashboard />}>
              <Route path='' element={<UserHome />} />
              <Route path='orders' element={<Orders />} />
              <Route path='orders/:orderId' element={<OrderDetails />} />
              <Route path='downloads' element={<Downloads />} />
              <Route path='address' element={<Address />} />
              <Route path='account-details' element={<EditAccount />} />
            </Route>
          </Route>
          {/* private dashboard for admin  */}
          <Route path='/dashboard/*' element={<AdminPrivateOutlet />}>
            <Route path='' element={<Dashboard />}>
              <Route path='manage-order' element={<ManageOrder />} />
              <Route path='manage-user' element={<ManageUser />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;