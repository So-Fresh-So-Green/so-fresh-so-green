import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>

    <div class="h-1 bg-gradient- bg-slate-100 rounded ">
    <div class="h-1 bg-gradient-to-r from-white  via-green-200 to-green-300 ... ... rounded">

      <div class="w-24 h-full bg-slate-50"></div>
        <section class="bg-gradient-to-r from-slate-300 via-green-200 to-green-300 ...">
          <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="place-self-center mr-auto lg:col-span-7 pr-5">
              <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-green-600">So Fresh So Green</h1>
                <p class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Buy, Sell, Trade, and Share all the latest plants in your area. </p>
                  {/* TODO: convert to react link */}
                  <Link to="/signup">
                  <a href="/signup" class="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                      Get started
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                  </Link>
                  {/* TODO: convert to react link */}
                  <Link to="/signup">
                  <a href="/signup" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                      SIGN UP NOW
                  </a>
                  </Link>
                  <h2 class="mt-20 mb-20 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">Fresh content for green thumbs.</h2>
                  <h2 class="mb-4 text-4xl font-extrabold text-gray-600">Designed for plant lovers and friends</h2>
              <p class="text-white sm:text-xl ">Here at So Fresh So Green we focus on keeping you in the loop for the hottest plant world news. Grow your plants and the community along side us!</p>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                  <svg class="w-5 h-5 text-green-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                </div>
                <h3 class="mb-2 text-xl font-bold">Create a custom profile</h3>
                <p class="text-white">Keep track of your plants in your virtual garden, search for plant species, and create a watering schdule with a customizable, iterative, profile made to embody your energy.</p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                  <svg class="w-5 h-5  text-green-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                </div>
                <h3 class="mb-2 text-xl font-bold">Share posts of your favorite plants</h3>
                <p class="text-white">Share pictures and posts about your favorite plants! No more plant news through the grapevine share to the SFSG forum and branch out.</p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                  <svg class="w-5 h-5 text-green-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                </div>
                <h3 class="mb-2 text-xl font-bold">Sell Your Plants</h3>
                <p class="text-white"> Got green? Buy and sell plants in app!  </p>
              </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <iframe src='https://my.spline.design/untitled-f7bec5409f033b3aba753dbcefa9f3dd/' frameborder='0' width='100%' height='100%'></iframe>               
          </div>
          </div>
      </section>
  <Footer />
    </div>
  </div>
  

  </>
  );
};

export default Home;
