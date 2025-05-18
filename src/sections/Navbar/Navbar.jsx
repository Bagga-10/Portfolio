import React, { useEffect, useState } from "react";
import { useTheme } from "../../common/ThemeContext";
import { Link } from "react-scroll";

function Navbar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY; // Store last scroll position locally

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      lastScrollY = currentScrollY; // Update lastScrollY locally
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", link: "top" },
    { name: "Projects", link: "projects" },
    { name: "Nazm-e-Dil", link: "Nazm-e-Dil" },
    { name: "Skills", link: "skills" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${theme === "dark" ? "bg-[#222] text-white" : "bg-white text-[#222]"}`}
    >
      <div className="flex items-center justify-between w-full h-auto">
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-3xl absolute left-4 top-4 bg-transparent p-2 rounded-md z-50 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          onClick={handleMenuToggle}
          aria-label="Open Menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16 flex-1 justify-center hover:scale-110 duration-300 transition-all ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              smooth={true}
              duration={400}
              offset={-50}
              className={`hover:text-blue-500 hover:scale-125 duration-300 transition-all text-xl shadow-sm ${
                theme === "dark" ? "text-white" : "text-[#222]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-screen w-full flex items-center justify-center transition-opacity duration-300 ${
            theme === "dark"
              ? "bg-[#222] bg-opacity-50"
              : "bg-white bg-opacity-50"
          } backdrop-blur-lg z-50`}
          onClick={handleMenuToggle}
        >
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className={`absolute top-6 right-8 text-3xl h-10 w-10  ${
                theme === "dark" ? "text-white" : "text-[#222]"
              }`}
              onClick={handleMenuToggle}
            >
              ✖
            </button>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={400}
                  offset={-50}
                  className={`text-3xl hover:text-blue-500 transition-all ${
                    theme === "dark" ? "text-white" : "text-[#222]"
                  }`}
                  onClick={() => {
                    setIsOpen(false); // Close menu on item click
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
