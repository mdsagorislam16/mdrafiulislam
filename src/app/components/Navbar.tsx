"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero", icon: <FiHome /> },
  { name: "About", href: "#about", icon: <FiUser /> },
  { name: "Portfolio", href: "#portfolio", icon: <FiBriefcase /> },
  { name: "Contact Us", href: "#contact", icon: <FiMail /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "#hero";
      let minDistance = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance && rect.top < window.innerHeight / 2) {
          minDistance = distance;
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/">
              <span className="text-2xl font-bold text-white cursor-pointer">
                Md Rafiul Islam
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative font-medium transition-all duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 
                      after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
                      hover:after:w-full
                      ${isActive ? "" : "text-white"}
                    `}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white text-2xl focus:outline-none"
                aria-label="Open Menu"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                className="fixed top-0 right-0 h-full w-4/5 bg-black z-50 p-6 space-y-6 overflow-x-hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-white ml-auto block"
                  aria-label="Close Menu"
                >
                  <FiX />
                </button>

                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-medium flex items-center space-x-2 
                        ${isActive ? "" : "text-white"}`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-16"></div>

      {/* Global Styles */}
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navbar;
