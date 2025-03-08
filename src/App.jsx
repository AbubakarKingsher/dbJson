import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productDetail/:id' element={<ProductDetail />} />
        <Route path='/checkOut' element={<CheckOut />} />
        <Route path='/createProduct' element={<CreateProduct />} />
      </Routes>
    </>
  );
}

export default App