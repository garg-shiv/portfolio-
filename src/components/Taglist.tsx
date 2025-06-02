import React from "react";
import SkillTag from "./SkillTag";

type Props = {
  techStack: string[];
  size:"icon" | "base";
};

function Taglist({ techStack, size="base" }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech, index) => (
        <SkillTag tech={tech} key={`${tech}-${index}`} variant="outline" size={size}  className="rounded-full px-3"/>
      ))}
    </div>
  );
}

export default Taglist;
