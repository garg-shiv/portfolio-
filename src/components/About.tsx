"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Lightbulb,
  BarChart3,
  UserIcon,
  GraduationCap,
} from "lucide-react";
import { portFolioConfig } from "@/lib/portfolio";

function About() {
  const config = portFolioConfig.about;

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Rocket: <Rocket size={20} />,
      Code: <Code size={20} />,
      Lightbulb: <Lightbulb size={20} />,
      BarChart3: <BarChart3 size={20} />,
    };

    return icons[iconName] || <Rocket size={20} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-x-hidden"
      aria-labelledby="about-title"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute -left-20 top-40 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            About{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main content area - equal height layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* About me text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-xl relative overflow-hidden w-full flex flex-col">
              <h3 className="text-2xl font-semibold text-white mb-6 relative flex items-center gap-2">
                <UserIcon className="text-gray-300" size={22} />{" "}
                <span>{config.subtitle}</span>
              </h3>

              {/* Bio paragraphs */}
              <div className="space-y-4 relative flex-1">
                {config.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Location and experience pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {config.details.map((detail, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300 border border-gray-600/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                    {detail.value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side content */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Education section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="text-gray-300" size={20} />
                  <span>Education</span>
                </h3>
                <div>
                  {config.education.map((edu, index) => (
                    <div key={index} className="text-gray-300">
                      <p className="text-lg font-medium text-white">
                        {edu.degree} in {edu.major}
                      </p>
                      <p className="text-base text-emerald-400 my-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-400">
                        {edu.duration} | CGPA: {edu.cgpa}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* My qualities grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1"
            >
              <div className="grid grid-cols-2 gap-3 h-full">
                {config.qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative group hover:border-emerald-500/30 transition-all duration-300 flex flex-col"
                  >
                    <div className="p-3 flex-1 flex flex-col">
                      {/* Gradient circle behind icon */}
                      <div
                        className={`absolute top-3 left-3 w-8 h-8 rounded-full bg-gradient-to-r ${quality.gradient} opacity-10 blur-lg`}
                      />

                      {/* Icon with gradient background */}
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${quality.gradient} flex items-center justify-center text-white mb-2 flex-shrink-0`}
                      >
                        {getIconComponent(quality.icon)}
                      </div>

                      <h4 className="text-base font-semibold text-white mb-2 flex-shrink-0">
                        {quality.title}
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed flex-1">
                        {quality.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
