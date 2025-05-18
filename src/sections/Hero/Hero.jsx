import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import Resume_updated from "../../assets/Resume_updated.pdf";

function Hero() {
  const { theme, toggleTheme } = useTheme();

   const [aosReady, setAosReady] = useState(false); // Flag to wait for AOS animation
   const [displayText, setDisplayText] = useState("");
   const [charIndex, setCharIndex] = useState(0);
   const [lineIndex, setLineIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
 
   const lines = React.useMemo(() => ["Hi, I'm Syed Farhan", "Welcome to my portfolio !"], []);
 
   useEffect(() => {
     AOS.init({
       duration: 1000,       
       easing: "ease-in-out", 
       once: false,           
       mirror: true,          
       offset: 50,            
     });
 
     const aosTimeout = setTimeout(() => {
       setAosReady(true);
     }, 1000); 
 
     return () => clearTimeout(aosTimeout);
   }, []);
 
   useEffect(() => {
     if (!aosReady) return; 
 
     let timeout;
     const currentLine = lines[lineIndex]; 
 
     if (!isDeleting) {
       if (charIndex < currentLine.length) {
         const delay = charIndex === 0 && lineIndex === 0 ? 1000 : 100; 
         timeout = setTimeout(() => {
           setDisplayText((prev) => prev + currentLine[charIndex]); 
           setCharIndex((prev) => prev + 1);
         }, delay);
       } else {
         timeout = setTimeout(() => {
           setIsDeleting(true); 
         }, 1500);
       }
     } else {
       if (charIndex > 0) {
         timeout = setTimeout(() => {
           setDisplayText((prev) => prev.slice(0, -1)); 
           setCharIndex((prev) => prev - 1);
         }, 50);
       } else {
         timeout = setTimeout(() => {
           setIsDeleting(false); 
           setLineIndex((prev) => (prev + 1) % lines.length); 
         }, 200);
       }
     }
 
     return () => clearTimeout(timeout); 
   }, [aosReady, charIndex, isDeleting, lineIndex, lines]);
  



  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-evenly min-h-screen px-6 gap-12 md:gap-60 pt-16">
      {/* Left Side - Text Content */}
      <div className="flex flex-col gap-4 text-center w-full md:w-1/2">
        <div className="flex text-wrap w-[100px] text-[10px] md:w-[600px] md:text-[48px] md:text-wrap mx-auto justify-center items-center"> 
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {displayText}
            <span className="cursor">|</span>
          </h1>
        </div>

        <h2 data-aos="fade-right" data-aos-delay="400">
         Full-Stack Software Engineer
        </h2>

        {/* Social Icons */}
        <div
          className="flex justify-center md:justify-center gap-6"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <a href="https://x.com/bagoda_10" target="_blank" className="relative group">
            <img
              className="w-8 h-8 hover:scale-125 transition-all duration-300 animate-bounceSlow hover:placeholder:{hello}"
              src={twitterIcon}
              alt="Twitter Icon"
            />
            <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Twitter
            </span>
          </a>
          <a
            href="https://github.com/Bagga-10"
            target="_blank"
            className="relative group"
          >
            <img
              className="w-8 h-8 hover:scale-125 transition-all duration-300 animate-bounceDelay1"
              src={githubIcon}
              alt="GitHub Icon"
            />
            <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/bagga10/"
            target="_blank"
            className="relative group"
          >
            <img
              className="w-8 h-8 hover:scale-125 transition-all duration-300 animate-bounceDelay2"
              src={linkedinIcon}
              alt="LinkedIn Icon"
            />
            <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              LinkedIn
            </span>
          </a>
        </div>

        {/* Description */}
        <p
          className="max-w-xs mx-auto text-pretty"
          data-aos="fade-right"
          data-aos-delay="1400"
        >
       
          A passionate Software Engineer with extensive hands-on experience in full-stack development, AI/ML, and cloud computing. I specialize in designing and delivering scalable, high-impact software solutions that align technology with user needs.
        </p>

        {/* Resume Button */}
        <a
          href={Resume_updated}
          download
          className="self-center md:self-center"
        >
          <button
            className="mt-8 px-6 py-3 bg-blue-500 text-white dark:bg-white dark:text-black text-2xl font-[600] rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 active:translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            Resume
          </button>
        </a>
      </div>

      {/* Right Side - Profile Image + Theme Toggle */}
      <div className="relative flex flex-col items-center w-full md:w-1/2">
        {/* Profile Image */}
        <img
          src={heroImg}
          className="w-48 h-48 md:w-[350px] md:h-[350px] rounded-full"
          alt="Profile picture of Syed Farhan"
          data-aos="fade-left"
          data-aos-delay="1800"
        />

        {/* Theme Toggle Icon - Positioned Top Right */}
        <div className="absolute top-0 right-5">
          <img
            className="w-8 h-8 cursor-pointer hover:scale-110 transition"
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
            data-aos="fade-down"
            data-aos-delay="2000"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
