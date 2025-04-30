
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Portfolio() {
  return (
    <main className="font-sans bg-gray-100 text-gray-900">
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center p-8">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Shafiya S
        </motion.h1>
        <motion.p
          className="text-xl max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A passionate Computer Science student eager to contribute to innovative tech solutions and enhance my web development skills.
        </motion.p>
      </section>

      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-600">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm currently pursuing a B.Sc in Computer Science at Shri Sakthikailassh Women's College (2021–2024), with a CGPA of 8.1. I have completed trainings in Python, web development, and web design through E-Soft IT Solutions, Wings Technocrates, and Trust Do Solutions. I'm also actively involved in leadership roles and events.
        </p>
      </section>

      <section className="bg-white py-10 px-8">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <span className="bg-indigo-100 p-4 rounded-xl">Python</span>
          <span className="bg-indigo-100 p-4 rounded-xl">C</span>
          <span className="bg-indigo-100 p-4 rounded-xl">Web Development</span>
          <span className="bg-indigo-100 p-4 rounded-xl">Languages: Tamil, English, Hindi, Urdu, Kannada (A2)</span>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Projects</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold">Train Track Crack Classification Using ML</h3>
          <p className="mt-2 text-gray-700">A machine learning-based project that focuses on detecting track cracks to improve rail safety.</p>
        </div>
      </section>

      <section className="bg-white py-10 px-8">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center">Achievements</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Regional pre-finalist of ICT Academy Youth Talk</li>
          <li>Vice President of Student Council</li>
          <li>Student Brand Ambassador of my department</li>
          <li>2nd in State Level English Proficiency Test</li>
          <li>Student Placement Coordinator</li>
        </ul>
      </section>

      <section className="bg-indigo-600 text-white p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <div className="flex justify-center space-x-6">
          <a href="mailto:shafiya127@gmail.com" className="hover:text-gray-300 text-2xl">
            <FaEnvelope />
          </a>
          <a href="tel:8220614625" className="hover:text-gray-300 text-2xl">
            <FaPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/shafiya-s-177a24276"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Shafiya S. All rights reserved.</p>
      </footer>
    </main>
  );
}
