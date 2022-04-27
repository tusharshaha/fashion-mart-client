import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import NotFound from './Pages/NotFound/NotFound';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/About/About';
import Account from './Pages/Account/Account';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import Dashboard from './Components/Account/Dashboard/Dashboard/Dashboard';
import UserHome from './Components/Account/Dashboard/User/UserHome/UserHome';
import UserPrivateOutlet from './UserPrivateOutlet/UserPrivateOutlet';
import Orders from './Components/Account/Dashboard/User/Orders/Orders';

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
          <Route path='/account' element={<Account />} />
          {/* private dashboard for user  */}
          <Route path='/dashboard/*' element={<UserPrivateOutlet />}>
            <Route path='' element={<Dashboard />}>
              <Route path='' element={<UserHome />} />
              <Route path='orders' element={<Orders />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;