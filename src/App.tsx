import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ offset: 160, duration: 1200, delay: 300 });
  });
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;