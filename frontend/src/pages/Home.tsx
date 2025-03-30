import { motion } from "framer-motion";
import MyPic from "../assets/mypic.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-indigo-600 bg-indigo-200 px-2 rounded-lg">
              Atanu Chakraborty
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            A passionate IT Professional dedicated to crafting seamless digital experiences. I specialize in Frontend Development and Backend basics, building user-friendly and scalable applications that blend aesthetics with functionality. Let’s collaborate and create something amazing! 🚀
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-6">
            <NavLink
              to="/about"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-indigo-700 flex items-center space-x-2 hover:scale-105"
            >
              🔗 Skills
            </NavLink>
            <NavLink
              to="/projects"
              className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-gray-800 flex items-center space-x-2 hover:scale-105"
            >
              💼 Projects
            </NavLink>
          </div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={MyPic}
            alt="Atanu Chakraborty"
            className="w-72 h-72 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
