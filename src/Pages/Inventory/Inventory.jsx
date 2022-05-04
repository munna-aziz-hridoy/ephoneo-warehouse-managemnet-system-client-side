import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const [products] = useProducts();
  const navigate = useNavigate();

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
                const {
                  _id,
                  name,
                  image,
                  brand,
                  price,
                  quantity,
                  sold,
                  description,
                } = product;
                return (
                  <tr
                    key={_id}
                    className="border-b  odd:bg-white even:bg-gray-50 "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 flex justify-start items-center gap-3"
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-[70px] h-[70px] rounded-lg shadow-md"
                      />
                      <div>
                        <p className="font-medium text-gray-600 capitalize">
                          {name}
                        </p>
                        <p className="text-sm  font-medium text-gray-500">
                          {description}
                        </p>
                      </div>
                    </th>
                    <td className="px-6 py-4">${price}</td>
                    <td className="px-6 py-4 capitalize font-bold">{brand}</td>
                    <td className="px-6 py-4">{quantity}</td>
                    <td className="px-6 py-4">{sold}</td>
                    <td className="px-6 py-4 text-right flex gap-8 justify-center">
                      <button
                        onClick={() => navigate(`/update/${_id}`)}
                        className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]"
                      >
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
