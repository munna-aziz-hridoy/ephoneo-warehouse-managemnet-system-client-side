import React from "react";
import { useForm } from "react-hook-form";

const UpdateItem = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  const { name, image, description, supplier, brand, price, quantity, sold } = {
    name: "huawei watch gt 1",
    image: "https://i.ibb.co/99rRpbr/1.png",
    description:
      "huawei gt 1 is first revolionary watch of huawei, you can measure your every day activities and track your health condition",
    supplier: "huawei lnc",
    brand: "huawei",
    price: 180,
    quantity: 15,
    sold: 9,
  };
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
      <div className="container mx-auto flex justify-between items-center gap-16 my-40">
        <div className="w-1/2 p-5 rounded-xl shadow-xl">
          <img src={image} alt="" className="rounded-xl" />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-[#211036] capitalize my-4">
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
              supplier: <span className="text-[#5c2d91]">${supplier}</span>
            </p>
            <p className="text-lg text-gray-500 capitalize font-semibold">
              sold: <span className="text-[#5c2d91]">${sold}</span>
            </p>
            <p className="text-2xl text-gray-500 capitalize font-semibold">
              quantity: <span className="text-[#5c2d91]">${quantity}</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-start items-center gap-3 mt-6"
          >
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="update stock"
              className="p-3 rounded-lg my-2 border-[#5c2d91] border-2 placeholder:text-lg placeholder:text-medium placeholder:text-[#5c2d91] placeholder:capitalize text-lg ptext-medium text-[#5c2d91] capitalize"
            />
            <input
              type="submit"
              value="update stock"
              className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] my-3"
            />
          </form>
          <button className="text-semibold capitalize text-[#5c2d91] hover:text-white px-8 py-3 rounded-lg shadow-lg text-lg bg-white hover:bg-[#5c2d91] border-2 border-[#5c2d91]">
            shipped
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
