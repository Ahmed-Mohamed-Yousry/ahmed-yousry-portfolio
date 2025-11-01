'use client';
import { assets, workData } from '../../../assets/assets'; 
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Work = () => {
  const router = useRouter();

  const handleNavigation = (link) => {
    if (!link) return;

    // لو اللينك داخلي في الموقع
    if (link.startsWith('/')) {
      router.push(link);
    } 
    // لو اللينك خارجي (زي GitHub)
    else if (link.startsWith('http')) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      id="work"
      className="w-full flex flex-col justify-center items-center text-center gap-4 mt-20 mb-10 px-12 scroll-mt-24"
    >
      <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">My Portfolio</p>
      <h2 className="md:text-4xl text-3xl font-bold font-Ovo text-black dark:text-white">
        My Latest Work
      </h2>

      <p className="text-center max-w-4xl text-gray-500 font-Ovo mt-4 mb-6 dark:text-gray-300">
        I create tailored digital solutions that help businesses grow, combining 
        marketing strategy, B2B sales expertise, and full-stack web development. 
        Each project showcases my commitment to delivering measurable results 
        and sustainable growth.
      </p>

      <div className="grid grid-cols-auto gap-6 w-full my-3 md:px-10 px-0">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white dark:bg-[#11001f] rounded-md w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2
              py-3 px-5 flex items-center justify-between duration-700 group-hover:bottom-8 shadow-lg transition-all"
            >
              <div className="text-left">
                <h3 className="font-medium text-black dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>

              {/* 🔘 الزرار اللي ينقل لللينك المحدد */}
              <button
                onClick={() => handleNavigation(project.link)}
                className="border rounded-full w-9 aspect-square flex items-center justify-center 
                  border-black shadow-[2px_2px_0_#7768c3] transition-all duration-300 bg-[#ada1f9]
                  group-hover:opacity-80 group-hover:scale-110 group-hover:shadow-[3px_3px_0_#8f85d9]"
              >
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5 invert-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="w-max flex justify-center items-center border-[0.8px] shadow-lg shadow-[#7768c3]
             bg-[#ada1f9] rounded-full p-4 text-white dark:text-[#11001f] font-Ovo text-lg gap-3 
             hover:opacity-80 transition duration-500"
      >
        Show more
        <Image src={assets.right_arrow_bold} alt="right arrow" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
