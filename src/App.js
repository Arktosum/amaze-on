
import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductPage from './Components/ProductPage';
import CheckoutPage from './Components/CheckoutPage';
import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';

export default function App() {
  let [userCart,addToCart] = React.useState([])
  
  return (
  <>
  <ChakraProvider>
  <Navbar/>
  <Link to='/login'>LOGIN</Link>
  <Link to='/signup'>SIGNUP</Link>
  <Routes>
    <Route path="/" element={<ProductPage addToCart={addToCart} cart={userCart}/>}></Route>
    <Route path="/checkout" element={<CheckoutPage cart={userCart}/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>

  </Routes>
  </ChakraProvider>
  </>
  );
}

