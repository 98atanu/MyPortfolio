import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import axios from "axios"; // Import axios (optional)

interface Project {
  _id: string; // MongoDB generates _id field
  title: string;
  description: string;
  link: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:6002/api/projects"); // Backend URL
        setProjects(response.data);
      } catch (err) {
        setError("Failed to load projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-5xl font-extrabold text-indigo-500 mb-6">
          My Projects
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Here are some of my recent projects showcasing my skills in **React,
          Tailwind, Redux, and more.** Explore my work and see what I build! 🚀
        </p>
      </motion.div>

      {loading && <p className="text-white text-lg">Loading projects...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold text-indigo-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
                View Project <ArrowRight size={20} />
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
