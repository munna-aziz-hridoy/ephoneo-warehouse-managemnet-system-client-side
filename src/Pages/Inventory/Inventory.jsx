import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Inventory = () => {
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
      _id: 1,
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
      _id: 2,
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
      _id: 3,
    },
  ];

  return (
    <div>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          Manage Inventory
        </h2>
        <p className="text-lg font-medium capitalize text-slate-300 text-center my-12">
          Here we manage our inventory like adding product and delete and update
          them
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-end">
          <button className="flex justify-center items-center gap-5 text-semibold capitalize hover:bg-[#5c2d91] bg-white px-8 py-3 rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]">
            <FontAwesomeIcon icon={faPlusSquare} className="text-3xl" />
            <span>add item</span>
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-32 mt-5">
          <table className="w-full text-lg text-left text-gray-500">
            <thead className="text-xl text-slate-200 uppercase bg-[#19092c] ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  brand
                </th>
                <th scope="col" className="px-6 py-3">
                  quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  sold
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const { _id, name, image, brand, price, quantity, sold } =
                  product;
                return (
                  <tr
                    key={_id}
                    className="border-b  odd:bg-white even:bg-gray-50 "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-600  whitespace-nowrap capitalize flex justify-start items-center gap-3"
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-[70px] h-[70px] rounded-lg shadow-md"
                      />
                      <p> {name}</p>
                    </th>
                    <td className="px-6 py-4">${price}</td>
                    <td className="px-6 py-4 capitalize font-bold">{brand}</td>
                    <td className="px-6 py-4">{quantity}</td>
                    <td className="px-6 py-4">{sold}</td>
                    <td className="px-6 py-4 text-right flex gap-8 justify-center">
                      <button className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="flex justify-center items-center gap-5 text-semibold capitalize hover:bg-red-400 bg-white w-[60px] h-[60px] rounded-full shadow-lg text-lg hover:text-white text-red-400 border-2 border-red-400">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
