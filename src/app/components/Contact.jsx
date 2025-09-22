import { assets } from '../../../assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1db3a07c-8d89-4335-93f5-45aea8491c83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className="w-full flex flex-col justify-center items-center text-center gap-4 mt-20 mb-10 px-12 scroll-mt-24
    bg-[url('/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center py-10">
         <p className="font-Ovo text-lg text-gray-500">Connect with me</p>
      <h2 className="text-4xl font-bold font-Ovo">Get in touch</h2>


<p className="text-center max-w-4xl text-gray-500 font-Ovo mt-4 mb-6">
 I’d love to hear from you! Whether you have a project in mind, a question, 
  or just want to connect, feel free to reach out and get in touch.
</p>

<form onSubmit={onSubmit} className="max-w-2xl w-full mx-auto px-4 sm:px-6">
  {/* Grid inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 mt-10">
    <input
      type="text"
      placeholder="Enter Your name"
      required
      className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
      name='name'
    />
    <input
      type="email"
      placeholder="Enter Your email"
      required
      className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
      name='email'
    />
  </div>

  {/* Textarea */}
  <textarea
    rows={6}
    required
    placeholder="Enter your message"
    className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
    name='message'
  ></textarea>

  {/* Submit Button */}
 <button
  type="submit"
  className="w-max flex justify-center items-center border-[0.8px] shadow-lg shadow-[#7768c3]
    bg-[#ada1f9] rounded-full px-6 py-3 text-white font-Ovo text-lg gap-3 
    hover:animate-slow-bounce"
>
  Submit
</button>


  <p className='mt-5'>{result}</p>
</form>

    </div>
  )
}

export default Contact