import React from "react";
import { motion } from "framer-motion";
import Tailwind from "../assets/tailwind.png";
import ShadCN from "../assets/shadcn.png";
import Framer from "../assets/framer.png";
import Sagemaker from "../assets/Sage.jpeg";
import DataSaur from "../assets/datasaur.png";
import Appen from "../assets/appen.png";

interface Skill {
  name: string;
  icon: string;
}

const languages: Skill[] = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
];

const development: Skill[] = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "ShadCN", icon: ShadCN },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Framer Motion", icon: Framer },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
];

const tools: Skill[] = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS Sagemaker", icon: Sagemaker },
  { name: "Datasaur", icon: DataSaur },
  { name: "Appen", icon: Appen },
];

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
        <motion.div 
          key={index}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center p-4 rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/30 transition duration-300"
        >
          <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
          <p className="text-gray-300 mt-2 text-lg font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-5xl font-extrabold text-indigo-500 mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am an enthusiastic **Software Developer** passionate about learning **new technologies** and mastering the **Web Development Domain**.  
          With expertise in **React, Next.js, Tailwind, Django, and SQL**, I love building **scalable & efficient** applications. 🚀
        </p>
      </motion.div>

      {/* Skill Sections */}
      <SkillSection title="Languages" skills={languages} />
      <SkillSection title="Development" skills={development} />
      <SkillSection title="Tools & Technologies" skills={tools} />
    </div>
  );
};

export default About;
