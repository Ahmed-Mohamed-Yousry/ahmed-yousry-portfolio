'use client';
import { assets, allProjects } from '../../../assets/assets'; 
import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
  return (
<div className="min-h-screen bg-white dark:bg-[#11001f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300 mb-2">My Portfolio</p>
          <h1 className="md:text-5xl text-4xl font-bold font-Ovo text-black dark:text-white mb-4">
            All Projects
          </h1>
          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => {
            return (
              <div
                key={index}
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
                style={{
                  backgroundImage: `url(${project.bgImage})`,
                }}
              >
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>
                
                {/* Project Info Card */}
                <div
                  className="bg-white dark:bg-[#11001f] rounded-md w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2
                    py-3 px-5 flex items-center justify-between duration-700 group-hover:bottom-8 shadow-lg transition-all"
                >
                  <div className="text-left">
                    <h3 className="font-medium text-black dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>

                  <div
                    className="border rounded-full w-9 aspect-square flex items-center justify-center 
                      border-black shadow-[2px_2px_0_#7768c3] transition-all duration-300 bg-[#ada1f9]
                      group-hover:opacity-80 group-hover:scale-110 group-hover:shadow-[3px_3px_0_#8f85d9]"
                  >
                   
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                       <Image
                      src={assets.send_icon}
                      alt="send icon" 
                      className="w-5 invert-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    /> 
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};

export default ProjectsPage;
