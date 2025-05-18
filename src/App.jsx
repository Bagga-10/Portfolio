import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./common/ThemeContext";

// Lazy load sections
const Navbar = lazy(() => import("./sections/Navbar/Navbar"));
const Hero = lazy(() => import("./sections/Hero/Hero"));
const Project = lazy(() => import("./sections/Projects/Project"));
const Poetry = lazy(() => import("./sections/Poetry/Poetry"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div id="top">
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-4xl text-mono text-pink-500" >Welcome</div>}>
            <Navbar />
            <Hero />
            <Project />
            <Poetry />
            <Skills />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
