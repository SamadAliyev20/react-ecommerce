import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cardSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";
const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail.price,
        quantity: quantity,
      })
      

    );
  };
  const addWishlist = () => {
    dispatch(
      addToWishlist({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    )
  }
  return (
    <div className="flex  gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-contain"
        src={productDetail.image}
      />
      <div className="p-10">
        <div className="text-2xl font-bold">{productDetail.title}</div>
        <div className="my-2">{productDetail.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating: {productDetail.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count: {productDetail.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail.price} <span className="text-xl font-semibold">$</span>
        </div>
        <div className="flex gap-8 my-4 align-middle">
          <div onClick={decrement} className="text-4xl cursor-pointer">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold bg-inherit"
            disabled
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] text-2xl my-4 rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center"
        >
          Add Cart
        </div>
        <div
          onClick={addWishlist}
          className="border w-[200px] text-2xl my-4 rounded-md bg-red-500 cursor-pointer h-16 flex items-center justify-center"
        >
          Add Wishlist
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
