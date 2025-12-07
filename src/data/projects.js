// src/data/projects.js

import netfliximage from "../assets/Netflix.jpg";
import Portfolioimage from "../assets/Portfolio.png";
import Quizapp from "../assets/Quizapp.png";


export const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "A fully responsive Netflix UI clone built with React featuring dynamic content rendering, API integration, and modern component-based architecture.",
    image: netfliximage,
    gitlink:"https://github.com/G-Sabari/Netflix-Clone.git",
    livelink: "https://netflix-clone.vercel.app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website developed using React and Tailwind CSS to showcase projects, skills, and professional experience with smooth animations and responsive design.",
    image: Portfolioimage,
    gitlink:"...",
    livelink: "https://portfolio.vercel.app",
  },
  {
    id: 3,
    title: "Quiz App",
    description: "An interactive quiz application designed for college students with multiple-choice questions, real-time score tracking, and a clean user-friendly interface.",
    image: Quizapp,
    gitlink:"https://github.com/G-Sabari/quiz-app.git",
    livelink: "https://quiz-app-lemon-nine-12.vercel.app",
  },
  
  
];
