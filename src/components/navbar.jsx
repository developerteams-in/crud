
import React, { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = (event) => {
    event.preventDefault();
    const dropdownMenu = event.currentTarget.nextElementSibling;
    dropdownMenu.classList.toggle('hidden');
  };

  const handleMouseEnter = (event) => {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('hidden');
  };

  const handleMouseLeave = (event) => {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    dropdownMenu.classList.add('hidden');
  };

  return (
    <>
    <nav className="absolute top-0 left-0 w-full p-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a className="navbar-brand flex items-center text-white" href="#">
          <img src="/GithubImg/goto.png" alt="Logo" className="h-8 rounded-full mr-2" />

            {/* <img src="public/GithubImg/goto.png" alt="Logo" className="h-8 rounded-full mr-2" /> */}
          </a>
          <ul className="hidden md:flex space-x-4">
            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-4 mr-3 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Products <FaAngleDown />
              </a>
              <ul className="dropdown-menu absolute bg-white text-black rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Product 1</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Product 2</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Product 3</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Product 3</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Product 3</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Product 3</a></li>
              </ul>
            </li>

            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-4 mr-3 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Solutions <FaAngleDown />
              </a>
              <ul className="dropdown-menu absolute bg-white text-black rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Solutions 1</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Solutions 2</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Solutions 3</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Solutions 3</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Solutions 3</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Solutions 3</a></li>
              </ul>
            </li>

            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-4 mr-3 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Resources<FaAngleDown />
              </a>
              <ul className="dropdown-menu absolute bg-white text-black rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#"> Resources 1</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Resources 2</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Resources 3</a></li>
              </ul>
            </li>

            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-4 mr-3 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Open Sourec <FaAngleDown />
              </a>
              <ul className="dropdown-menu absolute bg-white text-black rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Open Sourecs 1</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Open Sourecs 2</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Open Sourecs 3</a></li>
              </ul>
            </li>
              
            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-4 mr-3 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Enterprise <FaAngleDown />
              </a>
              <ul className="dropdown-menu absolute bg-white text-black rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Enterprise 1</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Enterprise 2</a></li>
                <li><a className="dropdown-item block px-6 py-2 hover:bg-gray-200 whitespace-nowrap" href="#">Enterprise 3</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link mr-3 text-white hover:text-gray-300" href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a href='#'>
          <form className="relative hidden md:flex ml-8">
            <span className="absolute inset-y-0 left-0 pl-3 ml-8 flex items-center pointer-events-none">
              <GrSearch />
            </span>
            <input
              className="pl-10 pr-4 py-2 ml-8 border border-white hover:border-black rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-200"
              type="search"
              name="search"
              placeholder="Search or jump to..."
              aria-label="Search"
            />
          </form>
          </a>

          
          <a href='#'> <button className="ml-10 px-4 py-2 bg-transparent text-white rounded hover:bg-gray-500 hidden md:block">Sign up</button></a>
         <a href=''><button className="ml-2 px-2 py-1 border border-white hover:border-black bg-transparent text-white rounded hover:bg-gray-500 hidden md:block">Sign in</button></a>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /> </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="space-y-2">
            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-4 mr-6 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Products
              </a>
              <ul className="dropdown-menu bg-gray-700 text-white mt-1 rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Product 1</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Product 2</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Product 3</a></li>
              </ul>
            </li>
            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-1 mr-4 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Solutions
              </a>
              <ul className="dropdown-menu bg-gray-700 text-white mt-1 rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Solution 1</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Solution 2</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Solution 3</a></li>
              </ul>
            </li>
            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-1 mr-4 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Resources
              </a>
              <ul className="dropdown-menu bg-gray-700 text-white mt-1 rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Resource 1</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Resource 2</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Resource 3</a></li>
              </ul>
            </li>
            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-1 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Open Source
              </a>
              <ul className="dropdown-menu bg-gray-700 text-white mt-1 rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Open Source 1</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Open Source 2</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Open Source 3</a></li>
              </ul>
            </li>
            <li 
              className="nav-item dropdown relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="nav-link dropdown-arrow text-white flex items-center space-x-1 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Enterprise
              </a>
              <ul className="dropdown-menu bg-gray-700 text-white mt-1 rounded shadow-lg hidden">
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Enterprise 1</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Enterprise 2</a></li>
                <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-600 whitespace-nowrap" href="#">Enterprise 3</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3 text-white hover:text-gray-300" href="#">Pricing</a>
            </li>
          </ul>
          <form className="relative mt-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <GrSearch />
            </span>
            <input
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-200 w-full"
              type="search"
              name="search"
              placeholder="Search or jump to..."
              aria-label="Search"
            />
          </form>
          <button className="mt-4 w-full px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500">Sign up</button>
          <button className="mt-2 w-full px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500">Sign in</button>
        </div>
      )}
    </nav>
   
    </>
);
};

export default Navbar;
