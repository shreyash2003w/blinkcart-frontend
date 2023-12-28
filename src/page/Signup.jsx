import React, { useState } from "react";
import AuthImage from "../images/login-animation.gif";

import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import { toast } from "react-hot-toast";
const Signup = () => {
  const navigate = useNavigate();

  // Display Password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Display Confirm Password
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const handleConfirmShowPassword = () => {
    setConfirmShowPassword((prev) => !prev);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image: "",
  });
  // console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadProfileImage = async (e) => {
    // console.log(e.target.files[0]);
    const data = await ImagetoBase64(e.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };
  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, password, confirmpassword } = data;

    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const resData = await fetchData.json();
        // console.log(resData);
        // alert(resData.message);
        toast(resData.message);
        if (resData.alert) {
          navigate("/login");
        }
      } else {
        alert("Password and Confirm Password should be same");
      }
    } else {
      alert("Please fill required details");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-2">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className="w-20 h-20 overflow-hidden m-auto rounded-full drop-shadow-md shadow-md relative">
          <img
            src={data.image ? data.image : AuthImage}
            alt="loginSignupImage"
            className="w-full h-full"
          />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={uploadProfileImage}
            />
          </label>
        </div>
        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500"
            onChange={handleOnChange}
            value={data.firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500"
            value={data.email}
            onChange={handleOnChange}
          />

          {/* Show Password */}

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              onClick={handleShowPassword}
              className="flex text-xl cursor-pointer"
            >
              {" "}
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          {/* Confirm Password */}

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={confirmShowPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.confirmpassword}
              onChange={handleOnChange}
            />
            <span
              onClick={handleConfirmShowPassword}
              className="flex text-xl cursor-pointer"
            >
              {" "}
              {confirmShowPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className=" w-full max-w-[120px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign Up
          </button>
        </form>

        <p className="text-left text-sm mt-3">
          Alrady Have an account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
