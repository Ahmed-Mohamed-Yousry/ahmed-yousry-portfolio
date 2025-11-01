import { assets } from '../../../assets/assets';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className='mt-5 transition-all duration-500'>
      <div className='text-center'>
        {/* اللوجو يتغير حسب الوضع */}
        <Image
          key={theme}
          src={assets.logo_usry}
          alt='logo'
          className="w-36 mx-auto mb-1 transition-all duration-500"
          priority
        />

        {/* الإيميل */}
        <div className='w-max flex items-center gap-3 mb-2 mx-auto'>
          <Image
            key={theme}
            src={assets.mail_icon}
            alt='mail icon'
            className='w-6 transition-all duration-300'
          />
          <span className={`text-gray-700 dark:text-gray-300 transition-colors duration-500`}>
            ahmed.baakhet@gmail.com
          </span>
        </div>
      </div>

      {/* حقوق النشر وروابط التواصل */}
      <div
        key={theme}
        className={`w-full px-6 py-6 flex flex-col md:flex-row items-center justify-between 
          transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <p
          className={`text-sm mb-4 md:mb-0 transition-colors duration-500 ${
            isDarkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          © 2025 Ahmed Yousry. All rights reserved.
        </p>

        <ul className="flex gap-4 px-8">
          <li>
            <a
              key={`github-${theme}`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ahmed-Mohamed-Yousry"
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-500"
              }`}
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              key={`linkedin-${theme}`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ahmed-yousry-senior-media-buyer/"
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              key={`x-${theme}`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/AhmedY75370"
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-300"
                  : "text-gray-700 hover:text-blue-400"
              }`}
            >
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
