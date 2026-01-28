import { Project, Skill, Experience, SocialLink, Service } from '../types';

export const RESUME_DATA = {
  name: "Aditya Nadamuni",
  title: "Java Full Stack Developer | Spring Boot & React Expert",
  bio: "Results-driven Java Full Stack Developer with 4+ years of hands-on experience at JP Morgan & TCS. Specializing in building scalable enterprise applications using Spring Boot, React, and microservices architecture. Multi-cloud certified (AWS, GCP, Azure) with a track record of optimizing system performance by up to 45% and enhancing data reliability.",
  location: "Hyderabad, Telangana, India",
  email: "contact@adityanadamuni.dev",
  availability: "Open to Opportunities",
};

export const SERVICES: Service[] = [
  { title: "Full Stack Development", description: "End-to-end web solutions using Java Spring Boot for robust backends and React.js for responsive frontends.", icon: "java" },
  { title: "Cloud Architecture", description: "Designing scalable, multi-cloud infrastructure on AWS, Google Cloud, and Azure using Docker and CI/CD pipelines.", icon: "aws" },
  { title: "Microservices", description: "Breaking down monoliths into resilient microservices with Spring Cloud, ensuring high availability and scalability.", icon: "springboot" },
  { title: "System Optimization", description: "Enhancing performance via SQL query tuning, Redis caching, and rigorous backend architectural improvements.", icon: "server" },
];

export const SKILLS: Skill[] = [
  { name: "Java / Spring Boot", level: 95, category: "backend", icon: "java" },
  { name: "React / JavaScript", level: 90, category: "frontend", icon: "react" },
  { name: "AWS / Cloud", level: 85, category: "tools", icon: "aws" },
  { name: "Microservices", level: 90, category: "backend", icon: "springboot" },
  { name: "SQL / MySQL", level: 85, category: "backend", icon: "sql" },
  { name: "Redis / Caching", level: 80, category: "backend", icon: "redis" },
  { name: "Docker / DevOps", level: 80, category: "tools", icon: "docker" },
  { name: "Git / CI/CD", level: 90, category: "tools", icon: "git" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Healthcare Supply Chain Middleware",
    description: "Optimized middleware for hospital supply chains using Spring Boot, integrating multiple vendor systems. Reduced errors by 30% and supported scalable analytics for 1M+ records via Redis and JPA.",
    tags: ["Java", "Spring Boot", "Redis", "MySQL"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    featured: true,
  },
  {
    id: "2",
    title: "AI Chatbot & Analytics Dashboard",
    description: "Co-designed a responsive frontend chatbot interface integrated with LLM APIs and D3.js visualizations. Boosted resolution rates by 35% and improved dashboard load times by 45%.",
    tags: ["React.js", "D3.js", "LLM APIs", "Docker"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    featured: true,
  },
  {
    id: "3",
    title: "Banking Microservices System",
    description: "Orchestrated backend microservice enhancements centralizing mobile and banking metrics through secure REST APIs. Achieved 25% data reliability gains and 50% faster feature iterations.",
    tags: ["Spring Boot", "PostgreSQL", "Microservices", "REST API"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    featured: false,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Full Stack Developer",
    company: "JPMorganChase",
    period: "Oct 2025 - Present",
    description: "Specializing in building scalable enterprise applications using Spring Boot, React, and microservices architecture. Leveraging Amazon Web Services (AWS) and React.js to drive digital innovation.",
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Tata Consultancy Services",
    period: "Nov 2024 - Sep 2025",
    description: "Orchestrated backend microservice enhancements using Spring Boot, centralizing mobile and banking metrics. Established Docker-based prototyping environments reducing feature iteration times by 50%.",
  },
  {
    id: "3",
    role: "Java Backend Developer",
    company: "Tata Consultancy Services",
    period: "May 2022 - Oct 2024",
    description: "Contributed to middleware components development integrating hospital supply chains. Optimized data-parsing workflows reducing errors by 30% and authored comprehensive REST API documentation.",
  },
  {
    id: "4",
    role: "Technical Content Engineer Intern",
    company: "HackerEarth",
    period: "Jan 2022 - May 2022",
    description: "Authored 900+ MCQs demonstrating expertise in web development and cloud topics. Focused on Front-End Development and Cloud Computing content creation.",
  },
   {
    id: "5",
    role: "Content Analyst Intern",
    company: "HackerEarth",
    period: "Aug 2021 - Dec 2021",
    description: "Conducted technical content analysis focusing on Python programming and Cloud Computing domains.",
  },
  {
    id: "6",
    role: "Web Developer Intern",
    company: "Lingo Jr",
    period: "Jul 2021 - Aug 2021",
    description: "Assisted in web development tasks using HTML and CSS, contributing to frontend interface improvements.",
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
];