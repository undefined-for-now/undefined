import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="width-20-pct flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold">
            Logo
          </h1>
        </Link>
      </div>
      {/* Search input*/}
      <div className="width-60-pct bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[600px] lg:[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2  w-full focus: outline-none"
          type="text"
          placeholder="Search games"
        />
      </div>

      {/*Login button*/}
      <div className="width-20-pct" >
        {/*Use mermaid style for more powerful style application*/}
        <a
          style={{"float": "right", "display": "flex"}} 
          href="http://localhost:4000/login"
          className="w-[92.55px] hidden md:flex items-center py-2 px-2 rounded-full border-white bg-amber-400  text-white "
        >
          <FcGoogle size={20} className="mr-2" />
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
