import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            {/* <a href="/plant-shop">
              Plant Shop
            </a> */}
            <a href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 
            lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            {/* <a href="/newsfeed">
              Newsfeed
            </a> */}
            <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">Marketplace</a>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/profile" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">
              My Profile
            </a>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">
              About SFSG
            </a>
          </li>

          {/* DO WE NEED THIS? */}
          {/* <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li> */}

          <li >
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">
              Logout
            </a>
          </li>
        </ul>
        </div>
      );
    } else {
      return (
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
         <li className="mx-1">
            <Link to="/signup">
            <a href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 
            lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Signup</a>
            </Link>
          </li>
          <li>
            <Link to="/login">
            <a href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 
            lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Log in</a>
            </Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            {/* <a href="/about">
              About SFSG
            </a> */}
            <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About SFSG</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 
            lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
        </div>
      );
    }
  }

  return (
    <div  class="bg-gradient-to-r from-slate-300 via-green-200  to-green-300 ...  ...">
    <header class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <h1>
        <Link to="/about">
         <a href="//////" class="flex items-center">
            <img src="//////" class="mr-3 h-6 sm:h-9" alt="esfsg logo" />
        </a>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
    </div>
  );
}

export default Nav;
