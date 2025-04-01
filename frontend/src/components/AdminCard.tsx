import React from "react";
import { motion } from "framer-motion";

interface AdminCardProps {
  contact: {
    fname: string;
    lname: string;
    email: string;
    mobile: string;
    message: string;
    imageUrl?: string;
  };
  index: number;
}

const AdminCard: React.FC<AdminCardProps> = ({ contact, index }) => {
  return (
    <motion.tr
      className="border-b border-white/20 hover:bg-white/10 transition-all"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <td className="p-4">{index + 1}</td>
      <td className="p-4">{contact.fname}</td>
      <td className="p-4">{contact.lname}</td>
      <td className="p-4">{contact.email}</td>
      <td className="p-4">{contact.mobile}</td>
      <td className="p-4">{contact.message}</td>
      <td className="p-4">
        {contact.imageUrl ? (
          <img
            src={contact.imageUrl}
            alt="Contact"
            className="w-20 h-20 object-cover rounded-lg"
          />
        ) : (
          <span>No Image</span>
        )}
      </td>
    </motion.tr>
  );
};

export default AdminCard;
