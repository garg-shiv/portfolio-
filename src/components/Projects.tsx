"use client";
import React from "react";
import { motion } from "framer-motion";
import { portFolioConfig } from "@/lib/portfolio";
import CardWrapper from "./ui/CardWrapper";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "./ui/Buttons";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import Taglist from "./Taglist";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function Projects() {
  const config = portFolioConfig.projects;
  const projects = config.projects;
  return (
    <section
      id="projects"
      className="py-24 w-full min-h-[100vh] relative"
      aria-labelledby="projects-title"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            My <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 auto-rows-auto gap-4">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={`${project.projectTitle}-${index}`}
                className="relative "
                initial="initial"
                whileInView={"inView"}
                whileHover={"hover"}
                variants={{
                  initial: {
                    opacity: 0,
                    y: 10,
                    x: 0,
                  },
                  inView: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <CardWrapper>
                  {/* subtle grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at center, rgba(74, 222, 128, 0.3) 0%, transparent 8%)`,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div className="grid lg:grid-cols-2 gap-0 relative items-center">
                    {/* Image Container */}
                    <div className="relative w-full  p-1">
                      <Carousel
                        opts={{
                          align: "center",
                        }}
                        className="w-full"
                      >
                        <CarouselContent>
                          {project.images.map((link, index) => (
                            <CarouselItem
                              key={index}
                              className="relative basis-3/3 "
                            >
                              <div className="relative aspect-[16/10]">
                                <div className="relative w-full h-full rounded-xl overflow-hidden">
                                  <Image
                                    src={`${project.imagedir}${link}`}
                                    fill
                                    style={{
                                      objectFit: "cover",
                                    }}
                                    className="text-xs object-cover transition-transform duration-300 hover:scale-105 "
                                    alt={`${project.projectTitle}-image-${index}`}
                                  />
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700" />
                        <CarouselNext className="right-2 bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700" />
                      </Carousel>
                    </div>

                    {/* Text Container */}
                    <div className="p-8 flex flex-col gap-4 w-full">
                      <div>
                        <span className="text-gray-300 mb-2 block">
                          {project.date}
                        </span>
                        <h3 className="text-2xl font-bold ">
                          <Link
                            href={`/${project.projectTitle.toLowerCase()}`}
                            className="flex items-center gap-2"
                          >
                            <span className="  text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                              {project.projectTitle}
                            </span>
                            <motion.span
                              variants={{
                                initial: { x: 0, y: 0 },
                                hover: { x: 3, y: -3 },
                              }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                            >
                              {/* <ArrowUpRight className="mr-1 text-blue-500" /> */}
                            </motion.span>
                          </Link>
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm">
                        {project.description}
                      </p>

                      <div>
                        <Taglist techStack={project.techStack} size="icon" />
                      </div>

                      <div className="flex gap-2">
                        <Button
                          label="View Source"
                          icon={<FiGithub size={18} />}
                          iconPosition="left"
                          animateOnHover="true"
                          iconAnimationStyle="tilt"
                          type="link"
                          href={project.repo}
                        />
                        <Button
                          label="Live Demo"
                          animateOnHover="true"
                          iconPosition="right"
                          icon={<ExternalLinkIcon size={18} />}
                          iconAnimationStyle="translate-tr"
                          gradient={true}
                          type={"link"}
                          href={project.deployment}
                        />
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.span
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 0, y: -3 }}
          transition={{ delay: 0.1, duration: 0.15 }}
        >
          <Button
            label="View More Projects"
            icon={<FiGithub />}
            type="link"
            href="https://github.com/HarshS490?tab=repositories"
            className="px-4 py-3 rounded-full shadow-lg hover:shadow-teal-700/40 my-16"
          ></Button>
        </motion.span>
      </div>
    </section>
  );
}

export default Projects;
