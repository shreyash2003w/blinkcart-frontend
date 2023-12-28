import React, { useState } from "react";
import AuthImage from "../images/login-animation.gif";

import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  // Display Password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const userData = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resData = await fetchData.json();
      // console.log(resData)
      toast(resData.message);

      if (resData.alert) {
        dispatch(loginRedux(resData));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      // console.log(userData);
    } else {
      alert("Please fill required details");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-2">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className="w-20 overflow-hidden m-auto rounded-full drop-shadow-md shadow-md">
          <img src={AuthImage} alt="loginSignupImage" className="w-full" />
        </div>
        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleOnSubmit}
        >
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

          <button className=" w-full max-w-[120px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            LogIn
          </button>
        </form>

        <p className="text-left text-sm mt-3">
          Don't Have an account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
