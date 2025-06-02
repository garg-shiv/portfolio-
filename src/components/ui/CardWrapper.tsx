import React from "react";

function CardWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-xl h-full relative overflow-hidden">
      {children}
    </div>
  );
}

export default CardWrapper;
