import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[460px] p-2 mx-2 mb-2  border rounded-md relative cursor-pointer'>
    <div className='text-3x1 font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product.price} <span className='font-bold'>$</span></div>
    <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} />   
    <div className='text-center px-3 mt-3 text-xl font-bold'>{product.title}</div> 
        
    </div>
  )
}

export default Product