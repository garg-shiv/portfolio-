import { portFolioConfig } from "@/lib/portfolio";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  handleClick: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: string
  ) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeSection,
  isOpen,
  setIsOpen,
  handleClick,
}) => {
  const config = portFolioConfig.navBar;
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

  return (
    <div
      className={clsx(
        `mobile-menu fixed top-20 inset-x-0 z-50 bg-gray-800/30 backdrop-blur-md border-b border-gray-700/30 
     transition-all duration-300 ease-in-out md:hidden`,
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="py-4 px-4 space-y-2 flex flex-col">
        <ul className="flex flex-col gap-2.5 items-center">
          {config.navLinks.map((section, index) => {
            const id = section.toLowerCase();
            return (
              <li
                key={section}
                className="list-none"
                onClick={(e) => {
                  handleClick(e, id);
                  setIsOpen(false);
                }}
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
      </div>
    </div>
  );
};

export default MobileMenu;
