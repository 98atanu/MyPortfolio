import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg text-center"
    >
      <h3 className="text-2xl font-semibold text-indigo-400">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
          View Project <ArrowRight size={20} />
        </button>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
