
import React from 'react';
import backgroundImage from '/public/GithubImg/home22.png';
import { GoChevronRight } from "react-icons/go";

const Home = () => {
  return (
    <>
      <div className='bg-gray-900'>
        <div
          className="bg-cover bg-center h-screen flex justify-center items-start"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col items-center mt-20 sm:mt-32 lg:mt-52 mx-2 sm:mx-4 mr-1">
            <div
              className="inline-block p-1 rounded-full border-2"
              style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
            ></div>

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
              className="h-[220px] w-[3px] "
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(124, 114, 255, 0.7) 30%, rgba(124, 114, 255, 0.3))',
                filter: 'blur(0px)',
              }}
            ></div>

            <div className="relative inline-block z-10 ">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-code text-white"
                style={{ position: 'relative', zIndex: 20, transform: 'translateY(8px)' }}
              >
                <path
                  fill="white"
                  d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"
                ></path>
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
                }}
              ></span>
            </div>

            <div
              className="h-[170px] w-[3px]"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(124, 114, 255, 0.7) 30%, rgba(124, 114, 255, 0.3))',
                filter: 'blur(2px)',
                position: 'absolute',
                left: 0,
                zIndex: -1
              }}
            ></div>

            <div
              className="h-[270px] w-[3px] "
              style={{
                background: 'linear-gradient(to bottom, rgba(124, 114, 255, 0.7) 30%, rgba(124, 114, 255, 0.3))',
                filter: 'blur(0px)',
                transform: 'translateY(18px)',
                left: 0,
              }}
            ></div>
          </div>

          <div className="text-white font-bold mt-20 sm:mt-32 lg:mt-48 mx-2 sm:mx-4 bg-opacity-75"
            style={{
              height: '10vh',
              marginRight: '25%',
              maxWidth: '90%',
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Let's Build From Here
            </h1>
            <h6 className="mt-4 text-left text-lg sm:text-xl xl:text-2xl text-gray-400">
              The world’s leading AI-powered developer platform.
            </h6>
            <div className="mt-16 sm:mt-32 flex flex-col sm:flex-row items-center w-full">
              <div className="w-full sm:w-auto sm:flex-grow mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-white text-black border border-white hover:border-blue-500 px-5 py-2 rounded-t sm:rounded-l sm:rounded-tr-none w-full sm:w-auto sm:flex-grow focus:outline-none"
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-grow mb-2 sm:mb-0 ">
                <a href='#' className="w-full sm:w-auto sm:flex-grow">
                  <button className="bg-purple-500 text-white px-5 py-2 border border-white hover:border-blue-500 rounded-b sm:rounded-r sm:rounded-bl-none hover:bg-purple-700 w-full">
                    Sign Up for GitHub
                  </button>
                </a>
              </div>
              <div className="hidden sm:block border-l-2 border-gray-500 h-10 mx-4 "></div>
              <div className="w-full sm:w-auto sm:flex-grow mt-4 sm:mt-0 sm:ml-2">
                <a href='#' className="w-full sm:w-auto sm:flex-grow">
                  <button className="flex items-center justify-center text-white border border-white hover:border-gray-300 rounded px-5 py-2 hover:bg-transparent hover:text-gray-200 w-full">
                    Start a free enterprise trial
                    <GoChevronRight className="ml-2 transform transition-transform duration-300 hover:translate-x-2" />
                  </button>
                </a>
              </div>
            </div>



            <div className="text-white mt-20">
              <p className="font-bold text-lg sm:text-xl md:text-1xl ">
                Trusted by the world’s leading&nbsp;organizations&nbsp;↘︎
              </p>
            </div>
          </div>
        </div>
        <div className="text-white mt-4 mx-2 sm:mx-4">
          <div className="my-6 my-md-6 build-in-animate col-12">
            <div className="flex justify-between items-center w-auto overflow-x-hidden">
              <div className="flex flex-wrap justify-center items-center gap-20 mx-auto">
                <img src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="3M logo" height="30" className="my-2 h-10" />
                <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="KPMG logo" height="30" className="my-2 h-10" />
                <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="Mercedes-Benz logo" height="30" className="my-2 h-10" />
                <img src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="SAP logo" height="30" className="my-2 h-8" />
                <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="P&G logo" height="28" className="my-2 h-8" />
                <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="Telus logo" height="28" className="my-2 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

