import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className="w-full sm:w-11/12 md:w-3/4 mx-auto text-gray-300 min-h-screen pt-20 pb-20 flex flex-col items-center justify-center gap-20">
        
        {/* Project 1 */}
        <div className="w-full sm:w-[95%] flex flex-col md:flex-row items-center justify-center md:justify-around bg-gray-900 rounded-2xl p-5 gap-5">
          <div className='w-full md:max-w-[30%] flex items-center justify-center'>
            <img className='rounded-xl w-full max-w-xs' src="Images/1736232780535.jpg" alt="Bookit Screenshot" />
          </div>
          <div className='w-full md:w-[65%] flex flex-col gap-2 items-start p-5 justify-center'>
            <h1 className='text-xl font-bold'>Bookit</h1>
            <h2 className=''>Dec 2024</h2>
            <p>Its a complete MERN stack hotel booking application with the facilities like Login system, authentication, payment gateway, admin panel and records.</p>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/SahilKhanWDC/Bookit---Hotel-Booking-Platform.git">
              <img width={25} className='invert mt-2' src="Images/github.png" alt="GitHub Repo" />
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full sm:w-[95%] flex flex-col md:flex-row items-center justify-center md:justify-around bg-gray-900 rounded-2xl p-5 gap-5">
          <div className='w-full md:max-w-[30%] flex items-center justify-center'>
            <img className='rounded-xl w-full max-w-xs' src="Images/1727649648518.jpg" alt="PassMan Screenshot" />
          </div>
          <div className='w-full md:w-[65%] flex flex-col gap-2 items-start p-5 justify-center'>
            <h1 className='text-xl font-bold'>PassMan</h1>
            <h2>Aug 2024</h2>
            <p>A secure and organized password manager for storing all your login credentials alongside their respective website links.</p>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/SahilKhanWDC/PassMan---password-manager.git">
              <img width={25} className='invert mt-2' src="Images/github.png" alt="GitHub Repo" />
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full sm:w-[95%] flex flex-col md:flex-row items-center justify-center md:justify-around bg-gray-900 rounded-2xl p-5 gap-5">
          <div className='w-full md:max-w-[30%] flex items-center justify-center'>
            <img className='rounded-xl w-full max-w-xs' src="Images/1727648123516.jpg" alt="Voting App Screenshot" />
          </div>
          <div className='w-full md:w-[65%] flex flex-col gap-2 items-start p-5 justify-center'>
            <h1 className='text-xl font-bold'>Voting App</h1>
            <h2>Sep 2024</h2>
            <p>A backend application for a voting system with user authentication, candidate management, and secure voting functionalities.</p>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/SahilKhanWDC/voting_application.git">
              <img width={25} className='invert mt-2' src="Images/github.png" alt="GitHub Repo" />
            </Link>
          </div>
        </div>

        <h1 className="text-lg sm:text-xl text-center">and more...</h1>
      </div>
    </>
  );
};

export default page;
