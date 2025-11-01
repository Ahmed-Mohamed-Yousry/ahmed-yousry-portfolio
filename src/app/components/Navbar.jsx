'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../../assets/assets';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = ({ isDarkMode, setDarkMode }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const menuItems = [
    { name: 'Home', id: 'top', path: '/' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Certifications', path: '/testimonials' },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(100%)';
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
      backdrop-blur-lg transition-colors duration-300 ${
        isScroll
          ? isDark
            ? 'bg-[#11001f]/80 shadow-lg'
            : 'bg-white/80 shadow-md'
          : ''
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src={assets.logo_usry}
          className="w-36 h-18 cursor-pointer mr-14 transition-all duration-500"
          alt="ahmed-logo"
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all 
          duration-300 bg-[#ada1f9] bg-opacity-90 shadow-sm`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            {item.path ? (
              <Link
                href={item.path}
                className="font-Ovo transition-colors duration-300 text-white dark:text-black "
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleNavigation(item.id);
                  closeMenu();
                }}
                className="font-Ovo transition-colors duration-300 text-white dark:text-black "
              >
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <button onClick={() => setDarkMode((prev) => !prev)}>
          <Image
            key={isDark ? 'sun' : 'moon'}
            src={isDark ? assets.sun_icon : assets.moon_icon}
            className="w-6 transition-transform hover:scale-110"
            alt="theme-toggle"
          />
        </button>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          className={`hidden lg:flex justify-center gap-3 items-center px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-all duration-300
            bg-[#ada1f9] text-white dark:text-black border-gray-400 hover:bg-[#8f85d9] `}
        >
          Contact
          <Image
            key={isDark ? 'arrow-dark' : 'arrow-light'}
            src={isDark ? assets.arrow_icon : assets.arrow_icon_dark}
            className="w-3"
            alt="contact-arrow"
          />
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden block ml-4" onClick={openMenu}>
          <Image
            key={isDark ? 'menu-dark' : 'menu-light'}
            src={isDark ? assets.menu_white : assets.menu_black}
            className="w-6 transition-all duration-300"
            alt="menu-icon"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className={`fixed top-20 -right-2 w-52 h-auto max-h-[90vh] overflow-y-auto flex flex-col 
        bg-[#ada1f9] text-white rounded-l-2xl shadow-lg py-8 px-8 gap-4
        transition-transform duration-500 translate-x-full dark:text-black`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 cursor-pointer" onClick={closeMenu}>
          <Image
            key={isDark ? 'close-dark' : 'close-light'}
            src={isDark ? assets.close_white : assets.close_black}
            className="w-5 transition-transform duration-200 hover:scale-110"
            alt="close-menu"
          />
        </div>

        {/* Links */}
        {menuItems.map((item) => (
          <li key={item.name}>
            {item.path ? (
              <Link
                href={item.path}
                className="font-Ovo transition-colors duration-300 text-white dark:text-black "
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleNavigation(item.id);
                  closeMenu();
                }}
                className="font-Ovo transition-colors duration-300 text-white dark:text-black "
              >
                {item.name}
              </button>
            )}
          </li>
        ))}

        {/* Contact Button (Mobile) */}
        <button
          onClick={() => {
            handleContactClick();
            closeMenu();
          }}
          className="font-Ovo text-start mt-2 text-white dark:text-black transition-colors"
        >
          Contact
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
