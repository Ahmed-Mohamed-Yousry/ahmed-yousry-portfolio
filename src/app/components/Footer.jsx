import { assets } from '../../../assets/assets';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo_usry} alt='' className='w-36 mx-auto mb-1'/>

            <div className='w-max flex items-center gap-3 text-gray-500 mb-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6 '/>ahmed.baakhet@gmail.com
            </div>
        </div>

<div className="w-full px-6 py-6 bg-gray-50 flex flex-col md:flex-row items-center justify-between">
  {/* حقوق النشر */}
  <p className="text-gray-500 text-sm mb-4 md:mb-0">
    © 2025 Ahmed Yousry. All rights reserved.
  </p>

  {/* روابط التواصل */}
  <ul className="flex gap-4 px-8 text-gray-700">
    <li>
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://github.com/Ahmed-Mohamed-Yousry" 
        className="hover:text-purple-500 transition-colors"
      >
        GitHub
      </a>
    </li>
    <li>
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://www.linkedin.com/in/ahmed-yousry-senior-media-buyer/" 
        className="hover:text-blue-600 transition-colors"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://x.com/AhmedY75370" 
        className="hover:text-blue-400 transition-colors"
      >
        X
      </a>
    </li>
  </ul>
</div>


    </div>
  )
}

export default Footer