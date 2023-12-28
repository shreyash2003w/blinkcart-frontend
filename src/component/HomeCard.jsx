import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ image, name, category, price, loading, id }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "smooth" });
            }}
          >
            <div className="w-40 min-h-[150px]">
              <img src={image} alt="" className="h-full w-ful" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
              {name}
            </h3>
            <p className="text-center text-slate-500 font-md">{category}</p>
            <p className="text-center font-bold">
              {" "}
              <span className="text-blue-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
