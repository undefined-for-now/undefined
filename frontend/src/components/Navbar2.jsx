import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { IoExtensionPuzzle } from "react-icons/io5";
import { GiGunshot } from "react-icons/gi";
import { FaMagic } from "react-icons/fa";
import { RiGameFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";


const Navbar2 = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="width-20-pct flex items-center">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
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
          placeholder="SEARCH GAMES"
        />
      </div>

      {/*Login button*/}
      <div className="width-20-pct" >
        {/*Use mermaid style for more powerful style application*/}
        <a
          style={{"float": "right", "display": "flex"}} 
          href="http://localhost:4000/login"
          className="w-[100.55px] hidden md:flex items-center py-2 px-2 rounded-full border-white bg-amber-400  text-white "
        >
          <FcGoogle size={20} className="mr-2" />
          Sign in 
        </a>
      </div>
      {/*Overlay*/}
      {nav ?  <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"> </div>: ''}
    

      

      {/*Side drawer menu*/}
      <div className={nav ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' :'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
      <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer "/>
      <h2 className="text-2xl p-4 ">LOGO</h2>
      <nav>
        <ul className="flex flex-col p-4 text-gray-800">
          <li className="text-xl py-4 flex" ><IoExtensionPuzzle size={20} className='mr-3'/> puzzle</li>
          <li className="text-xl py-4 flex" ><GiGunshot size={20} className='mr-3'/> shooting</li>
          <li className="text-xl py-4 flex" ><FaMagic size={20} className='mr-3'/> adventure</li>
          <li className="text-xl py-4 flex" ><RiGameFill size={20} className='mr-3'/> game</li>
          <li className="text-xl py-4 flex" ><RiGameFill size={20} className='mr-3'/> game</li>
          <a href="http://localhost:4000/login"><li className="text-xl py-4 flex hover:bg-amber-400 hover:text-white  border-amber-400 text-amber-400" ><IoIosLogIn size={20} className='mr-3'/> login</li></a>

          
        </ul>
      </nav>

      </div>



    </div>
  );
};

export default Navbar2;
