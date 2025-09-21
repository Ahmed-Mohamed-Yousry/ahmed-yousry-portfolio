import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../../assets/assets'

const Navbar = () => {
  const [ isScroll , setIsScroll] = useState(false);
   const sideMenuRef = useRef();
   const openMenu = () =>{
    sideMenuRef.current.style.transform = "translateX(-16rem)";
   }
   const closeMenu = () =>{
    sideMenuRef.current.style.transform = "translateX(16rem)";
   }
   useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      if(window.scrollY >20){
        setIsScroll(true);
      }
      else{
        setIsScroll(false);
      }
    })
   },[])
  
  return (  
    <>
    <div className='w-full top-0 right-0 left-0 -z-10 translate-y-[-80%] fixed'>
      <Image src={assets.header_bg_color} className='w-full' alt='navbar-bg'/>
    </div>
    <nav className={`fixed top-0 right-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between navbar
       z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-md ' : '' } `}>
       
        <a href='#top'>
            <Image src={assets.logo_usry} className='w-36 h-18 cursor-pointer mr-14' alt='ahmed-logo'/>
        </a>

        <ul className={`list-none hidden md:!flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  
          ${isScroll ? '' : 'bg-[#ada1f9] shadow-sm bg-opacity-80 '} `}>
            <li><a className='font-Ovo' href='#top'>Home</a></li>
            <li><a className='font-Ovo' href='#about'>About me</a></li>
            <li><a className='font-Ovo' href='#services'>Services</a></li>
            <li><a className='font-Ovo' href='#work'>My Work</a></li>
            <li><a className='font-Ovo' href='#contact'>Contact Me</a></li>

        </ul>

        <div className='flex items-center gap-6'>
          <button>
            <Image src={assets.moon_icon} className='w-6' alt=''/>
          </button>
            <a className='hidden bg-[#ada1f9] lg:flex justify-center gap-3 items-center px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo' href="#contact"> Contact <Image src={assets.arrow_icon} className='w-3' alt='ahmed-contact'/></a>
        <button className='md:hidden block ml-4 '>
          <Image src={assets.menu_black} className='w-6' alt='' onClick={openMenu}/>
        </button>
        </div>


        {/* ---mobile menu --- */}
        <ul ref={sideMenuRef} className='bg-[#ada1f9] list-none md:hidden flex flex-col top-0 -right-64 bottom-0  rounded-lg shadow-lg w-40 py-20 px-10 gap-4
         fixed z-50 h-screen transition duration-500'>
            
            <div  className='absolute top-6 right-6' onClick={closeMenu}>
              <Image src={assets.close_black}  className='w-5 cursor-pointer'/>
            </div>
            
            <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#services'>Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#work'>My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar