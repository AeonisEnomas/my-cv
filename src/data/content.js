import { Code2, Database, Server } from 'lucide-react';

export const cvUrl = '/Abdullah-Mushtaq-CV.pdf';

export const profile = {
  name: 'Abdullah Mushtaq',
  title: 'Computer Science Undergraduate',
  location: 'Lahore, Pakistan',
  email: 'abdullahmushtaq445@gmail.com',
  phone: '+92 302 1047124',
  github: 'https://github.com/AevitusOmegus',
  linkedin: 'https://www.linkedin.com/in/abdullah-mushtaq-605554378/',
};

export const navItems = [
  ['Profile', 'profile'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

export const highlights = [
  'Full-Stack Architecture: Deployed scalable platforms utilizing React, FastAPI, Node.js, and Supabase.',
  'Advanced Integrations: Bridged robust backends with AI/ML pipelines (NLP) and Dockerized environments.',
  'Engineering Foundation: Solid command of C++, Object-Oriented Design, and algorithmic problem-solving.',
];

export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    items: ['React', 'JavaScript / TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend & Cloud',
    icon: Server,
    items: ['Node.js', 'FastAPI', 'Express.js', 'Supabase', 'Docker'],
  },
  {
    title: 'Core & Data',
    icon: Database,
    items: ['Python', 'C++', 'SQL (PostgreSQL, T-SQL)', 'Machine Learning (NLP)', 'Git'],
  },
];

export const projects = [
  {
    name: 'SENTI-MIND (Solo)',
    stack: 'React, FastAPI, Supabase, ML/NLP',
    link: 'https://senti-mind-mocha.vercel.app',
    summary: 'An AI-powered mental health companion analyzing text to detect emotional states and clinical risks.',
    impact: [
      'Developed a full-stack mental health tracking dashboard using React, featuring real-time analytics and user progress tracking.',
      'Trained and deployed a custom LinearSVC machine learning model utilizing TF-IDF for accurate clinical risk classification.',
      'Integrated HuggingFace NLP models for dynamic emotion detection and utilized OpenRouter to generate empathetic AI responses.',
    ],
  },
  {
    name: 'Coding-Classroom (Collaborative)',
    stack: 'React, Tailwind, Supabase, Docker',
    link: 'https://codingclassroom.vercel.app',
    summary: 'A highly interactive Learning Management System frontend seamlessly integrated with a live coding IDE.',
    impact: [
      'Designed a dual-client architecture offering dedicated teacher dashboards and student portals with dynamic routing.',
      'Integrated a fully functional Monaco Editor to provide a robust, browser-based execution environment for Python and JavaScript.',
      'Used Ollama Cloud Models integration for Learning, Evaluating and Grading of Students.',
    ],
  },
  {
    name: 'Chippa Motors (Collaborative)',
    stack: 'C#, WinForms, 3-Layer Architecture',
    summary: 'A feature-rich desktop application suite comprising a Car Dealership Management System and an interactive Racing Game.',
    impact: [
      'Built a Dealership Management System with robust CRUD operations for vehicle inventory and customer tracking.',
      'Developed a 2D Car Simulation for Car Testing featuring real-time collision detection, progressive difficulty, and dynamic score tracking.',
      'Implemented a 3-Layer Architecture (Presentation, Business Logic, Data Access) and A plethora of Design Patternsto ensure clean code separation and maintainability.',
    ],
  },
  {
    name: 'Penance (Collaborative)',
    stack: 'C++, Raylib, CMake',
    summary: 'A real-time 2D dungeon crawler game with a Branching Storyline, showcasing low-level system programming and optimized rendering.',
    impact: [
      'Engineered core gameplay mechanics including real-time player movement, combat interactions, and entity management.',
      'Implemented precise AABB collision detection and scalable game state logic to ensure a seamless gameplay loop.',
      'Utilized C++ and Raylib to handle memory-efficient graphics rendering, audio playback, and cross-platform compatibility.',
    ],
  },
];
