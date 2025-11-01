'use client';
import { assets } from '../../../assets/assets'
import Image from 'next/image'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // يمنع العرض قبل تحميل الثيم فعلياً

  const isDarkMode = theme === "dark";

  return (
    <div className='w-full flex flex-col justify-center items-center text-center gap-6 mt-48 mb-10 scroll-mt-24' id="top">
      
      {/* الصورة العادية */}
      <Image 
        src={assets.my_image} 
        className="w-40 h-auto aspect-square rounded-full transition-all duration-500 ease-in-out" 
        alt='my-image'
      />
     
      <div className='flex items-center gap-3'>
        <h6 className={`text-2xl font-bold font-Ovo ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
          Hi! I'm Ahmed Yousry 
        </h6>
        <Image src={assets.hand_icon} alt='' className='w-6'/>
      </div>

      <div className='flex flex-col gap-6 items-center'>
        <h1 className={`md:w-7/12 w-10/12 text-2xl font-bold font-Outfit ${isDarkMode ? "text-white" : "text-black"}`}>
          MARKETING SPECIALIST | SALES & MEDIA BUYER | MERN Stack Developer based in Dammam.
        </h1>
        
        <p className={`md:w-6/12 w-10/12 text-lg font-Ovo ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
          Combining marketing strategy expertise with hands-on MERN stack development experience to build data-driven digital solutions.
        </p>
      </div>

      {/* أزرار Contact و Resume */}
      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        {/* Contact me */}
        <a
          href="#contact"
          className="w-max flex justify-center items-center border-[0.8px] shadow-lg shadow-[#7768c3]
             bg-[#ada1f9] rounded-full p-4 text-white dark:text-[#11001f] font-Ovo text-lg gap-3 
             hover:opacity-80 transition duration-500"
        >
          <p className="font-Outfit text-lg animate-pulse">Contact me</p>
          <Image src={isDarkMode? assets.right_arrow_bold :  assets.right_arrow_bold_dark} alt="" className="w-6 animate-bounce"/>
        </a>

        {/* My Resume */}
        <a
          href="/Ahmed Yousry CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`border rounded-full p-3 gap-4 flex items-center
            ${isDarkMode 
              ? "bg-white text-[#11001f] border-[#5f51bd]"
              : "bg-white text-[#5f51bd] border-[#5f51bd]"
            }
          `}
        >
          <p className="font-Outfit text-lg">My Resume</p>
          <Image src={assets.download_icon} alt="" className="w-4"/>
        </a>
      </div>
    </div>
  )
}

export default Header;
