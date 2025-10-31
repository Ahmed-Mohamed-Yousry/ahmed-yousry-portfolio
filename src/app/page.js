'use client'
import { Condiment } from "next/font/google";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
