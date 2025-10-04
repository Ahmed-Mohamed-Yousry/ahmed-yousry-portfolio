import { assets } from '../../../assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "1db3a07c-8d89-4335-93f5-45aea8491c83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center text-center gap-4 mt-20 mb-10 px-6 sm:px-12 scroll-mt-24 
      bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-contain sm:bg-cover py-16 transition-colors duration-700 
      dark:bg-[url('/footer-bg-color-dark.png')]"
    >
      {/* 📨 العناوين */}
      <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">Connect with me</p>
      <h2 className="text-4xl font-bold font-Ovo text-black dark:text-white">Get in touch</h2>

      <p className="text-center max-w-4xl text-gray-500 font-Ovo mt-4 mb-6 dark:text-gray-300">
        I’d love to hear from you! Whether you have a project in mind, a question, 
        or just want to connect — feel free to reach out and get in touch.
      </p>

      {/* 📬 الفورم */}
      <form onSubmit={onSubmit} className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        {/* ✏️ الحقول */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 mt-10">
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md 
                       bg-white dark:bg-gray-900 dark:text-white transition duration-500"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md 
                       bg-white dark:bg-gray-900 dark:text-white transition duration-500"
            name="email"
          />
        </div>

        <textarea
          rows={6}
          required
          placeholder="Enter your message"
          className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md 
                     bg-white dark:bg-gray-900 dark:text-white mb-6 transition duration-500"
          name="message"
        ></textarea>

        {/* 🚀 زر الإرسال */}
        <button
          type="submit"
          className="w-max px-8  flex justify-center items-center border-[0.8px] shadow-lg shadow-[#7768c3]
             bg-[#ada1f9] rounded-full p-4 text-white dark:text-[#11001f] font-Ovo text-lg gap-3 
             hover:opacity-80 transition duration-500"
        >
          Submit
        </button>

        <p className="mt-5 text-gray-600 dark:text-gray-300">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
