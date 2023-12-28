import React, { useEffect, useState } from "react";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";
import { useSelector } from "react-redux";

const AllProducts = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);

  // Category List For Filter
  const categoryList = [...new Set(productData.map((el) => el.category))];

  // Display Filter Data
  const [filterby, setFilterby] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterby(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-700 mb-2">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] &&
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })}
      </div>
      <div className="flex flex-wrap  justify-center gap-4 my-4">
        {dataFilter.map((el) => {
          return (
            <CardFeature
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
