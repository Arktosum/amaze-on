import { Link } from 'react-router-dom'
import cavil from './henry-cavill.jpg'

export default function Navbar() {

  return (
    <div className='bg-gray-800 p-2 flex justify-between'>
        <img src={cavil} alt="" className='rounded-full w-20 h-20'/>
        <p className='text-white'>1</p>
        <img name="cart" 
        src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png"
        alt=""
        className='w-20 h-20'/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
