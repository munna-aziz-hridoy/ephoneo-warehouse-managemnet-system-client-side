import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddProduct = (data) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
      });
  };

  return (
    <>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          add product
        </h2>
      </div>
      <div className="container mx-auto">
        <form
          className="w-full  lg:w-2/3 mx-auto flex justify-start items-center flex-col gap-6 my-20"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Product name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter product name
            </p>
          )}
          <input
            type="text"
            name="brand"
            id="brand"
            {...register("brand", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Brand name"
          />
          {errors.brand?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter brand name
            </p>
          )}
          <input
            type="text"
            name="supplier"
            id="supplier"
            {...register("supplier", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Supplier name"
          />
          {errors.supplier?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter supplier name
            </p>
          )}
          <textarea
            cols={10}
            rows={20}
            name="description"
            id="description"
            {...register("description")}
            className="w-full lg:w-2/3 h-24 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Please add some description "
          ></textarea>
          <input
            type="number"
            name="price"
            id="price"
            {...register("price", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Enter price"
          />
          {errors.price?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter price
            </p>
          )}
          <input
            type="number"
            name="quantity"
            id="quantity"
            {...register("quantity", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Enter quantity"
          />
          {errors.quantity?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter quantity
            </p>
          )}
          <input
            type="text"
            name="image"
            id="image"
            {...register("image", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Image url"
          />
          {errors.image?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter image
            </p>
          )}
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            {...register("email", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Image url"
          />
          <input
            type="submit"
            className="text-semibold capitalize text-[#5c2d91] hover:text-white px-8 py-3 rounded-lg shadow-lg text-lg bg-white hover:bg-[#5c2d91] border-2 border-[#5c2d91] w-[66%] my-14"
          />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
