'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../../assets/assets';

const Navbar = ({ isDarkMode, setDarkMode }) => {
  const menuItems = [
    { name: 'Home', id: 'top' },
    { name: 'About me', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'My Work', id: 'work' },
    { name: 'Contact Me', id: 'contact' },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(100%)';
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
      backdrop-blur-lg transition-colors duration-300  ${
        isScroll
          ? isDarkMode
            ? 'bg-[#11001f]/80 shadow-lg'
            : 'bg-white/80 shadow-md'
          : ''
      }`}
    >
      {/* Logo */}
      <a href="#top">
        <Image
          src={assets.logo_usry}
          className={`w-36 h-18 cursor-pointer mr-14 transition-all duration-500`}
          alt="ahmed-logo"
        />
      </a>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all 
          duration-300 bg-[#ada1f9] bg-opacity-90 shadow-sm 
       `}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              className={`font-Ovo transition-colors duration-300 text-white dark:text-black ${
                isDarkMode ? ' hover:text-white' : ' hover:text-white'
              }`}
              href={`#${item.id}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <button onClick={() => setDarkMode((prev) => !prev)}>
          <Image
            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
            className="w-6 transition-transform hover:scale-110"
            alt="theme-toggle"
          />
        </button>

        {/* Contact Button */}
        <a
          className={`hidden lg:flex justify-center gap-3 items-center px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-all duration-300
            bg-[#ada1f9] text-white dark:text-black border-gray-400 hover:bg-[#8f85d9] hover:text-white `}
          href="#contact"
        >
          Contact
          <Image src={isDarkMode? assets.arrow_icon :  assets.arrow_icon_dark} className="w-3" alt="contact-arrow" />
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden block ml-4" onClick={openMenu}>
          <Image
            src={isDarkMode ? assets.menu_white : assets.menu_black}
            className="w-6"
            alt="menu-icon"
          />
        </button>
      </div>


      {/* Mobile Menu */}
<ul
  ref={sideMenuRef}
  className={`fixed top-20 -right-2 w-52 h-auto max-h-[90vh] overflow-y-auto flex flex-col 
  bg-[#ada1f9] text-white rounded-l-2xl  shadow-lg py-8 px-8 gap-4
  transition-transform duration-500 translate-x-full dark:text-black`}
>
  {/* Close Button */}
  <div className="absolute top-4 right-4 cursor-pointer" onClick={closeMenu}>
    <Image
      src={isDarkMode ? assets.close_black :  assets.close_white }
      className="w-5"
      alt="close-menu"
    />
  </div>

  {/* Links */}
  {menuItems.map((item) => (
    <li key={item.id}>
      <a
        className="font-Ovo hover:underline"
        onClick={closeMenu}
        href={`#${item.id}`}
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>

    </nav>
  );
};

export default Navbar;
