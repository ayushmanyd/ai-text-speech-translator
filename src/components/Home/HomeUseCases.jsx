"use client";

import { motion } from "framer-motion";
import { User, UserCheck, Briefcase, Globe } from "lucide-react";

const useCases = [
  {
    icon: <User size={36} className="text-4xl text-blue-500" />,
    title: "Travelers",
    description:
      "Speak and understand foreign languages effortlessly. Whether you're exploring new destinations or interacting with locals, our AI-powered translator ensures seamless communication and a stress-free journey.",
  },
  {
    icon: <UserCheck size={36} className="text-4xl text-green-500" />,
    title: "Students & Researchers",
    description:
      "Translate academic content easily. Access research papers, study materials, and foreign-language articles without barriers, making learning and knowledge acquisition more efficient.",
  },
  {
    icon: <Briefcase size={36} className="text-4xl text-yellow-500" />,
    title: "Business Professionals",
    description:
      "Seamlessly communicate across borders. Expand your business globally, negotiate deals, and collaborate with international partners with ease using real-time AI translation.",
  },
  {
    icon: <Globe size={36} className="text-4xl text-red-500" />,
    title: "Content Creators",
    description:
      "Localize content for a global audience. Make your videos, blogs, and social media posts accessible to a wider audience by translating them into multiple languages effortlessly.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function UseCases() {
  return (
    <motion.section
      className="my-4 py-16 bg-black text-white text-center rounded-xl"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeInUp}
        >
          <span className="border-b-2 border-[#ff0080]">Who Can Benefit?</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:px-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="p-12 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 rounded-xl shadow-lg flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              <div className="mb-4 w-14 h-14 p-3 border-2 border-accent rounded-xl flex items-center justify-center">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-300 text-base">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
