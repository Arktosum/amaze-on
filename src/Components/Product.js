import React from 'react'

export default function Product(props) {
  let {product} = props.props
  let containerStyle = `
  cursor-pointer
  w-[100px] h-[500px]
  md:w-[300px]
  rounded shadow-lg hover:scale-105 hover:shadow-black 
  transition ease-in-out delay-150
  `
  
  return (
    <div className={containerStyle}>
      <div className='h-[300px] sm:w-[100px] md:w-[300px]'>
        <img src={product['url']} className=""alt="" layout="fill"/>
      </div>
      <div className="h-[200px] sm:w-[100px] md:w-[300px] bg-blue-600 rounded-br rounded-bl flex flex-col overflow-hidden">
        <p className='text-sm md:text-md overflow-hidden'><span>{product['name']}</span></p>
        <p className='text-sm md:text-md overflow-hidden'>Price : <span>₹ {product['price']}</span></p>
        <p className='text-sm md:text-md overflow-hidden'>In Stock : <span>{parseInt(Math.random()*100)}</span></p>
      </div>
    </div>
  )
}
