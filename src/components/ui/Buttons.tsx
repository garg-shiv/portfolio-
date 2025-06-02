"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  iconPosition?: "left" | "right";
  iconAnimationStyle?:
    | "none"
    | "translate-r"
    | "translate-l"
    | "scale-up"
    | "translate-tr"
    | "translate-tl"
    | "translate-bl"
    | "translate-br"
    | "tilt";
  animateOnHover?: "false" | "true";
  gradient?: true | false;
  type?:"button" | "link";
  variant?: "gradient" | "secondary" |"link";
  href?:string;
};

// Animation config
const getIconAnimation = (style: Props["iconAnimationStyle"]) => {
  switch (style) {
    case "translate-r":
      return {
        initial: { x: 0 },
        hover: { x: 2 },
      };
    case "translate-l":
      return {
        initial: { x: 0 },
        hover: { x: -2 },
      };
    case "scale-up":
      return {
        initial: { scale: 1 },
        hover: { scale: 1.2 },
      };
    case "tilt":
      return {
        initial: { rotate: 0 },
        hover: { rotate: 10 },
      };
    case "translate-br":
      return {
        initial: { x: 0, y: 0 },
        hover: { x: 2, y: 2 },
      };
    case "translate-bl":
      return {
        initial: { x: 0, y: 0 },
        hover: { x: -2, y: 2 },
      };
    case "translate-tl":
      return {
        initial: { x: 0, y: 0 },
        hover: { x: -2, y: -2 },
      };
    case "translate-tr":
      return {
        initial: { x: 0, y: 0 },
        hover: { x: 2, y: -2 },
      };
    default:
      return {
        initial: {},
        hover: {},
      };
  }
};

function Button({
  label,
  icon,
  onClick,
  className = "",
  iconPosition = "right",
  iconAnimationStyle = "none",
  animateOnHover = "false",
  gradient = false,
  type="button",
  href,
}: Props) {
  const variantClasses = clsx({
    "border border-gray-600 hover:border-emerald-600 bg-gray-800 shadow-gray-600/20 hover:shadow-gray-600/40":
      !gradient,
    "bg-gradient-to-r from-emerald-600 to-blue-600 shadow-emerald-600/20 hover:shadow-emerald-600/40":
      gradient,
  });

  const iconVariant =
    animateOnHover === "true"
      ? getIconAnimation(iconAnimationStyle)
      : { initial: {}, hover: {} };

  if(type==="link"){
    return (
      <motion.a
      type="button"
      whileHover="hover"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="initial"
      onClick={onClick}
      className={clsx(
        `p-2 ${variantClasses} flex items-stretch justify-center gap-2  rounded-md cursor-pointer ${className} `,
        { "flex-row-reverse": iconPosition === "left" }
      )}
    >
      <span className="overflow-hidden block text-nowrap">{label}</span>
      {icon && (
        <motion.span
          className={clsx("self-center relative")}
          variants={iconVariant}
          transition={{ delay: 0.1, duration: 0.25 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.a>
    )
  }
  return (
    <motion.button
      type="button"
      whileHover="hover"
      initial="initial"
      onClick={onClick}
      className={clsx(
        `p-2 ${variantClasses} flex items-stretch justify-center gap-2  rounded-md cursor-pointer ${className} `,
        { "flex-row-reverse": iconPosition === "left" }
      )}
    >
      <span className="overflow-hidden block text-nowrap">{label}</span>
      {icon && (
        <motion.span
          className={clsx("self-center relative")}
          variants={iconVariant}
          transition={{ delay: 0.1, duration: 0.25 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
}

export { Button };
