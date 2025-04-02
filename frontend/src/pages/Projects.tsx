import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; 
import ProjectCard from "../components/ProjectCard";
import { ScaleLoader } from "react-spinners";
interface Project {
  _id: string; 
  title: string;
  description: string;
  link: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:6002";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/projects`); 
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
        🚀 My Projects
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Here are some of my recent projects showcasing my skills in React, Tailwind, Redux, and more. Explore my work and see what I build! 🚀
        </p>
      </motion.div>

      {loading && <ScaleLoader color="#6366F1" />}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((item) => (
          <ProjectCard
          key={item._id}
          title={item.title}
          description={item.description}
          link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
