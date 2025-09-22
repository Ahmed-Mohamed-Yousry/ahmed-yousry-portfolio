import { assets } from '../../../assets/assets'
import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-center gap-6 mt-20 mb-10 px-4 scroll-mt-24' id="about">
      
      {/* مقدمة */}
      <p className='font-Ovo text-lg text-gray-500'>Introduction</p>
      <h2 className='text-4xl font-bold font-Ovo'>About Me</h2>

      {/* الصورة والنص */}
      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 mt-8'>




        {/* النص والكاردز */}
        <div className="flex-1 flex flex-col gap-6">

  {/* نص التعريف */}
  <p className="text-md text-gray-500 font-Ovo leading-relaxed">
    Marketing specialist with 4+ years of experience in media buying, B2B sales, SEO, and digital
    marketing.
    <br />
    Proven track record in managing high-performing ad campaigns, enhancing brand
    visibility, and driving revenue growth.
    <br />
    Effective communicator and strategist with technical
    knowledge in full-stack web development.
  </p>

  {/* الكاردز */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start">

    {/* Education */}
    <div className="flex flex-col items-start rounded bg-[#ada1f9] shadow-sm p-3 text-white 
        hover:border-t-2 hover:border-r-2 hover:border-black
        transition-all duration-300 ease-in-out min-h-[160px]">
      <Image src={assets.edu_icon_dark} className="w-8 h-8 m-2" alt="" />
      <h3 className="text-lg font-Outfit mb-1">Education</h3>
      <p className="text-sm">B.S.C in Computer Science</p>
    </div>

    {/* Languages */}
    <div className="flex flex-col items-start rounded bg-[#ada1f9] shadow-sm p-3 text-white 
        hover:border-t-2 hover:border-r-2 hover:border-black
        transition-all duration-300 ease-in-out min-h-[160px]">
      <Image src={assets.code_icon_dark} className="w-8 h-8 m-2" alt="" />
      <h3 className="text-lg font-Outfit mb-1">Languages</h3>
      <p className="text-sm">HTML, CSS, JavaScript, React JS, Next JS, Redux JS, Node JS</p>
    </div>

    {/* Projects */}
    <div className="flex flex-col items-start rounded bg-[#ada1f9] shadow-sm p-3 text-white 
        hover:border-t-2 hover:border-r-2 hover:border-black
        transition-all duration-300 ease-in-out min-h-[160px]">
      <Image src={assets.project_icon_dark} className="w-8 h-8 m-2" alt="" />
      <h3 className="text-lg font-Outfit mb-1">Projects</h3>
      <p className="text-sm">Built more than 10 projects</p>
    </div>

    {/* Marketing */}
    <div className="flex flex-col items-start rounded bg-[#ada1f9] shadow-sm p-3 text-white 
        hover:border-t-2 hover:border-r-2 hover:border-black
        transition-all duration-300 ease-in-out min-h-[160px]">
      <Image src={assets.marketing_icon} className="w-8 h-8 m-2" alt="" />
      <h3 className="text-lg font-Outfit mb-1">Marketing</h3>
      <p className="text-sm">Meta Ads, Google Ads, LinkedIn Ads, content strategy, social media management</p>
    </div>

  </div>

  {/* Tools */}
  <p className="font-Ovo text-gray-500 text-start ">Tools I use</p>
  <div className="flex flex-wrap justify-start gap-4">
    <Image alt="" src={assets.vscode} className="w-11 h-11 rounded border p-0.5 object-contain"/>
    <Image alt="" src={assets.mongodb} className="w-11 h-11 rounded border p-0.5 object-contain"/>
    <Image alt="" src={assets.firebase} className="w-11 h-11 rounded border p-0.5 object-contain"/>
    <Image alt="" src={assets.git} className="w-11 h-11 rounded border p-0.5 object-contain"/>
    <Image alt="" src={assets.meta} className="w-11 h-11 rounded border p-0.5 object-contain"/>
    <Image alt="" src={assets.google} className="w-11 h-11 rounded border p-0.5 object-contain"/>
    <Image alt="" src={assets.linkedIn} className="w-11 h-11 rounded border p-0.5 object-contain"/>
    <Image alt="" src={assets.ashref} className="w-11 h-11 rounded border p-0.5 object-cover object-center"/>
  </div>

</div>

      
      </div>
    </div>
  )
}

export default AboutMe
