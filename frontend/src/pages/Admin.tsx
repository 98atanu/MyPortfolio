import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AdminCard from "../components/AdminCard";
import { ScaleLoader } from "react-spinners"; 

const Admin: React.FC = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:6002/api/contact");
        const data = await response.json();

        if (response.ok) {
          setContacts(data);
        } else {
          setError("Failed to fetch contacts.");
        }
      } catch (err) {
        setError("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-indigo-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📋 Admin Panel
      </motion.h1>

      {loading ? (
        <motion.div
          className="flex items-center justify-center h-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScaleLoader color="#6366F1" />
        </motion.div>
      ) : error ? (
        <motion.p className="text-lg text-red-500">{error}</motion.p>
      ) : contacts.length === 0 ? (
        <motion.p className="text-lg text-gray-300">No contacts found.</motion.p>
      ) : (
        <motion.div
          className="w-full max-w-7xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg p-8 overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full border-collapse text-gray-300">
            <thead>
              <tr className="bg-indigo-500/30 text-indigo-300">
                <th className="p-4 text-left w-12">Id</th>
                <th className="p-4 text-left w-40">First Name</th>
                <th className="p-4 text-left w-40">Last Name</th>
                <th className="p-4 text-left w-60">Email</th>
                <th className="p-4 text-left w-32">Mobile</th>
                <th className="p-4 text-left w-96">Message</th>
                <th className="p-4 text-left w-32">Image</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact: any, index) => (
                <AdminCard key={index} contact={contact} index={index} />
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
};

export default Admin;
