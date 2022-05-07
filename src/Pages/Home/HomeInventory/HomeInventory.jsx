import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";

import useProducts from "../../../hooks/useProducts";
import Spinner from "../../../Components/Spinner/Spinner";

const HomeInventory = () => {
  const [products] = useProducts(6);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-36">
      <h2 className="text-4xl font-bold text-gray-600 capitalize text-center relative">
        our <span className="text-[#5c2d91]">inventory</span>
        <span className="absolute bottom-[-16px] left-[50%] translate-x-[-50%] w-36 h-2 rounded-lg bg-[#5c2d91]"></span>
      </h2>

      {/* render 6 product  */}
      {products.length === 0 ? <Spinner /> : ""}
      <div className="md:grid grid-cols-2 lg:grid-cols-3 my-20 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => navigate("/inventory")}
          className="text-semibold capitalize text-[#5c2d91] hover:text-white px-8 py-3 rounded-lg shadow-lg text-lg bg-white hover:bg-[#5c2d91] border-2 border-[#5c2d91] my-3"
        >
          manage inventory
        </button>
      </div>
    </div>
  );
};

export default HomeInventory;
