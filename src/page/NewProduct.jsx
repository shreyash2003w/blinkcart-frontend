import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import toast from "react-hot-toast";
const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
    brandName: "",
    ram: "",
    rom: "",
    os: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchRes = await fetchData.json();
      console.log(fetchRes);

      toast(fetchRes.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
          brandName: "",
          ram: "",
          rom: "",
          os: "",
        };
      });
    } else {
      toast("Fill all the required details (fields)");
    }
  };

  return (
    <div className="p-4">
      <form
        action=""
        className="m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>select category</option>
          <option value={"gaming"}>Gaming</option>
          <option value={"smartphone"}>Smart Phone</option>
          <option value={"budget"}>Budget Phone</option>
        </select>

        <label htmlFor="image">
          Image
          <div
            id="image"
            className="h-40 w-full bg-slate-300  rounded flex items-center justify-center cursor-pointer"
          >
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}
            <input
              type={"file"}
              accept="image/*"
              name="image"
              id="image"
              onChange={uploadImage}
            />
          </div>
        </label>
        <label htmlFor="brandName" className="my-1">
          Brand Name
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="brandName"
          onChange={handleOnChange}
          value={data.brandName}
        />

        <label htmlFor="ram" className="my-1">
          RAM
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="ram"
          onChange={handleOnChange}
          value={data.ram}
        />

        <label htmlFor="rom" className="my-1">
          ROM
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="rom"
          onChange={handleOnChange}
          value={data.rom}
        />

        <label htmlFor="os" className="my-1">
          OS
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="os"
          onChange={handleOnChange}
          value={data.os}
        />

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          className="bg-slate-200 p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
          value={data.description}
        ></textarea>

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
