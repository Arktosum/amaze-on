
import './App.css';
import Navbar from './Components/Navbar';
import ProductPage from './Components/ProductPage';
import { Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {

  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<ProductPage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
  </Routes>
  </>

  );
}

export default App;
