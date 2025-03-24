"use client";

import { motion } from "framer-motion";
import { Languages, Mic, MousePointerClick, Copy, Volume2 } from "lucide-react";

const steps = [
  {
    icon: <Languages className="w-8 h-8 text-primary" />,
    title: "Select Your Language",
    description: "Choose the source and target languages for translation.",
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "Enter Text or Record Speech",
    description: "Type your text or use voice input for translation.",
  },
  {
    icon: <MousePointerClick className="w-8 h-8 text-primary" />,
    title: "Click Translate",
    description: "Get instant AI-powered translations with high accuracy.",
  },
  {
    icon: <Copy className="w-8 h-8 text-primary" />,
    title: "Copy, Share, or Listen",
    description: "Copy the translated text, share it, or listen to the audio.",
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
      staggerChildren: 0.2,
    },
  },
};

export default function HowItWorks() {
  return (
    <motion.section
      className="py-16 bg-black text-white text-center rounded-xl"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeInUp}
        >
          <span className="border-b-2 border-[#ff0080]">How It Works</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <motion.div
                className="p-4 bg-gray-700 rounded-full mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
