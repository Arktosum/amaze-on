import React from 'react'

export default function Product(props) {
  let {product} = props.props
  let containerStyle = `
  cursor-pointer
  w-[30vw] h-[30vh]
  sm:w-[30vw] sm:h-[20vh]
  md:w-[300px] md:h-[300px]
  rounded shadow-lg hover:scale-105 hover:shadow-black 
  transition ease-in-out delay-150
  `
  let imageStyle=`
  resize
  w-[30vw] h-[30vh] 
  sm:w-[30vw] sm:h-[20vh]
  sm:w-[100px] md:w-[300px]
  `
  let descriptionStyle=`
  h-[0px] sm:w-[0px] md:w-[300px] 
  bg-blue-600 rounded-br rounded-bl 
  flex flex-col overflow-hidden
  
  `
  
  return (
    <div className={containerStyle}>
      <div className={imageStyle}>
        <img src={product['url']} className=""alt="" layout="fill"/>
      </div>
      <div className={descriptionStyle}>
        <p className='text-sm md:text-md overflow-hidden'><span>{product['name']}</span></p>
        <p className='text-sm md:text-md overflow-hidden'>Price : <span>₹ {product['price']}</span></p>
        <p className='text-sm md:text-md overflow-hidden'>In Stock : <span>{parseInt(Math.random()*100)}</span></p>
      </div>
    </div>
  )
}
