import { About, CodingProfile, Hero, Projects, Skills, Social } from "./sectionTypes";

const hero: Hero = {
  name: "Shivanshu Garg",
  description:
    "I am a passionate software engineer with a focus on building innovative solutions.",
  scrollIndicatorText: "Scroll to explore",
  greeting: "Hi, I'm ",
  resumeLink: "https://example.com/resume.pdf",
  connectLink: "#connect",
};

const about:About = {
  title: "About Me",
  subtitle: "Who I am",
  bio: [
    "I am Shivanshu Garg , a student at Bennett University (BU) pursuing my B.Tech in Information Technology. I'm a passionate software engineer with a strong foundation in full-stack web development and a deep curiosity for solving real-world problems through technology.  I have experience of working in JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, and more.",
    "Whether it's building scalable web apps, architecting clean APIs, I thrive on translating ideas into impactful solutions. ",
    "Beyond code, I enjoy sharpening my problem-solving skills through competitive programming, exploring the latest in AI and developer tools, and crafting products that not only function well but also feel great to use.",
  ],
  details: [
    { label: "Location", value: "Delhi, India" },
    { label: "Specialization", value: "Full Stack Developer" },
  ],
  education: [
    {
      degree: "B. Tech.",
      institution: "Bennett University",
      duration: "2022 - Present",
      cgpa: "9.25 / 10.0",
      major: "Computer Science and Engineering",
    },
  ],
  qualities: [
    {
      title: "Problem Solver",
      description: "I thrive on challenges and enjoy finding solutions.",
      icon: "Rocket",
      gradient: "from-emerald-400 to-blue-500",
    },
    {
      title: "Critical Thinker",
      description:
        "I analyze problems from multiple angles, question assumptions, and make well-reasoned decisions.",
      icon: "Lightbulb",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Team Player",
      description: "I believe in collaboration and teamwork.",
      icon: "Code",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "User-Focused",
      description:
        "I prioritize creating intuitive, accessible experiences that meet real user needs.",
      icon: "BarChart3",
      gradient: "from-pink-400 to-red-500",
    },
  ],
};

const projects: Projects = {
  title: "Projects",
  projects: [
    {
      imagedir: "/projects/slidescribe",
      images: [
        "/login-light.png",
        "/dashboard-light.png",
        "/scriptgeneration-light.png",
        "/login-dark.png",
        "/dashboard-dark.png",
      ],
      projectTitle: "SlideScribe",
      date: "2025",
      description:
        "SlideScribe transforms PowerPoint presentations into spoken scripts using AI. Users can upload slides, and the app generates narration-ready content with spaced delivery. Built with seamless Cloudinary integration and optimized for both light and dark themes.",
      repo: "https://github.com/garg-shiv/Slidescribe",
      deployment: "https://slide-scribe.vercel.app/dashboard",
      techStack: ["NextJs", "Prisma", "MongoDb", "TailwindCSS", "Cloudinary"],
    },
    {
      imagedir: "/projects/compatriot",
      images: ["/image1.png", "/image2.png", "/image3.png"],
      projectTitle: "Compatriot AI",
      date: "2024",
      description:
        "Compatriot AI is an AI-based chat platform where users can create and chat with custom virtual companions. Each companion responds in its own unique style, making the conversation more engaging and personalized.",
      repo: "https://github.com/garg-shiv/Compatriot-AI",
      deployment: "https://compatriot-ai.vercel.app/",
      techStack: [
        "NextJs",
        "Prisma",
        "Postgresql",
        "Redis",
        "TailwindCSS",
      ],
    },
    {
      imagedir: "/projects/Monkey",
      images: ["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png"],
      projectTitle: "MonkeyPox Detection using advanced CNN and Vision Transformer",
      date: "2025",
      description:
        "Monkeypox Detection Using Advanced CNN and Vision Transformer” was accepted at ICCTRDA-2025 in Vietnam; proceedings will appear in Springer LNNS (SCOPUS, WoS, EI, DBLP) and the work ranks in the top 20% of submissions. We compiled a labeled dataset of monkeypox and non-monkeypox skin images. An advanced CNN was trained to extract texture, shape, and lesion features. A Vision Transformer was integrated to capture global context and long-range dependencies. This hybrid model achieves high accuracy and robustness, offering a rapid diagnostic aid for clinicians",
      repo: "https://github.com/garg-shiv/MonkeyPox-Detection-using-advanced-CNN-and-Vision-Transformer",
      deployment: "https://github.com/garg-shiv/MonkeyPox-Detection-using-advanced-CNN-and-Vision-Transformer",
      techStack: ["ResNet50V2", "VitBase-16", "Deep Learning", "Python", "TensorFlow"],
    },{
      imagedir: "/projects/diabetic",
      images: ["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png","/image6.png"],
      projectTitle: "Hybrid Deep Learning Architectures for Diabetic Retinopathy Detection: A Comparative Study of CNNs, VGG16, and Vision Transformers",
      date: "2025",
      description:
        "A Custom CNN, fine-tuned VGG-19, and Vision Transformer were evaluated on 13,673 DDR retinal images to classify diabetic retinopathy into five severity levels; the Custom CNN achieved 76% validation accuracy with minimal overfitting, VGG-19 balanced 74% accuracy and model complexity, and ViT converged most rapidly but required stronger regularization. Paper ID IJSET_V13I2_15889 has been accepted for online publication in the International Journal of Scientific Research and Engineering Trends.",
      repo: "https://github.com/garg-shiv/Deep-Learning-for-Diabetic-Retinopathy-Detection-Study-of-CNNs-VGG16-and-Vision-Transformers",
      deployment: "https://github.com/garg-shiv/Deep-Learning-for-Diabetic-Retinopathy-Detection-Study-of-CNNs-VGG16-and-Vision-Transformers",
      techStack: ["CNN","VGG16", "Vision Transformer", "Deep Learning", "Python","Kaggle", "TensorFlow"],
    }
  ],
};

const skills:Skills = {
  title: "Technical Skills",
  description:
    "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
  techstack: [
    {
      domain: "Frontend",
      skills: ["reactjs", "nextjs", "html5", "css3", "tailwindcss"],
    },
    {
      domain: "Backend",
      skills: [
        "prisma",
        "nodejs",
        "expressjs",
        "mongodb",
        "postgresql",
        "redis",
        "socketio",
        "docker",
      ],
    },
    {
      domain: "Tools",
      skills: ["vscode", "git", "github", "postman"],
    },
    {
      domain: "Programming Languages",
      skills: ["c/c++", "python", "javascript", "typescript"],
    },
  ],
};

const codingProfiles:CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "Consistent_",
    profileUrl: "https://leetcode.com/u/Consistent_",
    rating: 1513,
    maxRating: 1585,
    rank: 0,
    globalRank: 0,
    problemSolved: 738,
    contests: 2,
    title: "N/A",
    top: 40,
  },
  {
    platform: "LeetCode",
    username: "Consistent_Contest",
    profileUrl: "https://leetcode.com/u/Consistent_Contest",
    rating: 1865,
    maxRating: 1865,
    rank: 0,
    globalRank: 0,
    problemSolved: 65,
    contests: 18,
    title: "Knight",
    top: 5,
  },

  {
    platform: "Codeforces",
    username: "Consistent_Contest",
    profileUrl: "https://leetcode.com/u/Consistent_Contest",
    rating: 1420,
    maxRating: 1420,
    rank: 0,
    globalRank: 0,
    problemSolved: 306,
    contests: 31,
    title: "Specialist",
  },
  {
    platform: "CodeChef",
    username: "consistent_ct",
    profileUrl: "https://leetcode.com/u/consistent_ct",
    rating: 1712,
    maxRating: 1735,
    rank: 0,
    globalRank: 0,
    problemSolved: 81,
    title: "3*",
    contests: 21,
    stars: 3,
  },
];

const socials:Social[] = [
  {
    platform: "linkedin",
    link: "https://www.linkedin.com/in/garg-shiv/",
  },
  {
    platform: "github",
    link: "https://github.com/garg-shiv",
  },
  {
    platform: "email",
    link: "mailto:gargshivanshu17@gmail.com",
  },
];

export const portFolioConfig = {
  navBar: {
    navLinks: ["Home", "About", "Skills", "Projects", "Contact"],
  },
  hero,
  about,
  projects,
  skills,
  codingProfiles,
  socials,
};
