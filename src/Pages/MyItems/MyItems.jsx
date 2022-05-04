import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";

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
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyItems;
