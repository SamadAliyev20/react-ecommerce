import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/slices/cardSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount} = useSelector((state) => state.carts);


  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => {
            return <CartComp key={i} cart={cart} />;
          })}
          <div className="flex justify-end font-bold text-3xl">
            TOTAL: <span>{totalAmount}</span> $
          </div>
        </div>
      ) : (
        <div className="flex justify-center cartDiv font-bold text-5xl">
          Cart is empty...
        </div>
      )}
    </div>
  );
};

export default Cart;
