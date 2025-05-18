import React, { useState } from "react";
import projectImg1 from "../../assets/projectImg/Aitravel.png";
import projectImg2 from "../../assets/projectImg/interior.png";
import projectImg3 from "../../assets/projectImg/weather.png";
import projectImg4 from "../../assets/projectImg/store.png";
import projectImg5 from "../../assets/projectImg/zustand.png";
import projectImg6 from "../../assets/projectImg/typescript.jpg";

// import projectImage from "../../assets/projectImg/project.jpg"; // Ensure correct path
import { HiOutlineExternalLink } from "react-icons/hi"; // Import the link icon
import { useTheme } from "../../common/ThemeContext";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { motion as _m } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const projects = [
  {
    id: 1,
    title: " AI Powered Travel Itinerary Planner",
    image: projectImg1,
    link: "https://ai-travel-planner-frontend-three.vercel.app/",
    description: "AI Travel Planner is an intelligent travel assistant that generates personalized itineraries and provides real-time travel support using AI. Built with React.js, Express.js, Firebase, and machine learning, it delivers a sleek user experience with smart recommendations, live weather and location data, and an integrated AI chatbot for instant travel queries.",
  },
  {
    id: 2,
    title: "Interior-Website ",
    image: projectImg2,
    link: "https://interior-website-nu.vercel.app/",
    description:
      "A modern, responsive interior design interface built using React.js, styled with Tailwind CSS, and enhanced with smooth animations using Framer Motion.It features an intuitive layout that adapts seamlessly to all screen sizes, providing an elegant user experience.Optimized for performance and scalability, it's perfect for showcasing dynamic design portfolios or client projects.",
  },
  {
    id: 3,
    title: " Weather Forecast Prediction",
    image: projectImg3,
    link: "",
    description: "Weather Forecast Prediction is a web-based application built using Python, Django, and a Machine Learning model to deliver accurate weather forecasts. The system analyzes historical and real-time weather data to predict future conditions such as temperature, humidity, and precipitation. Designed with a clean interface and powered by predictive analytics, it offers users reliable weather insights tailored for planning and decision-making.",
  },
  {
    id: 4,
    title: "Ecom-Advanced-Filtration-System",
    image: projectImg4,
    link: "https://bagga-store.vercel.app/",
    description:
      "Ecom-Advanced-Filtration-System is a high-performance web application built with Vite and TypeScript, designed to provide real-time, efficient, and scalable filtration of e-commerce product data. Whether you're building a storefront or a data-driven analytics dashboard, this system offers advanced filtering logic to handle complex queries, large datasets, and responsive UI rendering.",
  },
  {
    id: 5,
    title: "Zustand-Projects",
    image: projectImg5,
    link: "https://github.com/Bagga-10/Zustand-Projects",
    description: "A collection of modern React.js applications demonstrating state management using Zustand. Each project is focused, functional, and built to highlight real-world use cases with clean architecture and responsive UI.\n\n• Expense Tracker\n• Generate Password\n• Advance Notes App\n• Watch Store",
  },
  {
    id: 6,
    title: "TypeScript-Projects",
    image: projectImg6,
    link: "https://github.com/Bagga-10/TypeScript-Projects",
    description: "TypeScript-Projects is a set of frontend applications built with React and TypeScript, showcasing practical implementations of common UI patterns and components with strong type safety and clean code architecture. The projects include:\n\n• Blogs: A simple blog interface for displaying posts\n• Tabs: A dynamic tabbed UI component to switch between views,"
  },
];

function Project() {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = projects.length;

  // Next Page Function
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous Page Function
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Current Project
  const currentProject = projects[currentPage];

  return (
    <div id="projects" className="w-full max-w-8xl mx-auto py-10">
      <_m.h2
        className="md:text-5xl text-4xl font-extrabold text-center mb-20 tracking-wide"
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
      >
        My Projects
      </_m.h2>

      {/* Display the current project */}
      <div className="flex flex-col md:flex-row items-start justify-between md:space-x-8 group mb-10">
        {/* Project Image */}
        <_m.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.5 }}
          className="relative w-[250px] h-[250px] md:w-[800px] md:h-[400px] rounded-3xl overflow-hidden group mb-6 md:mb-0 mx-auto md:mx-0"
        >
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300 transform hover:scale-105 "
          />
        </_m.div>

        {/* Project Description and Link */}
        <_m.div className="text-center md:text-left max-w-lg">
          <_m.h3
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent text-4xl font-bold mb-6 md:mb-10"
          >
            {currentProject.title}
          </_m.h3>

          <_m.p
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } md:text-xl opacity-100 mb-6 font-serif leading-relaxed whitespace-pre-line text-justify m-2 `}
            // style={{ wordSpacing: "1rem" }}
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
          >
            {currentProject.description}
          </_m.p>

          <div className="flex justify-center md:justify-start mt-16 mb-6">
            <_m.button
              onClick={() => window.open(currentProject.link, "_blank")}
              className="flex items-center  text-white text-lg p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
            >
              <HiOutlineExternalLink className="mr-2 text-xl" />
              See Website Preview
            </_m.button>
          </div>
        </_m.div>
      </div>
      {/* Pagination Controls */}
      <_m.div
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className={`flex justify-center items-center space-x-4 mt-14 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`px-6 py-2 rounded-lg ${
            currentPage === 0
              ? "bg-gray-400 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <MdOutlineNavigateBefore />
        </button>

        <span className="text-sm font-semibold">
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-6 py-2 rounded-lg ${
            currentPage === totalPages - 1
              ? "bg-gray-400 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <MdOutlineNavigateNext />
        </button>
      </_m.div>
    </div>
  );
}

export default Project;
