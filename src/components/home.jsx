
import React from 'react';
import '../styles/home.css';
import backgroundImage from '/public/GithubImg/home.png';
import { GoChevronRight } from "react-icons/go";


const Home = () => {
  return (
    <>
    <div
      className="bg-cover bg-center h-screen flex justify-center items-start"
      style={{ backgroundImage: `url(${backgroundImage})` }} >
        
    <div className="flex flex-col items-center mt-20 sm:mt-32 lg:mt-52 mx-2 sm:mx-4 mr-1">
       <div
      className="inline-block p-1 rounded-full border-2"
      style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}></div>

<div
  className="h-[320px] w-[3px]"
  style={{
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(124, 114, 255, 0.7) 30%, rgba(124, 114, 255, 0.3))',
    filter: 'blur(2px)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  }} 
></div>
<div
  className="h-[220px] w-[3px]"
  style={{
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(124, 114, 255, 0.7) 30%, rgba(124, 114, 255, 0.3))',
    filter: 'blur(0px)',
  }}>
  </div>



<div className="relative inline-block z-10">
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        width="24"
        data-view-component="true"
        className="octicon octicon-code text-white"
        style={{ position: 'relative', zIndex: 20, transform: 'translateY(8px)' }}>
        <path
          fill="white" 
          d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
      </svg>
      <span
        className="absolute left-0 top-0 h-10 w-10 rounded-full z-0"
        style={{
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          transform: 'translateY(8px)', 
          filter: 'blur(18px)', 
          transform: 'translate(-50%, -20%)',
          top: '50%', 
          left: '50%', 
        }}></span>
    </div>

  
    <div
  className="h-[170px] w-[3px]"
  style={{
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(124, 114, 255, 0.7) 30%, rgba(124, 114, 255, 0.3))',
    filter: 'blur(2px)',
    position: 'absolute',
    left: 0,
    zIndex: -1
  }}>
</div>

<div
  className="h-[170px] w-[3px]"
  style={{
    background: 'linear-gradient(to bottom, rgba(124, 114, 255, 0.7) 30%, rgba(124, 114, 255, 0.3))',
    filter: 'blur(0px)',
    transform: 'translateY(18px)',
    left: 0,
  }}>
</div>



      </div>
      <div className="text-white font-bold mt-20 sm:mt-32 lg:mt-48 mx-2 sm:mx-4 bg-opacity-75"
           style={{ 
             height: '10vh',
             marginRight: '20%',  
             maxWidth: '80%',   
           }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Let's Build From Here
        </h1>
        <h6 className="mt-4 text-left text-lg sm:text-xl xl:text-2xl text-gray-400">
          The world’s leading AI-powered developer platform.
        </h6>
        <div className="mt-16 sm:mt-32 flex flex-col sm:flex-row justify-start items-center sm:items-start">
          <div className="flex flex-col sm:flex-row items-center">
            <input 
              type="text" 
              placeholder="Email Address" 
              className="bg-white text-black border border-white hover:border-blue-500 px-5 py-2 rounded-t sm:rounded-l sm:rounded-tr-none w-48 sm:w-64 lg:w-80 focus:outline-none"
              style={{ maxWidth: 'calc(100% - 100px)' }} 
            />
            <a href='#'>
            <button className="bg-purple-500 text-white px-5 py-2 border border-white hover:border-blue-500 rounded-b sm:rounded-r sm:rounded-bl-none hover:bg-purple-700">
              Sign Up for GitHub
            </button>
              </a>
            <div className="hidden sm:block border-l-2 border-gray-500 h-10 mx-4 "></div>
          </div>
          <a href='#'>
          <button className="flex items-center text-white border border-white hover:border-gray-300 rounded px-5 py-2 mt-4 sm:mt-0 sm:ml-2 hover:bg-transparent hover:text-gray-200">
          
            Start a free enterprise trial
            <GoChevronRight className="ml-2 transform transition-transform duration-300 hover:translate-x-2"/>
          </button></a>

          <div className=''>

            
          </div>
          
        </div>
      </div>
      </div>
      </>
  );
};
export default Home;
