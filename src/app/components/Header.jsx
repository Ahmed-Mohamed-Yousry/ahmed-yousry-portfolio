import { assets } from '../../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center text-center gap-6 mt-28 mb-10 scroll-mt-24' id="top">
        <Image src={assets.my_image} className='w-40 h-auto aspect-square rounded-full' alt='my-image'/>
       
        <div className='flex items-center gap-3'>
        <h6 className='text-2xl font-bold font-Ovo text-gray-500'>Hi! I'm Ahmed Yousry </h6>
        <Image src={assets.hand_icon} alt='' className='w-6'/>

        
        </div>


    <div className='flex flex-col gap-6 items-center'>
    <h1 className='md:w-7/12 w-10/12 text-2xl font-bold font-Outfit '>MARKETING SPECIALIST | SALES & MEDIA BUYER | MERN Stack Developer based in Dammam.</h1>
        
    <p className='md:w-6/12 w-10/12 text-lg text-gray-500 font-Ovo'>Combining marketing strategy expertise with hands-on MERN stack development experience to build data-driven digital solutions.</p>
    </div>


     <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <a
  href="#contact"
  className="text-white border rounded-full p-3 gap-4 flex items-center bg-[#ada1f9]"
>
  <p className="font-Outfit text-lg animate-pulse">Contact me</p>
  <Image src={assets.right_arrow_white} alt="" className="w-6 animate-bounce"/>
</a>

        <a
  href="/Ahmed Yousry CV.pdf"   // الملف موجود في public
  target="_blank"               // يفتح في تاب جديد
  rel="noopener noreferrer"
  className="bg-white text-[#ada1f9] border-[#5f51bd] border rounded-full p-3 gap-4 flex items-center"
>
  <p className="font-Outfit text-lg">My Resume</p>
  <Image src={assets.download_icon} alt="" className="w-4"/>
</a>

     </div>
    </div>
    </>
  )
}

export default Header