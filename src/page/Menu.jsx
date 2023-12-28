import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProducts from "../component/AllProducts";
import { addCartItem } from "../redux/productSlice";
const Menu = () => {
  const { filterby } = useParams();

  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];

  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };

  return (
    <div className=" p-2 md:p-4">
      <div className="w-full max-w-8xl  m-auto md:flex bg-white">
        <div className="max-w-md  overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            alt="productImage"
            className="hover:scale-105 transition-all  h-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>

          <p className=" text-slate-500 font-medium text-2xl">
            Brand :{" "}
            <span className="text-black">{productDisplay.brandName}</span>
          </p>
          <p className=" text-slate-500 font-medium text-2xl">
            Category :{" "}
            <span className="text-black">{productDisplay.category}</span>
          </p>
          <p className=" text-slate-500 font-medium text-2xl">
            RAM : <span className="text-black">{productDisplay.ram} GB</span>
          </p>
          <p className=" text-slate-500 font-medium text-2xl">
            ROM : <span className="text-black">{productDisplay.rom} GB</span>
          </p>
          <p className=" text-slate-500 font-medium text-2xl">
            OS : <span className="text-black">{productDisplay.os}</span>
          </p>
          <p className=" font-bold md:text-2xl">
            {" "}
            <span className="text-blue-500">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
            <button
              className="bg-sky-500 py-1 mt-2 rounded hover:bg-blue-600  min-w-[100px] "
              onClick={handleAddCartProduct}
            >
              Add Cart
            </button>
          </div>

          <div>
            <p className="test-slate-600 font-medium"> Description: </p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProducts heading={"Related Products"} />
    </div>
  );
};

export default Menu;
