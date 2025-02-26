import React, { useState, useEffect } from "react";
import "./Navbar.css";
import useGlobalStore from '../../store';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const navTitle = useGlobalStore((state) => state.navTitle);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="fixed w-full z-50">
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-lg font-semibold">
              <button className={`gradient-text text-3xl font-bold ${scrolled ? '' : 'text-shadow'}`}>
                {navTitle || 'My Portfolio'}
              </button>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Get In Touch", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-all duration-300 hover:text-primary ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  } ${
                    activeLink === link.href ? "border-b-2 border-accent" : ""
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="fixed top-5 right-4 z-40 md:hidden">
              <button
                onClick={toggleMenu}
                className="flex flex-col items-center justify-center relative w-6 h-6"
              >
                <span
                  className={`absolute w-5 h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'} rounded-sm transition-all duration-300 ${
                    menuOpen
                      ? "transform rotate-45"
                      : "transform -translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute w-5 h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'} rounded-sm transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute w-5 h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'} rounded-sm transition-all duration-300 ${
                    menuOpen
                      ? "transform -rotate-45"
                      : "transform translate-y-1.5"
                  }`}
                ></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {menuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-0"
            onClick={toggleMenu}
          ></div>
          <div className="absolute top-0 right-0 h-screen w-64 glass-effect transform transition-transform ease-in-out duration-300 translate-x-0 z-20 shadow-lg">
            <div className="pt-8 pb-4 px-6 mb-5 mt-4">
              <span className="text-xl font-semibold gradient-text">{navTitle || 'My Portfolio'}</span>
            </div>
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Get In Touch", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  toggleMenu();
                }}
                className={`block py-2 px-6 font-medium text-gray-800 hover:border-l-4 hover:border-accent transition-all duration-200 ${
                  activeLink === link.href ? "border-l-4 border-accent" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
