import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";
const CartProduct = ({ id, name, image, price, category, qty, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
      <div className="bg-white p-3 rounded overflow-hidden">
        <img src={image} alt="" className="h-28 w-40 object-cover" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className="cursor-pointer text-slate-600 hover:text-red-500"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <MdDelete />
          </div>
        </div>
        <p className=" text-slate-500 font-medium ">{category}</p>
        <p className=" font-bold text-base">
          {" "}
          <span className="text-blue-500">₹</span>
          <span>{price}</span>
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center ">
            <button
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1  "
              onClick={() => dispatch(increaseQty(id))}
            >
              <FaPlus />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1  "
              onClick={() => dispatch(decreaseQty(id))}
            >
              <FaMinus />
            </button>
          </div>

          <div className="flex item-center gap-2 font-bold text-slate-700">
            <p>Total : </p>
            <span className="text-blue-500">₹</span>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
