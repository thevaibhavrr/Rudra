import React from 'react';
import Navbar from './Utils/Navbar';
import Home from './Pages/Home';
import Footer from './Components/footer/footer';
import { Route, Routes, useLocation } from "react-router-dom";
import Contect from './Pages/Contect';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contect />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
