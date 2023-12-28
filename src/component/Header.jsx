import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const userData = useSelector((state) => state.user);
  // console.log(userData.email);
  // console.log(process.env.REACT_APP_ADMIN_EMAIL)
  // console.log(userData)
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleLogOut = () => {
    dispatch(logoutRedux());
    toast("LogOut SuccessFully");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* Desktop */}
      <div className="flex items-center h-full justify-between">
        <Link>
          <div className="h-10 ">
            <img src={logo} alt="logo" className="w-13 h-11" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className=" gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu/658829a370d4776c2529ec43"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0  text-sm  text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>

          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full " />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New Product
                  </Link>
                )}
                {userData.image ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogOut}
                  >
                    LogOut {userData.firstName}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}

                <nav className="  md:gap-6 text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1 ">
                    Home
                  </Link>
                  <Link
                    to={"menu/658829a370d4776c2529ec43"}
                    className="px-2 py-1 "
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1 ">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1 ">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
