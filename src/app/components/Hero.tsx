"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Video Editor", "Filmmaker", "Content Creator", "Storyteller"],
    loop: 0,
    delaySpeed: 2500,
  });
  

  const videoFrames = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col scroll-smooth">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-auto md:h-[80vh] py-10 md:py-0 gap-10">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 pt-10 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide text-center md:text-left"
            style={{ color: "#F5F5F5" }}
          >
            Md Rafiul Islam
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-8 flex items-center justify-center md:justify-start"
          >
            Vid
            <span className="text-white mx-1 font-bold">@</span>
            <span className="ml-2">
              {text}
              <Cursor cursorStyle="|" cursorColor="#fff" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-full md:max-w-xl text-center md:text-left"
          >
            Crafting engaging visuals that tell compelling stories. From
            cinematic cuts to smooth transitions, bringing creativity and
            precision to every frame.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full"
          >
            {/* Button 1 - View My Work */}
            <a
              href="#portfolio"
              className="w-full sm:w-auto border border-white bg-white text-black font-semibold px-8 py-3 rounded-md transition hover:bg-black hover:text-white text-center cursor-pointer"
            >
              View My Work
            </a>

            {/* Button 2 - Get In Touch */}
            <a
              href="#contact"
              className="w-full sm:w-auto border border-white text-white font-semibold px-8 py-3 rounded-md transition hover:bg-white hover:text-black text-center cursor-pointer"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right Side - Video Frames */}
        <motion.div
          className="w-full md:w-1/2 relative h-96 rounded-lg overflow-hidden border-4 border-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="flex flex-col h-full"
            animate={{ y: [0, -960] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...videoFrames, ...videoFrames].map((frame, i) => (
              <div
                key={i}
                className="w-full h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-white text-3xl font-bold select-none tracking-wider"
              >
                Video Frame {frame}
              </div>
            ))}
          </motion.div>

          {/* Border effect */}
          <div className="absolute inset-0 pointer-events-none border-4 border-gray-600 rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full h-3 bg-gray-900 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-gray-900 opacity-70"></div>
          <div className="absolute top-0 left-0 w-3 h-full bg-gray-900 opacity-70"></div>
          <div className="absolute top-0 right-0 w-3 h-full bg-gray-900 opacity-70"></div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 3,
          type: "spring",
          stiffness: 50,
        }}
        className="text-center text-gray-500 text-sm sm:text-base pb-8 tracking-wide mt-10"
      >
        FILM MAKER
      </motion.div>
    </div>
  );
};

export default Hero;
