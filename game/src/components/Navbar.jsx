import React from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'





const Navbar = () => {
  return (
    <div className='w-screen h-[130px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>LOGO</h1>
                <ul className='hidden md:flex'>
                <li>Home</li>
                <li>How it work</li>
                <li>About us</li>
                <li>How to play</li>
                <li>Community</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
              <button className='border-none bg-transparent text-black mr-4'>Sign In</button>  
              <button className='px-8 py-3'>Sign Up</button>

            </div>
            <div className='md:hidden '>
            <MenuIcon className='w-5'/>  

            </div>

        </div>

    </div>
  )
}

export default Navbar