"use client";
import { portFolioConfig } from "@/lib/portfolio";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import BezierEasing from "bezier-easing";
import MobileMenu from "./MobileNav";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function Navbar() {
  const easing = BezierEasing(0.77, 0, 0.175, 1);
  const config = portFolioConfig.navBar;
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const smoothScrollTo = (targetY: number, duration = 600) => {
    const startY = window.scrollY;
    const diffY = targetY - startY;
    let startTime: number | null = null;

    function step(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const t = Math.min(1, elapsed / duration);
      const easedT = easing(t);
      window.scrollTo(0, startY + diffY * easedT);
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7,root:null}
    );

    config.navLinks.forEach((section) => {
      const id = section.toLowerCase();
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [config.navLinks]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop;
      smoothScrollTo(offsetTop, 800);
    }
  };

  const linkVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full  border-b border-gray-700/30 z-50"
    >
      <div className="p-4 bg-gray-800/30  backdrop-blur-md">
        <div className=" mx-auto max-w-7xl flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-6">
          <span id="logo" className="block text-gray-300">
            <Image src={"/site-logo.svg"} width={56} height={56} alt={"logo"}/>
          </span>
          <ul className="md:flex flex-nowrap gap-2.5 hidden ">
            {config.navLinks.map((section, index) => {
              const id = section.toLowerCase();
              return (
                <li
                  key={section}
                  className="list-none"
                  onClick={(e) => handleClick(e, id)}
                >
                  <motion.a
                    href={`#${id}`}
                    className={clsx(
                      "px-3 py-1 cursor-pointer transition-colors duration-300",
                      {
                        "text-emerald-500": activeSection === id,
                        "text-gray-300": activeSection !== id,
                      }
                    )}
                    initial={linkVariants.initial}
                    animate={linkVariants.animate}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                  >
                    {section.toUpperCase().slice(0, 1) + id.slice(1)}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 cursor-pointer transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close main menu" : "Open main menu"}
              </span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute transition-transform duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-0 pointer-events-none rotate-180"
                      : "opacity-100 rotate-0"
                  }`}
                  style={{ transformOrigin: "50% 50%" }}
                >
                  <Menu size={24} />
                </span>
                <span
                  className={`absolute transition-transform duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 pointer-events-none -rotate-180"
                  }`}
                  style={{ transformOrigin: "50% 50%" }}
                >
                  <X size={24} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        activeSection={activeSection}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClick={handleClick}
      />
    </nav>
  );
}

export default Navbar;
