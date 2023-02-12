
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductPage from './Components/ProductPage';
import CheckoutPage from './Components/CheckoutPage';

function App() {

  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<ProductPage/>}></Route>
    <Route path="/checkout" element={<CheckoutPage/>}></Route>
  </Routes>
  </>

  );
}

export default App;
