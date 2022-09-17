import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import SFSGLogo3 from '../../assets/sfsglogo3.png'

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      const userData = Auth.getProfile()
      const _id = userData.data._id
      return (
        // HAVE TO REMOVE HIDDEN CLASS OR ELSE NO NAV ON MOBILE
        <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="/newsfeed">
                <a href="/newsfeed" class="block py-2 pr-4 pl-3 text-green-600 rounded bg-primary-700 
            lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Newsfeed</a>
              </Link>
            </li>
            <li>
              <Link to="/plant-shop">
                <a href="/plant-shop" class="block py-2 pr-4 pl-3 text-green-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">Marketplace</a>
              </Link>
            </li>
            <li>
              <Link to={`/profile/${_id}`}>
                <a href="/profile" class="block py-2 pr-4 pl-3 text-green-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href="/about" class="block py-2 pr-4 pl-3 text-green-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">
                  SFSG Team
                </a>
              </Link>
            </li>

            <li >
              <a href="/" onClick={() => Auth.logout()} class="block py-2 pr-4 pl-3 text-green-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">
                Logout
              </a>
            </li>
          </ul>
        </div>

      );
    } else {
      return (
        // HAVE TO REMOVE HIDDEN CLASS OR ELSE NO NAV ON MOBILE
        <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="/signup">
                <a href="/" class="block py-2 pr-4 pl-3 text-green-600 rounded bg-primary-700 
            lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Signup</a>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <a href="/" class="block py-2 pr-4 pl-3 text-green-600 rounded bg-primary-700 
            lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Log in</a>
              </Link>
            </li>
            <li>
              <Link to="/plant-shop">
                <a href="/" class="block py-2 pr-4 pl-3 text-green-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0  hover:text-white ">Marketplace</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href="/about" class="block py-2 pr-4 pl-3 text-green-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
            lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">SFSG Team</a>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }


  return (
    <div>
      {Auth.loggedIn() ?
        <section class=" bg-gradient-to-r from-slate-300 via-green-200  to-green-300 ...  ... ">
          <header class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl bg-gradient-to-r from-slate-300 via-green-200  to-green-300 ...  ...">
            <h1>
              <Link to="/">
                <div class="col-span-6 lg:col-span-3">
                  <img src={SFSGLogo3} height='85px' width='85px' display='inline' />
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                  </a>
                </div>
              </Link>
            </h1>

            <nav>
              {showNavigation()}
            </nav>
          </header>
        </section>
        :
        <div class=" bg-gradient-to-r from-slate-300 via-green-200  to-green-300 ...  ... ">
          <header class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl bg-gradient-to-r from-slate-300 via-green-200  to-green-300 ...  ...">
            <h1>
              <Link to="/">
                <div class="col-span-6 lg:col-span-3">
                  <img src={SFSGLogo3} height='85px' width='85px' display='inline' />
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                  </a>
                </div>
              </Link>
            </h1>

            <nav id="mobile-menu-2">
              {showNavigation()}
            </nav>
          </header>
        </div>}

    </div >

  );
}

export default Nav;
