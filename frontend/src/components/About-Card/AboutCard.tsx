import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../const/constants";

interface AboutCardProps {
  skill: Skill;
}

const AboutCard: React.FC<AboutCardProps> = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center p-4 rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/30 transition duration-300"
  >
    <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
    <p className="text-gray-300 mt-2 text-lg font-medium">{skill.name}</p>
  </motion.div>
);

export default AboutCard;
