import React from 'react'

export default function About() {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Thomas.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Data Analyst | Software Engineer | Operations Coordinator
            <br/>
            Greater Seattle-Bellevue Area
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white border-2 border-color-gray-300 py-2 px-6
              focus:outline-none transition duration-200 ease-out hover:bg-orange-500 rounded text-lg">
              Get In Touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white border-2 border-color-gray-300 py-2 px-6 
              focus:outline-none transition duration-200 ease-out hover:bg-orange-500 rounded text-lg">
              Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-left rounded-lg"
            alt="hero"
            src="./Portrait.jpg"
          />
        </div>
      </div>
    </section>
    );
}