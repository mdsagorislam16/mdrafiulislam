/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCut,
  FaPalette,
  FaVolumeUp,
  FaMagic,
  FaPhotoVideo,
  FaCamera,
} from "react-icons/fa";

// Skill data
const skills = [
  { name: "Video Editing", icon: <FaCut /> },
  { name: "Color Grading", icon: <FaPalette /> },
  { name: "Sound Design", icon: <FaVolumeUp /> },
  { name: "Visual Effects", icon: <FaMagic /> },
  { name: "Motion Graphics", icon: <FaPhotoVideo /> },
  { name: "Cinematography", icon: <FaCamera /> },
];

// Animation variants
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image and Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96 group"
          >
            {/* Glowing Effect */}
            <div className="absolute -inset-2 w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-30 blur-2xl group-hover:opacity-50 transition duration-700" />

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/70 shadow-2xl">
              <Image
                src="/rafi.jpg"
                alt="Md Rafiul Islam - Professional Video Editor"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0, y: "50%" }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-6 sm:right-10 bg-white text-black font-bold w-32 h-32 flex items-center justify-center rounded-full shadow-xl text-center leading-tight z-10"
            >
              <span className="text-sm md:text-base">
                3+ Years
                <br />
                Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            {/* About Me */}
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 border-b border-white/20 inline-block">
                About Me
              </h2>
              <p className="text-gray-300 leading-relaxed md:text-lg">
                I’m a passionate and creative video editor with a strong
                curiosity for visual storytelling. With over 3 years of
                experience collaborating with individuals and brands, I
                specialize in crafting cinematic content that resonates and
                connects. My journey is fueled by a love for shaping
                compelling narratives through film editing, motion graphics,
                sound design, and color grading.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-3xl font-bold mb-6 pb-2 border-b border-white/20">
                Education
              </h3>
              <ul className="space-y-6 text-base text-gray-300">
                <li className="border-l-4 border-white pl-4">
                  <p className="font-semibold text-white text-lg">
                    Bachelor in Computer Science Engineering
                  </p>
                  <p className="text-gray-400">
                    UNITED INTERNATIONAL UNIVERSITY
                    <span className="ml-2">| 2022 - Present</span>
                  </p>
                </li>
                <li className="border-l-4 border-white pl-4">
                  <p className="font-semibold text-white text-lg">Science</p>
                  <p className="text-gray-400">
                    Dhaka Commerce College <span>| 2019 - 2021</span>
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6 pb-2 border-b border-white/20">
                Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white/5 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-md border border-white/10 cursor-pointer"
                  >
                    <span className="text-3xl text-white mb-2">{icon}</span>
                    <span className="text-sm font-medium text-gray-200">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
