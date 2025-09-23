import { assets } from '../../../assets/assets'
import Image from 'next/image'
import React from 'react'

const AboutMe = ({ isDarkMode }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-center gap-6 mt-20 mb-10 px-4 scroll-mt-24' id="about">
      
      <p className={`font-Ovo text-lg ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Introduction</p>
      <h2 className={`text-4xl font-bold font-Ovo ${isDarkMode ? "text-white" : ""}`}>About Me</h2>

      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 mt-8'>
        <div className="flex-1 flex flex-col gap-6">

          <p className={`text-md font-Ovo leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
            Marketing specialist with 4+ years of experience in media buying, B2B sales, SEO, and digital marketing.
            <br />
            Proven track record in managing high-performing ad campaigns, enhancing brand visibility, and driving revenue growth.
            <br />
            Effective communicator and strategist with technical knowledge in full-stack web development.
          </p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start">
  {/* Education */}
  <div className={`flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out
      hover:border-t-2 hover:border-r-2 hover:border-black
      dark:bg-[#66ff00] dark:text-black dark:hover:border-white`}
  >
    <Image src={isDarkMode ? assets.edu_icon : assets.edu_icon_dark} className="w-8 h-8 rounded-md object-contain mb-4" alt="" />
    <h3 className="text-lg font-Outfit my-2 text-black dark:text-black">Education</h3>
    <p className="text-sm flex-1 leading-5 text-white dark:text-black">B.S.C in Computer Science</p>
  </div>

  {/* Languages */}
  <div className={`flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out
      hover:border-t-2 hover:border-r-2 hover:border-black
      dark:bg-[#66ff00] dark:text-black dark:hover:border-white`}
  >
    <Image src={isDarkMode ? assets.code_icon : assets.code_icon_dark} className="w-8 h-8 rounded-md object-contain mb-4" alt="" />
    <h3 className="text-lg font-Outfit my-2 text-black dark:text-black">Languages</h3>
    <p className="text-sm flex-1 leading-5 text-white dark:text-black">HTML, CSS, JavaScript, React, Next, Redux, Node</p>
  </div>

  {/* Projects */}
  <div className={`flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out
      hover:border-t-2 hover:border-r-2 hover:border-black
      dark:bg-[#66ff00] dark:text-black dark:hover:border-white`}
  >
    <Image src={isDarkMode ? assets.project_icon : assets.project_icon_dark} className="w-8 h-8 rounded-md object-contain mb-4" alt="" />
    <h3 className="text-lg font-Outfit my-2 text-black dark:text-black">Projects</h3>
    <p className="text-sm flex-1 leading-5 text-white dark:text-black">Built more than 10 projects</p>
  </div>

  {/* Marketing */}
  <div className={`flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out
      hover:border-t-2 hover:border-r-2 hover:border-black
      dark:bg-[#66ff00] dark:text-black dark:hover:border-white`}
  >
    <Image src={assets.marketing_icon} className="w-8 h-8 rounded-md object-contain mb-4" alt="" />
    <h3 className="text-lg font-Outfit my-2 text-black dark:text-black">Marketing</h3>
    <p className="text-sm flex-1 leading-5 text-white dark:text-black">Meta Ads, Google Ads, LinkedIn Ads, content strategy, social media</p>
  </div>
</div>


          {/* Tools */}
          <p className={`font-Ovo ${isDarkMode ? "text-gray-300" : "text-gray-500"} text-start`}>Tools I use</p>
          <div className="flex flex-wrap justify-start gap-4">
            <Image alt="" src={assets.vscode} className="w-11 h-11 rounded border p-1 object-contain"/>
            <Image alt="" src={assets.mongodb} className="w-11 h-11 rounded border p-1 object-contain"/>
            <Image alt="" src={assets.firebase} className="w-11 h-11 rounded border p-1 object-contain"/>
            <Image alt="" src={assets.git} className="w-11 h-11 rounded border p-1 object-contain"/>
            <Image alt="" src={assets.meta} className="w-11 h-11 rounded border p-1 object-contain"/>
            <Image alt="" src={assets.google} className="w-11 h-11 rounded border p-1 object-contain"/>
            <Image alt="" src={assets.linkedIn} className="w-11 h-11 rounded border p-1 object-contain"/>
            <Image alt="" src={assets.ashref} className="w-11 h-11 rounded border p-1 object-cover object-center"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe
