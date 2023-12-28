import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProducts from "../component/AllProducts";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const producrCardList = productData.slice(0, 4);

  // Filter Gaming
  const GamingList = productData.filter((el) => el.category === "gaming", []);
  // Dummy Loading
  const loadingArray = new Array(4).fill(null);
  const loadingArrayvegetable = new Array(10).fill(null);

  // Scroll Bar

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 400;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 400;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3198/3198336.png"
              alt=""
              className="h-7"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold py-5">
            Seamless Connectivity,{" "}
            <span className="text-blue-600 ">Endless Possibilities</span>
          </h2>
          <p className="py-3 text-base ">
            Welcome to BlinkCart, where we redefine the way you experience
            mobile technology. Explore our curated collection of the latest
            smartphones, designed to seamlessly integrate into your lifestyle.
            From cutting-edge features to stylish designs, we bring you a
            diverse range of devices that cater to every need and preference. At
            BlinkCart, we believe in empowering you with choices. Our extensive
            selection includes top brands known for their innovation and
            reliability. Whether you're a tech enthusiast, a gaming aficionado,
            or someone looking for a reliable workhorse, we have the perfect
            mobile companion for you.
          </p>
          <button className="font-bold bg-blue-400 text-slate-100 px-4 py-2 rounded-full ">
            Getting Started
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {producrCardList[0]
            ? producrCardList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"loading..."} />
                );
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-700 mb-2">
            Gaming Nexus
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-500 text-2xl p-1 rounded"
            >
              {" "}
              <GrFormPrevious />{" "}
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-500 text-2xl p-1 rounded"
            >
              {" "}
              <GrFormNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {GamingList
            ? GamingList.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "vegatable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayvegetable.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>

      <AllProducts heading={"Your Products"} />
    </div>
  );
};

export default Home;
