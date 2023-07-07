import React from 'react'
import { useDispatch } from "react-redux";
import { removeFromWishlist } from '../../redux/slices/wishlistSlice';

const WishlistComp = ({wishlist}) => {
    const dispatch = useDispatch();

  return (
   <div className="flex my-10 items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-contain"
        src={wishlist?.image}
      />
      <div className="w-[476px]">
        <div className="text-xl">{wishlist?.title}</div>
      </div>
      <div className="font-bold text-2xl">
        {wishlist?.price} $
      </div>
       <div onClick={() =>dispatch(removeFromWishlist(wishlist?.id))} className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center">DELETE</div>
    </div>
  )
}

export default WishlistComp