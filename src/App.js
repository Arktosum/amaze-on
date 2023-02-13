
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductPage from './Components/ProductPage';
import CheckoutPage from './Components/CheckoutPage';
import React from 'react'

export default function App() {
  let [userCart,addToCart] = React.useState([])
  
  return (
  <>
  <ChakraProvider>
  <Navbar/>
  <Routes>
    <Route path="/" element={<ProductPage addToCart={addToCart} cart={userCart}/>}></Route>
    <Route path="/checkout" element={<CheckoutPage cart={userCart} />}></Route>
  </Routes>
  </ChakraProvider>
  </>
  );
}

