import React from 'react'
import Navbar from './Utils/Navbar'
import Home from './Pages/Home'
import Footer from './Components/footer/footer'
import FactsAboutMe from './Pages/test'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App