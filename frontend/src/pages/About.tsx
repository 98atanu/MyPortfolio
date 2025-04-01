import { motion } from "framer-motion";
import SkillSection from "../components/About-Card/SkillSection";
import { development, languages, tools } from "../const/constants";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-5xl font-extrabold text-indigo-500 mb-6">👨🏻‍💻 About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am an enthusiastic Software Developer passionate about learning new technologies and mastering the Web Development Domain.  
          With expertise in React, Next.js, Tailwind, Django, and SQL, I love building scalable & efficient applications. 🚀
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
