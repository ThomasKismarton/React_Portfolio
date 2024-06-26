import React from 'react';
import { skills } from '../data';
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid"

export default function Skills() {
    return (
        <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
            I've curated a skillset with a high degree of flexibility, expanding on my Bachelor's in
            Mathematics and Computer Science with skills for data analysis, software development,
            machine learning, and data visualization.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center text-gray-300
               transition duration-500 ease-out hover:text-orange-500 hover:shadow-glow-orange">
                  <BadgeCheckIcon className="w-6 h-6 flex-shrink-0 mr-4"/>
                <span className="title-font font-medium">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}