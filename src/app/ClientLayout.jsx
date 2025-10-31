'use client';
import { useTheme } from "next-themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogoToCodeAnimation from "./LogoToCodeAnimation";

export default function ClientLayout({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <LogoToCodeAnimation />
      <Navbar
        isDarkMode={theme === "dark"}
        setDarkMode={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main className="min-h-screen">{children}</main>
      <Footer isDarkMode={theme === "dark"} />
    </>
  );
}
