import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products] = useProducts(0, user.email);

  return (
    <>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          my items
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="md:grid grid-cols-2 lg:grid-cols-3 my-20 gap-5">
          {products.map((product) => {
            const {
              _id,
              brand,
              description,
              image,
              name,
              price,
              quantity,
              supplier,
            } = product;
            return (
              <div
                key={_id}
                className="p-4 rounded-lg shadow hover:shadow-xl hover:translate-y-[-5px] duration-300"
              >
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
                  <span className="text-[#5c2d91]">{price}$/per pis</span>{" "}
                  <span>quantity: {quantity}</span>
                </p>
                <p className="text-gray-500 capitalize">{description}</p>
                <button className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] my-3 w-full">
                  update
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyItems;
