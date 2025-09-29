"use client";
import React, { useState } from "react";
import seedData from "./projects.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuroraBackground } from "reactbits";
import Aurora from "../backgrounds/Aurora/Aurora";

const StatBar = ({ label, value, color, isOpen }) => (
  <div className="mb-3">
    <div className="flex flex-wrap justify-between text-xs sm:text-sm font-medium text-gray-700 mb-1">
      <span className="truncate">{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: isOpen ? `${value}%` : "0%" }}
      ></div>
    </div>
  </div>
);
const Pokedex = () => {
  const [projects] = useState(seedData);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isOpen, setIsOpen] = useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={1.5}
            speed={1.0}
          />
        </div>
      </div>

      <div
        className={`transition-all duration-1000 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } w-full`}
      >
        <div className="bg-red-600 p-4 sm:p-6 rounded-3xl shadow-2xl max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap">
            <div className="flex space-x-2">
              <Link href="/" title="home">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full border-4 border-blue-600 shadow-inner animate-pulse"></div>
              </Link>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full border-2 border-red-600"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full border-2 border-yellow-600"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-green-600"></div>
            </div>
            <h1 className="text-white text-base sm:text-xl md:text-2xl font-bold break-words text-center w-full sm:w-auto">
              PROJECT POKÉDEX
            </h1>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 min-h-96">
            <div className="space-y-4">
              <div className="bg-black rounded-lg p-3 sm:p-4 border-4 border-gray-800">
                <div
                  className={`bg-gradient-to-br ${selectedProject.color} rounded-lg p-4 sm:p-8 text-center text-white min-h-48 flex flex-col justify-center items-center`}
                >
                  <div className="text-3xl sm:text-5xl md:text-6xl mb-3">
                    {selectedProject.image}
                  </div>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 break-words">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xs sm:text-base md:text-lg opacity-90">
                    #{selectedProject.number}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`p-2 sm:p-3 rounded-lg border-2 cursor-pointer transition-all text-xs sm:text-base md:text-lg font-medium truncate ${
                      selectedProject.id === project.id
                        ? "bg-blue-500 text-white border-blue-600 shadow-lg"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    #{project.number}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-3 sm:p-4 border-2 border-gray-300">
                <div className="flex justify-between items-start mb-3 flex-wrap">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 break-words">
                      {selectedProject.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 uppercase tracking-wide break-words">
                      {selectedProject.type}
                    </p>
                  </div>
                  <span className="text-lg sm:text-2xl font-bold text-red-600 whitespace-nowrap">
                    #{selectedProject.number}
                  </span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed break-words">
                  {selectedProject.description}
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 border-2 border-gray-300">
                <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium truncate"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border-2 border-gray-300">
                <h4 className="font-bold text-gray-800 mb-2 sm:mb-4 text-sm sm:text-base">
                  Project Stats
                </h4>
                <StatBar
                  isOpen={isOpen}
                  label="Complexity"
                  value={selectedProject.stats.complexity}
                  color="bg-gradient-to-r from-red-400 to-red-600"
                />
                <StatBar
                  isOpen={isOpen}
                  label="Performance"
                  value={selectedProject.stats.performance}
                  color="bg-gradient-to-r from-blue-400 to-blue-600"
                />
                <StatBar
                  isOpen={isOpen}
                  label="Scalability"
                  value={selectedProject.stats.scalability}
                  color="bg-gradient-to-r from-green-400 to-green-600"
                />
                <StatBar
                  isOpen={isOpen}
                  label="Maintainability"
                  value={selectedProject.stats.maintainability}
                  color="bg-gradient-to-r from-purple-400 to-purple-600"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full"></div>
            </div>
            <div className="w-12 sm:w-16 h-4 sm:h-6 bg-gray-800 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
