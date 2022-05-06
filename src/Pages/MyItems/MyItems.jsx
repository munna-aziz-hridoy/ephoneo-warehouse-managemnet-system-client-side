import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import ProductCard from "../../Components/ProductCard/ProductCard";
import axios from "axios";

const MyItems = () => {
  const [user] = useAuthState(auth);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://agile-ridge-94363.herokuapp.com/myitems?email=${user?.email}`;
    const getProduct = async () => {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (data) {
        setProducts(data);
      }
    };
    getProduct();
  }, [user]);

  const handleDelete = (id) => {
    const url = `http://agile-ridge-94363.herokuapp.com/delete/${id}`;
    const sureDelete = window.confirm(
      "Are you sure you want to delete the product?"
    );
    if (sureDelete) {
      fetch(url, { method: "DELETE" });
      const restItem = products.filter((product) => product._id !== id);
      setProducts(restItem);
    } else {
      return;
    }
  };

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
            const { _id } = product;
            return (
              <ProductCard key={_id} product={product}>
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-semibold capitalize text-red-500 hover:text-white px-8 py-3 rounded-lg shadow-lg text-lg bg-white hover:bg-red-500 border-2 border-red-500 w-full"
                >
                  delete
                </button>
              </ProductCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyItems;
