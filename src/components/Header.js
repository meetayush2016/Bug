import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
        {/* Top nav */}
        <div className="flex items-center bg-black p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            </div>
            {/* Search */} 
            <div className="hidden sm:flex items-center h-10 w-2 rounded-md flex-grow cursor-pointer bg-blue-700 hover:bg-blue-400">
                <input className="p- h-full min-width-200  flex-grow rounded-l-md focus:outline-none px-2 " type="text" />
                <SearchIcon className="h-12 p-4"/>
            </div>
            {/* Right */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="link">
                <button className="bg-blue-500 h-10 w-20 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600">
                <p  className="font-extrabold md:text-sm">Sign Up</p>
                </button>
                
                
                
                    
                </div>
                
                <div className="relative link flex items-center">
                    <span className="fixed top-0 right-10 md:right-7 h-4 w-4 bg-yellow-100 text-center rounded-full text-black font-bold">0</span>
                    <ShoppingCartIcon className="h-7"/>
                    <p className="hidden md:inline  md:text-sm mt-2">Cart</p>
                </div>
                
            </div>

        </div>

        {/* Bottom nav */}
        <div>
            <div className="flex items-center justify-center  space-x-3 p-2 pl-6 bg-black text-white text-sm">
                
                
                <p className="link px-10 font-bold text-xl">Business</p>
                
                <p className="link px-10 font-bold text-xl lg:inline-flex">Electronics</p>
                <p className="link px-10 font-bold text-xl lg:inline-flex">Food & Grocery</p>

            </div>
        </div>
      
    </header>
  )
}

export default Header
