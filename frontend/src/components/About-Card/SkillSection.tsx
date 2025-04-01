import React from "react";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { Skill } from "../../const/constants";

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="mt-10"
  >
    <h3 className="text-3xl font-bold text-indigo-400 mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <AboutCard key={index} skill={skill} />
      ))}
    </div>
  </motion.div>
);

export default SkillSection;
