"use client";
import React, { useState } from "react";

const Pokedex = () => {
  // Sample project data - you can replace this with your actual projects
  const [projects] = useState([
    {
      id: 1,
      name: "E-Commerce Platform",
      number: "001",
      type: "Web Application",
      description:
        "A full-stack e-commerce solution with modern payment integration and inventory management.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: {
        complexity: 85,
        performance: 92,
        scalability: 78,
        maintainability: 88,
      },
      image: "🛒",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Task Management App",
      number: "002",
      type: "Mobile App",
      description:
        "Cross-platform mobile application for team collaboration and project management.",
      techStack: ["React Native", "Firebase", "Redux", "TypeScript"],
      stats: {
        complexity: 70,
        performance: 89,
        scalability: 82,
        maintainability: 91,
      },
      image: "📋",
      color: "from-green-400 to-green-600",
    },
    {
      id: 3,
      name: "Data Visualization Dashboard",
      number: "003",
      type: "Analytics Tool",
      description:
        "Interactive dashboard for real-time data analysis and business intelligence.",
      techStack: ["Next.js", "D3.js", "PostgreSQL", "Python"],
      stats: {
        complexity: 93,
        performance: 87,
        scalability: 95,
        maintainability: 79,
      },
      image: "📊",
      color: "from-purple-400 to-purple-600",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    // Simulate opening animation
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const StatBar = ({ label, value, color }) => (
    <div className="mb-3">
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: isOpen ? `${value}%` : "0%" }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-8 flex items-center justify-center">
      <div
        className={`transition-all duration-1000 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Pokédex Container */}
        <div className="bg-red-600 p-6 rounded-3xl shadow-2xl max-w-6xl mx-auto">
          {/* Top Section with Lights */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full border-4 border-blue-600 shadow-inner animate-pulse"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full border-2 border-red-600"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-600"></div>
              <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-green-600"></div>
            </div>
            <h1 className="text-white text-xl font-bold">PROJECT POKÉDEX</h1>
          </div>

          {/* Main Pokédex Body */}
          <div className="bg-gray-100 rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-96">
            {/* Left Side - Project Display */}
            <div className="space-y-4">
              {/* Screen */}
              <div className="bg-black rounded-lg p-4 border-4 border-gray-800">
                <div
                  className={`bg-gradient-to-br ${selectedProject.color} rounded-lg p-8 text-center text-white min-h-48 flex flex-col justify-center items-center`}
                >
                  <div className="text-6xl mb-4">{selectedProject.image}</div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedProject.name}
                  </h2>
                  <p className="text-lg opacity-90">
                    #{selectedProject.number}
                  </p>
                </div>
              </div>

              {/* Project Navigation */}
              <div className="grid grid-cols-3 gap-2">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`p-3 rounded-lg border-2 transition-all font-medium ${
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

            {/* Right Side - Project Stats & Info */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {selectedProject.name}
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">
                      {selectedProject.type}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-red-600">
                    #{selectedProject.number}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <h4 className="font-bold text-gray-800 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-lg p-4 border-2 border-gray-300">
                <h4 className="font-bold text-gray-800 mb-4">Project Stats</h4>
                <StatBar
                  label="Complexity"
                  value={selectedProject.stats.complexity}
                  color="bg-gradient-to-r from-red-400 to-red-600"
                />
                <StatBar
                  label="Performance"
                  value={selectedProject.stats.performance}
                  color="bg-gradient-to-r from-blue-400 to-blue-600"
                />
                <StatBar
                  label="Scalability"
                  value={selectedProject.stats.scalability}
                  color="bg-gradient-to-r from-green-400 to-green-600"
                />
                <StatBar
                  label="Maintainability"
                  value={selectedProject.stats.maintainability}
                  color="bg-gradient-to-r from-purple-400 to-purple-600"
                />
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="mt-6 flex justify-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
            <div className="w-16 h-6 bg-gray-800 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
