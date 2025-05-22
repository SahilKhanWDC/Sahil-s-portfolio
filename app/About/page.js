import React from 'react';

const page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 pt-10 text-gray-500 text-center sm:text-left">About Me</h1>

        <p className="text-base sm:text-lg text-gray-300 mb-4 text-justify">
          Hi! I'm <strong>Sahil Khan</strong>, a final-year <strong>Materials and Metallurgical Engineering student</strong> in <strong>National Institute of Technology Bhopal</strong> with a strong passion for <strong>software development</strong> and emerging technologies. I specialize in <strong>full-stack web development</strong> using technologies like React.js, Node.js, and Express.js.
        </p>

        <p className="text-base sm:text-lg text-gray-300 mb-4 text-justify">
          Alongside engineering, I’ve developed a strong command of <strong>JavaScript, C++, and modern web technologies</strong>. I love building clean, scalable, and responsive web applications and aim to become a proficient software engineer capable of developing high-performance apps, games, and tools.
        </p>

        <p className="text-base sm:text-lg text-gray-300 mb-4 text-justify">
          I'm always eager to learn, solve real-world problems, and explore the intersection of engineering and software innovation.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-500">Coding profiles..</h2>
        <div className='w-full h-auto flex items-center justify-start gap-3 flex-wrap'>
          <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/sahilkhan001/">
            <img src="Images/icons8-leetcode-96.png" width={50} className='bg-transparent invert' alt="leetcode" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.geeksforgeeks.org/user/sksahilk0jse/">
            <img src="Images/gfg-gg-logo.svg" width={70} className='bg-transparent' alt="gfg" />
          </a>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-500">I code in..</h2>
        <div className='flex flex-wrap justify-start items-center gap-4'>
          {[
            "html-5.png", "css-3.png", "js.png", "nodejs.png", "express.png", 
            "icons8-mongodb-96.png", "icons8-react-96.png", "icons8-tailwindcss-480.png",
            "c-.png", "python.png", "icons8-github-240.png"
          ].map((src, index) => (
            <img
              key={index}
              width={50}
              className="cursor-pointer hover:scale-110 hover:brightness-110 transition-transform"
              src={`/Images/${src}`}
              alt={src.split('.')[0]}
            />
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-500">Let's Connect</h2>
        <p className="text-base sm:text-lg text-gray-300">
          Feel free to reach out if you'd like to collaborate or just chat about tech, space, or code.
          <br />
          <a
            href="mailto:sk.sahilkhan543@gmail.com"
            className="text-blue-600 hover:underline break-words"
          >
            📩 sk.sahilkhan543@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default page;
