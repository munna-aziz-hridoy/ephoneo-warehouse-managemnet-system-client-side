import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useProducts(0, user.email);

  const handleDelete = (id) => {
    const url = `https://agile-ridge-94363.herokuapp.com/delete/${id}`;
    const sureDelete = window.confirm(
      "Are you sure you want to delete the product?"
    );
    if (sureDelete) {
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => console.log(data));

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
