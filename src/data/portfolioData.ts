import { SkillItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammad Anas",
  title: "Junior React & MERN Stack Developer",
  status: "OPEN TO INTERNSHIP OPPORTUNITIES",
  locationDisplay: "Based in Hyderabad, Sindh | Open to Opportunities in Karachi",
  location: "Hyderabad, Sindh, Pakistan",
  preferredLocation: "Karachi, Pakistan",
  email: "anaszai078@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  rolesTyping: [
    "React Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Software Engineering Fresher"
  ],
  heroIntro: "I am a passionate Software Engineering diploma holder focused on building modern, responsive and user-friendly web applications. I am currently looking for an internship or junior developer opportunity where I can contribute, learn and grow with a professional development team.",
  aboutIntro: "I am a Software Engineering diploma holder with a strong interest in frontend and full-stack web development. I have learned modern web technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB.\n\nI enjoy creating responsive user interfaces, understanding application logic and continuously improving my development skills. I am looking for an opportunity in a professional software house where I can gain practical experience and grow as a developer.",
  careerObjective: "I am actively looking for a React.js Developer Internship, MERN Stack Internship or Junior Web Developer position in Karachi. I am eager to work with an experienced team, contribute to real-world projects and develop my professional skills."
};

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    description: "Component lifecycle, functional components, custom hooks, virtual DOM, and reactive UI states.",
    iconName: "Code2",
    tag: "UI Library",
    accentColor: "from-cyan-500 to-blue-500"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    description: "Modern ES6+ syntax, asynchronous programming, Promises, DOM manipulation, and event-driven architecture.",
    iconName: "FileCode2",
    tag: "Core Language",
    accentColor: "from-amber-400 to-yellow-500"
  },
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    description: "Semantic document architecture, accessibility standards (a11y), forms, and modern web structures.",
    iconName: "LayoutTemplate",
    tag: "Markup",
    accentColor: "from-orange-500 to-red-500"
  },
  {
    id: "css",
    name: "CSS3 & Styling",
    category: "frontend",
    description: "Flexbox, CSS Grid, media queries, Tailwind CSS, animations, and responsive mobile-first layouts.",
    iconName: "Palette",
    tag: "Styles & Responsive",
    accentColor: "from-blue-400 to-indigo-500"
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    description: "Server-side JavaScript runtime environment, asynchronous I/O execution, and module management.",
    iconName: "Server",
    tag: "Runtime",
    accentColor: "from-emerald-500 to-green-600"
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    description: "Routing, request handling, middleware pipelines, controllers, and backend server setup.",
    iconName: "Layers",
    tag: "Web Framework",
    accentColor: "from-slate-400 to-slate-200"
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "backend",
    description: "RESTful architecture, CRUD operations, HTTP status codes, JSON payload parsing, and endpoint design.",
    iconName: "Network",
    tag: "API Architecture",
    accentColor: "from-indigo-400 to-purple-500"
  },

  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    description: "NoSQL document database, collections, document querying, indexing, and scalable data persistence.",
    iconName: "Database",
    tag: "NoSQL Database",
    accentColor: "from-emerald-400 to-teal-500"
  },
  {
    id: "mongoose",
    name: "Mongoose",
    category: "database",
    description: "Schema modeling, data validation, middleware hooks, relationships, and queries in Node.js.",
    iconName: "Boxes",
    tag: "ODM / Modeling",
    accentColor: "from-red-400 to-rose-600"
  },

  // Tools
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    description: "Primary IDE configured with ESLint, code formatters, Git integration, and debugging extensions.",
    iconName: "Laptop",
    tag: "Development IDE",
    accentColor: "from-blue-500 to-sky-400"
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    description: "Version control system, branching, staging, commits, merge workflows, and local history tracking.",
    iconName: "GitBranch",
    tag: "Version Control",
    accentColor: "from-orange-600 to-red-500"
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    description: "Cloud repositories, code commits, branch collaboration, pull requests, and open-source workflows.",
    iconName: "GitPullRequest",
    tag: "Collaboration",
    accentColor: "from-purple-400 to-indigo-500"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "adse",
    title: "Advanced Diploma in Software Engineering (ADSE)",
    institution: "Aptech Learning",
    level: "Diploma Program",
    period: "Comprehensive Software Engineering Program",
    description: "Rigorous technical education in software design principles, computer science foundations, algorithm thinking, and hands-on modern full-stack web application development.",
    highlights: [
      "In-depth training in programming logic, object-oriented concepts, and software methodologies",
      "Comprehensive web stack: HTML, CSS, JavaScript, React.js, Node.js, Express, and databases",
      "Practical development assignments and project-based software engineering coursework"
    ]
  },
  {
    id: "fsc",
    title: "FSC (Higher Secondary Certificate)",
    institution: "Intermediate Board",
    level: "Higher Secondary",
    period: "Pre-Engineering / Science Track",
    description: "Solid academic foundation in mathematics, analytical problem solving, physics, and logical reasoning supporting computer science and software development concepts.",
    highlights: [
      "Advanced mathematical foundations including algebra, calculus, and discrete problem solving",
      "Analytical mindset and systematic approach to complex engineering challenges",
      "Academic discipline preparing for professional software engineering studies"
    ]
  }
];

export const CERTIFICATION_DATA: CertificationItem = {
  id: "mern-cert",
  title: "MERN Stack Development Certificate",
  institution: "Aptech Learning",
  issueDate: "Verified Technical Credential",
  credentialId: "APT-MERN-DEV",
  description: "Certified proficiency in full-stack JavaScript web development utilizing MongoDB, Express.js, React.js, and Node.js for modern web applications.",
  modules: [
    "React.js Single-Page Applications & Hooks",
    "Node.js & Express.js RESTful API Architecture",
    "MongoDB Schema Modeling & Mongoose ODM",
    "Asynchronous JavaScript & Full-Stack Integration",
    "Version Control & Deployment Best Practices"
  ]
};

export const ABOUT_CARDS = [
  {
    title: "Software Engineering Fresher",
    subtitle: "Diploma Graduate",
    description: "Armed with a comprehensive Software Engineering diploma from Aptech Learning, ready to apply strong algorithmic foundations to real software engineering challenges.",
    icon: "GraduationCap",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "React & MERN Stack",
    subtitle: "Modern Web Toolkit",
    description: "Trained across modern frontend and backend JavaScript ecosystems: responsive React components, RESTful API consumption, Express routing, and MongoDB data modeling.",
    icon: "Code",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/20"
  },
  {
    title: "Seeking Internship / Junior Role",
    subtitle: "Immediate Karachi Relocation",
    description: "Actively seeking a React.js or MERN Stack Developer Intern position in Karachi. Ready to bring high dedication, quick adaptability, and continuous learning to an active team.",
    icon: "Briefcase",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20"
  }
];
