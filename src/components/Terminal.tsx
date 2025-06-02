"use client";

import { useState, useEffect, useRef } from "react";

const techStack = [
  { name: "React", color: "text-blue-400" },
  { name: "Next.js", color: "text-white" },
  { name: "TypeScript", color: "text-blue-300" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Python", color: "text-yellow-400" },
  { name: "PostgreSQL", color: "text-blue-500" },
  { name: "Git", color: "text-orange-400" },
  { name: "Docker", color: "text-blue-600" },
];

const codeSnippets = [
  "const developer = 'Shivanshu Garg';",
  " ",
  "function buildAmazingApps() {",
  "  return innovation + creativity;",
  "}",
  " ",
  "class FullStackDev {",
  "  constructor() {",
  "    this.passion = 'unlimited';",
  "  }",
  "}",
];

export default function CodeSnippet() {
  const [currentSnippet, setCurrentSnippet] = useState(0);

  const terminalCommands = useRef([
    "npm run build",
    "git commit -m 'feat: amazing feature'",
    "docker build -t app .",
    "npm test -- --coverage",
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const command =
      terminalCommands.current[
        Math.floor(Math.random() * terminalCommands.current.length)
      ];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < command.length) {
        index++;
      } else {
        setTimeout(() => {
          index = 0;
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [terminalCommands]);

  return (
    <div className="relative w-full max-w-[550px] mx-auto">
      {/* Floating Tech Stack */}
      <div className="relative h-80 mb-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-emerald-600/20"></div>
            ))}
          </div>
        </div>

        {/* Floating Tech Icons */}
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className={`absolute bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 text-sm font-mono ${tech.color} animate-pulse`}
            style={{
              top: `${5 + (index % 4) * 27}%`,
              left: `${5 + (index % 3) * 35}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${2 + (index % 3)}s`,
            }}
          >
            {tech.name}
          </div>
        ))}

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 max-w-xs">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-xs ml-2">code.js</span>
            </div>
              <div className="font-mono text-xs space-y-1overflow-hidden w-xl">
                <pre className="whitespace-pre text-left">
                  <code>
                    {codeSnippets.map((line, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === currentSnippet
                            ? "text-emerald-400 opacity-100"
                            : "text-gray-500 opacity-60"
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-600 rounded-full animate-ping"></div>
        <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
