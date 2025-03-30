import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MySchema from "../validation/MySchema.ts";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white/10 border border-gray-700 shadow-lg shadow-blue-500/40 backdrop-blur-lg rounded-2xl p-8 text-gray-200"
      >
        <h2 className="text-4xl font-extrabold text-indigo-400 text-center mb-4">
          📨 Contact Me
        </h2>
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            message: "",
          }}
          validationSchema={MySchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const res = await fetch("http://localhost:6002/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });

              if (res.ok) {
                toast.success("✅ Message sent successfully!");
                resetForm(); 
              } else {
                toast.error("❌ Oops! Something went wrong. Try again.");
              }
            } catch (error) {
              toast.error("⚠️ Server error. Try again later.");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label className="block text-gray-300 font-medium">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-4 text-gray-400" />
                  <Field
                    type="text"
                    name="fname"
                    className="w-full mt-1 p-3 pl-10 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <ErrorMessage name="fname" component="p" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-gray-300 font-medium">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-4 text-gray-400" />
                  <Field
                    type="text"
                    name="lname"
                    className="w-full mt-1 p-3 pl-10 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
                <ErrorMessage name="lname" component="p" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-gray-300 font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-4 text-gray-400" />
                  <Field
                    type="email"
                    name="email"
                    className="w-full mt-1 p-3 pl-10 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <ErrorMessage name="email" component="p" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-gray-300 font-medium">Mobile</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-4 text-gray-400" />
                  <Field
                    type="text"
                    name="mobile"
                    className="w-full mt-1 p-3 pl-10 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <ErrorMessage name="mobile" component="p" className="text-red-400 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-gray-300 font-medium">Message</label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-gray-400" />
                  <Field
                    as="textarea"
                    name="message"
                    rows={4}
                    className="w-full mt-1 p-3 pl-10 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your message"
                  />
                </div>
                <ErrorMessage name="message" component="p" className="text-red-400 text-sm mt-1" />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-3 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-200 shadow-md shadow-blue-400/50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </Form>
          )}
        </Formik>
        <ToastContainer position="bottom-center" autoClose={2000} theme="dark" />
      </motion.div>
    </div>
  );
};

export default Contact;
