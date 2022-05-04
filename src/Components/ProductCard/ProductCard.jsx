import React from "react";

const ProductCard = ({ product }) => {
  const { brand, description, image, name, price, quantity, supplier } =
    product;
  return (
    <div className="p-4 rounded-lg shadow hover:shadow-xl hover:translate-y-[-5px] duration-300">
      <div className="w-full">
        <img src={image} alt="" className="w-full rounded-lg mb-5" />
      </div>
      <h3 className="font-bold text-2xl capitalize text-gray-500 my-4">
        {name}
      </h3>
      <p className="font-semibold text-gray-500 flex justify-between items-center capitalize my-4">
        <span className="text-[#5c2d91]">brand: {brand}</span>{" "}
        <span>supplier: {supplier}</span>
      </p>
      <p className="font-semibold text-gray-500 flex justify-between items-center capitalize my-4">
        <span className="text-[#5c2d91]">
          price: ${price} <span className="text-xs"> /per pis</span>
        </span>{" "}
        <span>quantity: {quantity}</span>
      </p>
      <p className="text-md text-gray-500 capitalize">{description}</p>
      <button className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] my-3 w-full">
        update
      </button>
    </div>
  );
};

export default ProductCard;
