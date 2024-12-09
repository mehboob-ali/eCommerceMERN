import React from "react";
import logo from "../../assets/logo-2.png";
import { CiSearch } from "react-icons/ci";
import {
  MdOutlineAccountCircle,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingBag,
} from "react-icons/md";

const Header: React.FC = () => (
  <header className=" flex items-center p-4 justify-between ">
    <div className=" flex items-center ">
      <div className=" flex items-center">
        <img src={logo} alt="Logo" className=" w-16 " />
        <span className=" text-xl font-semibold">Luminae</span>
      </div>
      <div className=" w-max flex  border-2 ml-4 p-2 text-sm h-full  rounded-md">
        <input
          type="text"
          name=""
          placeholder="Search Products"
          id=""
          className=" "
        />
        <select>
          <option>All Categories</option>
        </select>
        <div className="border-l-2 border-gray-500 h-full ml-2"></div>
        <CiSearch className=" text-2xl font-bold " />
      </div>
    </div>
    <div className=" flex  gap-8 p-2 justify-center items-center">
    <div className=" flex items-center gap-1">
        <MdOutlineAccountCircle className=" text-2xl" />{" "}
        <span className=" text-lg">Login</span>
      </div>
      <div className=" flex items-center gap-1">
        <MdOutlineFavoriteBorder className=" text-2xl" />{" "}
        <span className=" text-lg">Favourites</span>
      </div>
      <div className=" flex items-center gap-1">
        <MdOutlineShoppingBag className=" text-2xl" />{" "}
        <span className=" text-lg">Cart</span>
      </div>

    </div>
  </header>
);

export default Header;
