import React from "react";

const HomeInventory = () => {
  const products = [
    {
      name: "huawei watch gt 2",
      image: "https://i.ibb.co/Xby7Gqh/2.png",
      description:
        "huawei gt 2 is one of the best watch of huawei, its show every movement of yours and also send all notification from your phone",
      supplier: "huawei lnc",
      brand: "huawei",
      price: 108,
      quantity: 13,
      sold: 7,
    },
    {
      name: "huawei watch gt 1",
      image: "https://i.ibb.co/99rRpbr/1.png",
      description:
        "huawei gt 1 is first revolionary watch of huawei, you can measure your every day activities and track your health condition",
      supplier: "huawei lnc",
      brand: "huawei",
      price: 180,
      quantity: 15,
      sold: 9,
    },
    {
      name: "galaxy watch 3",
      image: "https://i.ibb.co/vYDgxCp/3.png",
      description:
        "samsung galaxy watch 3. space in your wrist. track every single space throw our watch 3",
      supplier: "samsung lnc",
      brand: "samsung",
      price: 135,
      quantity: 8,
      sold: 3,
    },
  ];

  const { brand, description, image, name, price, quantity, supplier } =
    products[1];
  return (
    <div className="container mx-auto my-36">
      <h2 className="text-4xl font-bold text-gray-600 capitalize text-center relative">
        our <span className="text-[#5c2d91]">inventory</span>
        <span className="absolute bottom-[-16px] left-[50%] translate-x-[-50%] w-36 h-2 rounded-lg bg-[#5c2d91]"></span>
      </h2>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 my-20">
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
            <span className="text-[#5c2d91]">{price}$/per pis</span>{" "}
            <span>quantity: {quantity}</span>
          </p>
          <p className="text-md text-gray-500 capitalize">{description}</p>
          <button className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] my-3 w-full">
            update
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="text-semibold capitalize text-[#5c2d91] hover:text-white px-8 py-3 rounded-lg shadow-lg text-lg bg-white hover:bg-[#5c2d91] border-2 border-[#5c2d91] my-3">
          manage inventory
        </button>
      </div>
    </div>
  );
};

export default HomeInventory;
