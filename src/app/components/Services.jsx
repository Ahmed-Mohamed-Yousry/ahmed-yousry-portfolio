import { assets, serviceData } from '../../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div 
      className='w-full flex flex-col justify-center items-center text-center gap-6 mt-20 mb-10 px-4 scroll-mt-24' 
      id="services"
    >
      <p className='font-Ovo text-lg text-gray-500 dark:text-gray-300'>What I offer</p>
      <h2 className='text-4xl font-bold font-Ovo text-black dark:text-white'>My Services</h2>

      <p className='text-center max-w-6xl text-gray-500 font-Ovo mt-4  dark:text-gray-300'>
        I provide a range of services including digital marketing strategy, media buying, B2B sales, SEO optimization, and full-stack web development using the MERN stack. 
        <br />
        My goal is to help businesses grow their online presence and achieve their marketing objectives through data-driven solutions.
      </p>

      <div className='grid grid-cols-auto gap-6 w-full my-6'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div 
            key={index} 
            className='flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 
                       transition-all duration-300 ease-in-out min-h-[180px]
                       hover:border-t-2 hover:border-r-2 hover:border-black dark:hover:border-white'
          >
            <Image 
              src={icon} 
              alt={title} 
              className='w-12 h-12 rounded-md object-contain mb-2'
            />
            
            <h3 className='text-lg font-Outfit mb-2 text-white dark:text-black'>
              {title}
            </h3>
            
            <p className='text-sm flex-1 leading-5 text-white dark:text-gray-700'>
              {description}
            </p>
            
            <a 
              href={link || '#'}  
              onClick={(e) => { if(!link) e.preventDefault(); }}  
              className='text-sm underline mt-4 flex gap-2 items-center justify-start text-white dark:text-gray-800 hover:opacity-80'
            >
              Read more 
              <Image src={assets.right_arrow} alt='' className='w-4'/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
