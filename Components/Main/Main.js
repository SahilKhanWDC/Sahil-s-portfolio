"use client";
import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <section className="flex flex-col text-white w-full min-h-screen px-4 sm:px-6 md:px-12">
        <div className="w-full m-auto h-full text-3xl flex flex-col md:flex-row items-center justify-center gap-10 py-10">
          {/* Text Section */}
          <div className="w-full md:w-3/5 flex flex-col gap-6 md:gap-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl">
              <span className="text-slate-400 text-base sm:text-lg">Hi!! I am</span>
              <br /> Sahil Khan
            </h1>
            <h1 className="text-sm sm:text-base md:text-lg text-slate-400 mx-auto md:mx-0 max-w-[90%]">
              A Full Stack Web Developer skilled in React, Node.js, and Express.
              I love building clean, efficient web apps and constantly learning
              new technologies.
            </h1>
            <div className="btns w-full mx-auto flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
              <a href="https://github.com/SahilKhanWDC" target="_blank" rel="noopener noreferrer">
                <img className="invert transition-transform duration-200 hover:scale-125" src="/Images/github.png" alt="GitHub" width={30} />
              </a>
              <a href="https://www.linkedin.com/in/sahil-khan-324b86253/" target="_blank" rel="noopener noreferrer">
                <img className="invert transition-transform duration-200 hover:scale-125" src="/Images/linkedin.png" alt="GitHub" width={30} />
              </a>
              <a href="https://www.instagram.com/iamsk1030/" target="_blank" rel="noopener noreferrer">
                <img className="invert transition-transform duration-200 hover:scale-125" src="/Images/instagram.png" alt="Instagram" width={30} />
              </a>
              <a href="https://x.com/SahilKhan0210" target="_blank" rel="noopener noreferrer">
                <img className="invert transition-transform duration-200 hover:scale-125" src="/Images/twitter.png" alt="Twitter" width={30} />
              </a>
              <a id="email-btn" href="mailto:sk.sahilkhan543@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm underline">
                Email me
              </a>
              <a id="email-btn" href="https://drive.google.com/file/d/1GyT7I8Cf829smZKS2kQMBbpATktyC8J4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm underline">
                Resume
              </a>
            </div>
          </div>

          {/* Icon Section */}
          <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]">
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/ienbfpxp.json"
              trigger="hover"
              style={{ width: '100%', height: '100%' }}
            ></lord-icon>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
