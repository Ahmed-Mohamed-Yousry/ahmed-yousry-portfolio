'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../../assets/assets'

const Navbar = ({ isDarkMode, setDarkMode }) => {
  const menuItems = [
  { name: 'Home', id: 'top' },
  { name: 'About me', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'My Work', id: 'work' },
  { name: 'Contact Me', id: 'contact' },
];

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0  w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
        backdrop-blur-lg transition-colors duration-300
        ${isScroll ? 'bg-white bg-opacity-50 shadow-md' : ''}`}
    >
      {/* Logo */}
      <a href='#top'>
        <Image
          src={isDarkMode ? assets.logo_usry_green : assets.logo_usry}
          className='w-36 h-18 cursor-pointer mr-14'
          alt='ahmed-logo'
        />
      </a>

     <ul
  className={`list-none hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-colors duration-300
    ${isScroll ? '' : isDarkMode ? 'bg-[#66ff00]' : 'bg-[#ada1f9] bg-opacity-80 shadow-sm'}`}
>
  {menuItems.map((item) => (
    <li key={item.name}>
      <a className='font-Ovo text-black dark:text-black' href={`#${item.id}`}>
        {item.name}
      </a>
    </li>
  ))}
</ul>


      {/* Actions */}
      <div className='flex items-center gap-6'>
        <button>
          <Image
            onClick={() => setDarkMode((prev) => !prev)}
            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
            className='w-6'
            alt='theme-toggle'
          />
        </button>

        {/* Contact Button */}
        <a
          className={`hidden lg:flex justify-center gap-3 items-center px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-colors duration-300
            ${isDarkMode ? 'bg-[#66ff00] text-black border-black' : 'bg-[#ada1f9] text-black border-gray-500'}`}
          href='#contact'
        >
          Contact <Image src={assets.arrow_icon} className='w-3' alt='contact-arrow' />
        </a>

        {/* Mobile Menu Button */}
        <button className='md:hidden block ml-4'>
          <Image src={isDarkMode ?assets.menu_white :assets.menu_black} className='w-6' alt='' onClick={openMenu} />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className={`fixed top-0 -right-64 bottom-0 w-40 h-screen flex flex-col bg-[#ada1f9] dark:bg-[#66ff00] text-black dark:text-black rounded-lg shadow-lg py-20 px-10 gap-4 transition-transform duration-500`}
      >
        {/* Close Button */}
        <div className='absolute top-6 right-6' onClick={closeMenu}>
          <Image src={assets.close_black} className='w-5 cursor-pointer' alt='close-menu' />
        </div>

        {/* Mobile Links */}
        {['Home', 'About me', 'Services', 'My Work', 'Contact Me'].map((item) => (
          <li key={item}>
            <a className='font-Ovo' onClick={closeMenu} href={`#${item.toLowerCase().replace(' ', '')}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
