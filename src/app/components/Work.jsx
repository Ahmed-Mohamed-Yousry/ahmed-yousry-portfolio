import { assets, workData } from '../../../assets/assets';
import React from 'react';
import Image from 'next/image';

const Work = () => {
  return (
    <div
      id="work"
      className="w-full flex flex-col justify-center items-center text-center gap-4 mt-20 mb-10 px-12 scroll-mt-24"
    >
      <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">My Portfolio</p>
      <h2 className="text-4xl font-bold font-Ovo dark:text-white">My Latest Work</h2>

      <p className="text-center max-w-4xl text-gray-500 font-Ovo mt-4 mb-6 dark:text-gray-300">
        I create tailored digital solutions that help businesses grow, combining 
        marketing strategy, B2B sales expertise, and full-stack web development. 
        Each project showcases my commitment to delivering measurable results 
        and sustainable growth.
      </p>

      <div className="grid grid-cols-auto gap-6 w-full my-3 md:px-10 px-0">
        {workData.map((project, index) => {
          // 📌 اسم الصورة في الوضع العادي
          const normalImage = project.bgImage;

          // 📌 اسم الصورة في الوضع الداكن (نضيف -green قبل الامتداد)
          const greenImage = project.bgImage.replace('.webp', '-green.webp');

          return (
            <div
              key={index}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group
                         bg-[image:var(--bg-img)] dark:bg-[image:var(--bg-img-dark)]"
              style={{
                '--bg-img': `url(${normalImage})`,
                '--bg-img-dark': `url(${greenImage})`,
              }}
            >
              <div
                className="bg-white rounded-md w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2
                  py-3 px-5 flex items-center justify-between duration-700 group-hover:bottom-8"
              >
                <div className="text-left">
                  <h3 className="font-medium dark:text-black">{project.title}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                  shadow-[2px_2px_0_#ada1f9] dark:shadow-[2px_2px_0_#66ff0085] group-hover:bg-[#bab0ee] transition dark:group-hover:bg-[#66ff00]"
                >
                  <Image src={assets.send_icon} alt="send icon" className="w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="w-max flex justify-center items-center border-[0.8px] shadow-lg shadow-[#7768c3]
        dark:shadow-[#4caf50] 
             bg-[#ada1f9] rounded-full p-4 text-white font-Ovo text-lg gap-3 
             hover:animate-slow-bounce transition duration-700 dark:bg-[#66ff00] dark:text-black"
      >
        Show more
        <Image src={assets.right_arrow_bold} alt="right arrow" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
