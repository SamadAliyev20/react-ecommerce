import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistCount } from "../redux/slices/wishlistSlice";
import WishlistComp from "../components/wishlist/WishlistComp";

const Wishlist = () => {
    const dispatch = useDispatch();
    const {wishlists} = useSelector(state =>state.wishlists)


    useEffect(()=>{
    dispatch(getWishlistCount())
    },[dispatch])
  return (
    <div>
    {wishlists.length > 0 ? (
      <div>
        {wishlists.map((wishlist, i) => {
          return <WishlistComp key={i} wishlist={wishlist} />;
        })}
      </div>
    ) : (
      <div className="flex justify-center cartDiv font-bold text-5xl">
        Wishlist is empty...
      </div>
    )}
  </div>
  )
}

export default Wishlist