import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Productlist from './components/Productlist'
import Header from './components/Header'
import ProductDetails from './components/Productdetails';


function App() {
  return (
    <div>
      
  
      
      <BrowserRouter >
      <Header/>
    <div className="container mt-4">
      
      <Routes>
        <Route path="/" element={<Productlist />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </BrowserRouter>


    </div>
  )
}

export default App