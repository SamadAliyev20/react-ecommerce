import React from "react";

const DetailComp = ({ productDetail }) => {
  return (
    <div className="flex  gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-contain"
        src={
          productDetail.image
        }
        alt=""
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
        <div className="flex gap-6 my-4 align-middle">
          <div className="text-4xl cursor-pointer">-</div>
          <input className="w-5 text-center text-4xl font-bold" value={"0"} />
          <div className="text-4xl cursor-pointer">+</div>
        </div>
        <div className="border w-[200px] text-2xl my-4 rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center">
          Add Cart
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
