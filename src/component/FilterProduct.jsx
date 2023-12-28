import React from "react";
import { FaFilter } from "react-icons/fa6";
const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl  p-5 rounded-full cursor-pointer ${
          isActive ? "bg-blue-800 text-white" : " bg-blue-500"
        }`}
      >
        <FaFilter />
      </div>
      <p className="text-center font-medium my-1 capitalize ">{category}</p>
    </div>
  );
};

export default FilterProduct;
