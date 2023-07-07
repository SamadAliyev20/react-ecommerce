import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cardSlice";

const CartComp = ({ cart }) => {
    const dispatch = useDispatch();
  return (
    <div className="flex my-10 items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-contain"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart.price} $ ({cart.quantity})
      </div>
       <div onClick={() =>dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center">DELETE</div>
    </div>
  );
};

export default CartComp;
