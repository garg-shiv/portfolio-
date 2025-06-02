import {
  techColorMap,
  techDisplayNameMap,
  techIconMap,
} from "@/lib/techstackconfig";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type Props = {
  tech: string;
  className?: string;
  variant?: "solid" | "outline";
  size?: "icon" | "base";
};


function SkillTag({
  tech,
  className,
  variant = "solid",
  size = "base",

}: Props) {
  console.log(tech);
  const techName = tech.toLowerCase();
  const styledTechName = techDisplayNameMap[techName];

  const iconLink = techIconMap[techName];

  const baseClass = clsx("flex items-center gap-2 p-2 mx-0.5 cursor-default");
  const variantClass = clsx(
    variant === "solid" &&
      `${techColorMap[techName].color} ${techColorMap[techName].bgColor} `,
    variant === "outline" &&
      `border ${techColorMap[techName].borderColor} hover:shadow-md ${techColorMap[techName].shadowColor} text-gray-300 `,
    size === "icon" && `rounded-lg`
  );

  if (size === "icon") {
    
    return (
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
      >
        <Tooltip>
          <TooltipTrigger
            className={`${baseClass} ${variantClass} ${className} `}
          >
            <Image
              src={iconLink}
              className="text-xs"
              alt={`${tech}-icon`}
              width={18}
              height={18}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{styledTechName}</p>
          </TooltipContent>
        </Tooltip>
      </motion.div>
    );
  }

  return (
    <motion.span
      className={`${baseClass} ${variantClass} ${className} `}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.25 }}
    >
      <Image
        src={iconLink}
        className="text-xs"
        alt={`${tech}-icon`}
        width={18}
        height={18}
      />
      {<span className="text-sm ">{styledTechName}</span>}
    </motion.span>
  );
}

export default SkillTag;
