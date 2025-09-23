'use client'
import { Condiment } from "next/font/google";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode , setDarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === "dark" || (!("theme" in localStorage) &&
     window.matchMedia("(prefers-color-scheme: dark)").matches)){
      setDarkMode(true);
    }
    else{
      setDarkMode(false);
    }
  }
  ,[])
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");
      localStorage.theme="dark";
    }
    else{
      document.documentElement.classList.remove("dark");
      localStorage.theme='';
    }
  },[isDarkMode])
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>

      <Header isDarkMode={isDarkMode}/>

      <AboutMe isDarkMode={isDarkMode}/>
      
      <Services isDarkMode={isDarkMode}/>

      <Work isDarkMode={isDarkMode}/>

      <Contact isDarkMode={isDarkMode}/>

      <Footer isDarkMode={isDarkMode}/>


    </>
  );
}

