import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

const UpdateItem = () => {
  const [product, setProduct] = useState({});
  const { register, handleSubmit, reset } = useForm(); // initialize the hook
  const { id } = useParams();

  // load product based on id
  useEffect(() => {
    const url = `https://agile-ridge-94363.herokuapp.com/singleProduct?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // handle update product and send to server
  const onSubmit = (data) => {
    const { quantity, ...rest } = product;
    const stockCount = parseInt(data.quantity);
    if (stockCount <= 0) {
      return;
    }
    const newQuantity = stockCount + parseInt(quantity);
    const updatedProduct = { ...rest, quantity: newQuantity };
    setProduct(updatedProduct);
    reset();

    const url = `https://agile-ridge-94363.herokuapp.com/update/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
  };

  // handle deliver or shipping button
  const handleShipping = () => {
    const { quantity, sold, ...rest } = product;

    if (quantity <= 0) {
      return;
    }
    const newQuantity = quantity - 1;
    const newSold = sold + 1;

    const newProduct = { ...rest, quantity: newQuantity, sold: newSold };
    setProduct(newProduct);

    const url = `https://agile-ridge-94363.herokuapp.com/update/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
  };

  const { name, image, description, supplier, brand, price, quantity, sold } =
    product;
  return (
    <>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          update item
        </h2>
        <p className="text-lg font-medium capitalize text-slate-300 text-center my-12">
          Here we manage our inventory like adding product and delete and update
          them
        </p>
      </div>
      <div className="container p-5  mx-auto md:flex justify-between items-center gap-16 my-40">
        <div className="md:w-1/2 p-5 rounded-xl shadow-xl">
          <img src={image} alt="" className="rounded-xl" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#211036] capitalize my-4 mt-5">
            {name}
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-lg text-gray-500 capitalize">{description}</p>
            <p className="text-xl text-gray-500 capitalize font-semibold">
              price: <span className="text-[#5c2d91]">${price}</span>
            </p>
            <p className="text-lg text-gray-500 capitalize font-semibold">
              brand: <span className="text-[#5c2d91]">{brand}</span>
            </p>
            <p className="text-lg text-gray-500 capitalize font-semibold">
              supplier: <span className="text-[#5c2d91]">{supplier}</span>
            </p>
            <p className="text-lg text-gray-500 capitalize font-semibold">
              sold: <span className="text-[#5c2d91]">{sold}</span>
            </p>
            <p className="text-2xl text-gray-500 capitalize font-semibold">
              quantity: <span className="text-[#5c2d91]">{quantity}</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row justify-start items-start md:items-center gap-3 mt-6"
          >
            <input
              type="number"
              name="quantity"
              id="quantity"
              {...register("quantity", { required: true })}
              placeholder="update stock"
              className="p-3 rounded-lg my-2 border-[#5c2d91] border-2 placeholder:text-lg placeholder:text-medium placeholder:text-[#5c2d91] placeholder:capitalize text-lg ptext-medium text-[#5c2d91] capitalize"
            />
            <input
              type="submit"
              value="update stock"
              className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] my-3"
            />
          </form>
          <button
            onClick={handleShipping}
            className="text-semibold capitalize text-[#5c2d91] hover:text-white px-8 py-3 rounded-lg shadow-lg text-lg bg-white hover:bg-[#5c2d91] border-2 border-[#5c2d91]"
          >
            shipped
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center my-16">
        <Link
          className="text-semibold capitalize text-[#5c2d91] hover:text-white px-8 py-3 rounded-lg shadow-lg text-lg bg-white hover:bg-[#5c2d91] border-2 border-[#5c2d91]"
          to="/inventory"
        >
          manage inventory
        </Link>
      </div>
    </>
  );
};

export default UpdateItem;
