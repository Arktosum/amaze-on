import React from 'react'
import cavil from './henry-cavill.jpg'

export default function Navbar() {
  return (
    <div className='bg-gray-800 p-2'>
        <img src={cavil} alt="" width="100" height="100"></img>
    </div>
  )
}
