"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Languages,
  Save,
  ShieldCheck,
  MonitorSmartphone,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: <Rocket size={44} color="white" className="hover:brightness-90" />,
    iconClass: "bg-[#673AB7]",
    title: "AI Auto Language & Speech Detection",
    description:
      "Effortlessly translate spoken or written content with advanced AI detection. No need to manually select the language—our system automatically identifies it.",
  },
  {
    icon: <Languages size={44} color="white" className="hover:brightness-90" />,
    iconClass: "bg-[#FF5722]",
    title: "Supports 50+ Languages",
    description:
      "From Spanish to Japanese, we've got you covered. Translate in real-time between over 50 languages, breaking down communication barriers worldwide.",
  },
  {
    icon: <Save size={44} color="white" className="hover:brightness-90" />,
    iconClass: "bg-[#009688]",
    title: "Save Your Translations",
    description:
      "Keep track of your most important translations by saving them in your personal library. Never lose a translation again!",
  },
  {
    icon: (
      <ShieldCheck size={44} color="white" className="hover:brightness-90" />
    ),
    iconClass: "bg-[#008000]",
    title: "Secure and Private",
    description:
      "Your data is safe with us. We prioritize your privacy and ensure that your translations remain confidential.",
  },
  {
    icon: (
      <MonitorSmartphone
        size={44}
        color="white"
        className="hover:brightness-90"
      />
    ),
    iconClass: "bg-[#3F51B5]",
    title: "Seamless Cross-Platform Sync",
    description:
      "Access your translations across all devices, ensuring a smooth experience whether you're on your desktop, tablet, or mobile.",
  },
  {
    icon: (
      <RefreshCcw size={44} color="white" className="hover:brightness-90" />
    ),
    iconClass: "bg-[#FF9800]",
    title: "Real-Time Translation Updates",
    description:
      "Stay ahead of the curve with real-time updates and improvements to our translation models. We constantly enhance accuracy, offering a superior translation experience with each use.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

export default function Features() {
  return (
    <motion.main
      className="mt-12 py-16 border-t"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        variants={fadeInUp}
      >
        <span className="border-b-2 border-[#ff0080]">Features</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-black px-4 py-8 flex flex-col items-center text-center border border-input rounded-xl shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`w-14 h-14 p-3 border rounded-xl flex items-center justify-center ${feature.iconClass}`}
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="px-2 py-4 text-xl font-semibold text-center">
              {feature.title}
            </h3>
            <p className="mb-2 px-2 text-md text-muted-foreground text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
