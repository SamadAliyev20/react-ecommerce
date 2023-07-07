import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/slices/cardSlice";
import { useNavigate } from "react-router-dom";
import { getWishlistCount } from "../../../redux/slices/wishlistSlice";
import { changeSearchTerm } from "../../../redux/slices/productSlice";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  
  const { wishlists } = useSelector((state) => state.wishlists);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal(), getWishlistCount());
  }, [dispatch, carts, wishlists]);
  return (
    <div className="flex items-center gap-8 ">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          placeholder="Search..."
        />
        <BiSearch className="cursor-pointer" size={28} />
      </div>
      <div
        onClick={() => navigate("wishlist")}
        className="relative cursor-pointer"
      >
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {wishlists.length}
        </div>
        <AiOutlineHeart size={28} />
      </div>
      <div onClick={() => navigate("cart")} className="relative cursor-pointer">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {carts.length}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
