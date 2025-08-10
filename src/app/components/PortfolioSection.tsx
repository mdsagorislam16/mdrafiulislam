"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "../data/projects";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const categories = ["All", "Motion", "Ads", "Documentary"];

export default function PortfolioSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading centered on mobile, left on md+ */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left"
        >
          <span className="border-b-4 border-white pb-1 inline-block">
            My Portfolio
          </span>
        </motion.h2>

        {/* Dropdown Filter: Centered on mobile, left on md+ */}
        <div className="relative mb-10 w-full max-w-xs mx-auto md:mx-0">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full flex justify-between items-center px-5 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition-all shadow-sm"
            aria-label="Filter projects by category"
          >
            <span className="font-medium">{activeCategory}</span>
            <svg
              className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
                showDropdown ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute z-20 mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowDropdown(false);
                  }}
                  className={`block w-full text-left px-5 py-3 text-sm transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-white text-black font-semibold"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } rounded-lg`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden relative group shadow-md hover:shadow-xl cursor-pointer"
              onClick={() => setOpenVideo(project.videoUrl)}
              tabIndex={0}
              role="button"
              aria-label={`Open video for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpenVideo(project.videoUrl);
                }
              }}
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                  priority={index < 3} // prioritize first images
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                  <FaPlay className="text-white text-3xl md:text-4xl bg-black bg-opacity-40 p-2 rounded-full mb-2" />
                  <p className="text-sm text-white font-medium px-2 text-center">
                    {project.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog
        open={!!openVideo}
        onClose={() => setOpenVideo(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      >
        <Dialog.Panel className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video w-full">
            <iframe
              src={openVideo || ""}
              title="Project Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          <button
            onClick={() => setOpenVideo(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition-colors"
            aria-label="Close video modal"
          >
            &times;
          </button>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}
