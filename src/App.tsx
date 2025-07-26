// import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import { sourceData } from './Data'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar data={sourceData} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home data={sourceData} />} />
        <Route path="/contact" element={<ContactUs data={sourceData}/>} />
      </Routes>
      <Footer data={sourceData}/>  
    </BrowserRouter>  
      
    </>
  )
}

export default App
