export const techColorMap: Record<
  string,
  { color: string; bgColor: string; borderColor: string; shadowColor: string }
> = {
  // Programming Languages
  python: {
    color: "text-white",
    bgColor: "bg-blue-400/20",
    borderColor: "border-blue-400/30",
    shadowColor: "hover:shadow-blue-400/30",
  },
  tensorflow: {
    color: "text-white",
    bgColor: "bg-orange-400/20",
    borderColor: "border-orange-400/30",
    shadowColor: "hover:shadow-orange-400/30",
  },
  resnet50v2: {
    color: "text-white",
    bgColor: "bg-purple-400/20",
    borderColor: "border-purple-400/30",
    shadowColor: "hover:shadow-purple-400/30",
  },
  "vitbase-16": {
    color: "text-white",
    bgColor: "bg-pink-400/20",
    borderColor: "border-pink-400/30",
    shadowColor: "hover:shadow-pink-400/30",
  },
  "deep learning": {
    color: "text-white",
    bgColor: "bg-green-400/20",
    borderColor: "border-green-400/30",
    shadowColor: "hover:shadow-green-400/30",
  },
  cnn: {
    color: "text-white",
    bgColor: "bg-indigo-400/20",
    borderColor: "border-indigo-400/30",
    shadowColor: "hover:shadow-indigo-400/30",
  },
  vgg16: {
    color: "text-white",
    bgColor: "bg-yellow-400/20",
    borderColor: "border-yellow-400/30",
    shadowColor: "hover:shadow-yellow-400/30",
  },
  "vision transformer": {
    color: "text-white",
    bgColor: "bg-red-400/20",
    borderColor: "border-red-400/30",
    shadowColor: "hover:shadow-red-400/30",
  },
  kaggle: {
    color: "text-white",
    bgColor: "bg-teal-400/20",
    borderColor: "border-teal-400/30",
    shadowColor: "hover:shadow-teal-400/30",
  },
  "c/c++": {
    color: "text-white",
    bgColor: "bg-blue-900/50",
    borderColor: "border-blue-500/30",
    shadowColor: "hover:shadow-blue-900/30",
  },
  sql: {
    color: "text-white",
    bgColor: "bg-indigo-600",
    borderColor: "border-gray-600/70",
    shadowColor: "hover:shadow-indigo-600/30",
  },
  javascript: {
    color: "text-yellow-400",
    bgColor: "bg-yellow-800/30",
    borderColor: "border-yellow-400/20",
    shadowColor: "hover:shadow-yellow-800/30",
  },
  typescript: {
    color: "text-blue-300",
    bgColor: "bg-blue-600/30",
    borderColor: "border-blue-300/30",
    shadowColor: "hover:shadow-blue-600/30",
  },

  // Web Dev
  html5: {
    color: "text-white",
    bgColor: "bg-orange-600",
    borderColor: "border-orange-300/30",
    shadowColor: "hover:shadow-orange-600/30",
  },
  css3: {
    color: "text-white",
    bgColor: "bg-blue-500",
    borderColor: "border-gray-600/70",
    shadowColor: "hover:shadow-blue-500/30",
  },
  reactjs: {
    color: "text-sky-300",
    bgColor: "bg-sky-600/30",
    borderColor: "border-sky-300/50",
    shadowColor: "hover:shadow-sky-600/30",
  },
  nextjs: {
    color: "text-white",
    bgColor: "bg-black",
    borderColor: "border-gray-600/70",
    shadowColor: "hover:shadow-gray-800/30",
  },
  mongodb: {
    color: "text-green-300",
    bgColor: "bg-green-600/30",
    borderColor: "border-green-300/50",
    shadowColor: "hover:shadow-green-600/30",
  },
  expressjs: {
    color: "text-zinc-300",
    bgColor: "bg-zinc-700/50",
    borderColor: "border-zinc-300/30",
    shadowColor: "hover:shadow-zinc-700/30",
  },
  nodejs: {
    color: "text-lime-400",
    bgColor: "bg-lime-600/30",
    borderColor: "border-lime-400/30",
    shadowColor: "hover:shadow-lime-600/30",
  },
  tailwindcss: {
    color: "text-cyan-300",
    bgColor: "bg-cyan-600/30",
    borderColor: "border-cyan-300/30",
    shadowColor: "hover:shadow-cyan-600/30",
  },

  // Database & ORM
  prisma: {
    color: "text-white",
    bgColor: "bg-slate-500",
    borderColor: "border-gray-600/70",
    shadowColor: "hover:shadow-slate-500/30",
  },
  redis: {
    color: "text-red-200",
    bgColor: "bg-red-700/30",
    borderColor: "border-red-200/30",
    shadowColor: "hover:shadow-red-700/30",
  },
  postgresql: {
    color: "text-sky-300",
    bgColor: "bg-sky-700/30",
    borderColor: "border-sky-500/30",
    shadowColor: "hover:shadow-sky-700/30",
  },

  // DevOps / Containers
  docker: {
    color: "text-sky-400",
    bgColor: "bg-sky-700/30",
    borderColor: "border-sky-400/30",
    shadowColor: "hover:shadow-sky-700/30",
  },

  // Real-time Communication
  socketio: {
    color: "text-white",
    bgColor: "bg-gray-600/30",
    borderColor: "border-gray-600/70",
    shadowColor: "hover:shadow-gray-600/30",
  },
  pusherjs: {
    color: "text-purple-200",
    bgColor: "bg-purple-600/30",
    borderColor: "border-purple-200/30",
    shadowColor: "hover:shadow-purple-600/30",
  },

  // Tools
  git: {
    color: "text-red-300",
    bgColor: "bg-red-600/30",
    borderColor: "border-red-300/30",
    shadowColor: "hover:shadow-red-600/30",
  },
  github: {
    color: "text-white",
    bgColor: "bg-gray-700",
    borderColor: "border-gray-600/70",
    shadowColor: "hover:shadow-gray-700/30",
  },
  vscode: {
    color: "text-blue-200",
    bgColor: "bg-blue-500/30",
    borderColor: "border-gray-600/70",
    shadowColor: "hover:shadow-blue-500/30",
  },
  postman: {
    color: "text-orange-100",
    bgColor: "bg-orange-500/30",
    borderColor: "border-orange-400/30",
    shadowColor: "hover:shadow-orange-500/30",
  },
  gemini: {
    color: "text-blue-100",
    bgColor: "bg-blue-500/30",
    borderColor: "border-blue-400/30",
    shadowColor: "hover:shadow-blue-500/30",
  },

  cloudinary: {
    color: "text-indigo-100",
    bgColor: "bg-indigo-500/30",
    borderColor: "border-indigo-400/30",
    shadowColor: "hover:shadow-indigo-500/30",
  },

  syncfusion: {
    color: "text-purple-100",
    bgColor: "bg-purple-500/30",
    borderColor: "border-purple-400/30",
    shadowColor: "hover:shadow-purple-500/30",
  },
  kafka: {
    color: "text-red-100",
    bgColor: "bg-red-500/30",
    borderColor: "border-red-400/30",
    shadowColor: "hover:shadow-red-500/30",
  },
};

// techIconMap.ts
export const techIconMap: Record<string, string> = {
  python:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg",
  tensorflow: 
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tensorflow/tensorflow-original.svg",
  resnet50v2: 
    "/skillicons/nn.png",
  "vitbase-16": 
    "/skillicons/nn.png",
  "deep learning": 
    "/skillicons/nn.png",
  cnn: 
    "/skillicons/nn.png",
  vgg16: 
    "/skillicons/nn.png",
  "vision transformer": 
    "/skillicons/nn.png",
  kaggle: 
    "/skillicons/kaggle.png",
  git: 
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg",
  "c/c++":
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/cplusplus/cplusplus-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg",

  css3: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg",
  html5:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg",
  webflow:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/webflow/webflow-original.svg",
  prisma:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/prisma/prisma-original.svg",

  socketio:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/socketio/socketio-original.svg",
  mongoose:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongoose/mongoose-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg",
  expressjs:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg",
  docker:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg",
  redis:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redis/redis-original.svg",

  reactjs:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nextjs/nextjs-original.svg",
  vercel:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg",
  tailwindcss:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg",

  postman:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg",
  github:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vscode/vscode-original.svg",

  pusherjs: "/skillicons/logo-pusher-icon.svg",
  cloudinary: "/skillicons/logo-cloudinary.svg",
  gemini: "/skillicons/logo-gemini-ai.svg",
  syncfusion: "/skillicons/logo-syncfusion.svg",
  kafka: "/skillicons/logo-kafka.svg",
};

export const techDisplayNameMap: Record<string, string> = {
  // Programming Languages
  python: "Python",
  "c/c++": "C/C++",
  sql: "SQL",
  javascript: "JavaScript",
  typescript: "TypeScript",
  "deep learning": "Deep Learning",
  tensorflow: "TensorFlow",
  resnet50v2: "ResNet50V2",
  "vitbase-16": "VitBase-16", 
  "vision transformer": "Vision Transformer",
  cnn: "CNN",
  vgg16: "VGG16",
  kaggle: "Kaggle",

  // Web Dev
  html5: "HTML5",
  css3: "CSS3",
  reactjs: "React Js",
  nextjs: "Next Js",
  mongodb: "MongoDB",
  expressjs: "Express Js",
  nodejs: "Node Js",
  tailwindcss: "Tailwind CSS",
  cloudinary: "Cloudinary",
  syncfusion: "SyncFusion",
  kafka: "Kafka",
  // Database & ORM
  prisma: "Prisma",
  redis: "Redis",
  postgresql: "PostgreSQL",

  // Containers & DevOps
  docker: "Docker",

  // Real-time Communication
  socketio: "Socket.io",
  pusherjs: "Pusher Js",

  // Tools
  git: "Git",
  github: "GitHub",
  vscode: "VS Code",
  postman: "Postman",

  // AI
  gemini: "Gemini",
};
