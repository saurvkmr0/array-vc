import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkArr = ["Home", "Investments", "News", "10x Growth", "Podcast", "Team"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-customWhite mx-4 md:mx-12 py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.5)]">
      <div className='space-x-8'>
        <div className=" w-full flex items-center justify-between">
         
          <div className="text-customBlack text-xl font-bold">
            <img src={logo} className='h-10 lg:h-14' alt="Logo" />
          </div>

          
          <div className="md:hidden flex items-center space-x-2">
            <CiSearch className='text-customBlack text-3xl md:text-2xl hover:text-customPurple' />
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <IoCloseOutline className="text-customBlack text-3xl md:text-2xl" /> : <RxHamburgerMenu className='text-customBlack text-3xl md:text-2xl' />}            
            </button>
          </div>

          
          <ul
            className={`md:flex md:space-x-4 lg:space-x-8 text-customBlack absolute md:static bg-customWhite md:bg-transparent w-full left-0 md:w-auto transition-transform transform ${
              isMenuOpen ? 'top-20' : '-top-full'
            }`}
          >
            {navLinkArr.map((link, index) => (
              <li key={index} className="md:my-0 my-2 text-center relative group">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="relative z-10 inline-block hover:text-customPurple"
                >
                  {link}
                </a>
                {/* Brackets */}
                <span className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-customPurple">
                  [
                </span>
                <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-customPurple">
                  ]
                </span>
              </li>
            ))}
                <CiSearch className='hidden md:flex text-customBlack text-3xl md:text-2xl hover:text-customPurple' />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
