import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import NotFound from './Pages/NotFound/NotFound';
import ContactUs from './Pages/ContactUs/ContactUs';

const App: React.FC = () => {
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;