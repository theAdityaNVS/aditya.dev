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
    title: "Nexus - API Marketplace",
    description: "A full-stack platform for developers to sell and monetize APIs. Built with Next.js 14, implementing Stripe Connect for payouts and Kong for API gateway management. Features real-time usage analytics.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Kong API", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    featured: true,
    githubUrl: "https://github.com/",
    demoUrl: "#"
  },
  {
    id: "2",
    title: "StreamVibe - Live Streaming",
    description: "Interactive video streaming application leveraging WebRTC for sub-second latency. Supports RTMP ingestion via Node.js Media Server and HLS playback. Includes chat functionality powered by WebSocket.",
    tags: ["React", "Node.js", "WebRTC", "FFmpeg", "Socket.io"],
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    featured: true,
    githubUrl: "https://github.com/",
    demoUrl: "#"
  },
  {
    id: "3",
    title: "CodeSync - Collaborative Editor",
    description: "Real-time collaborative code editor supporting 20+ languages. Uses CRDTs (Yjs) for conflict resolution and Monaco Editor. Deployed on AWS Fargate with Redis for session state management.",
    tags: ["React", "Yjs", "Monaco", "AWS Fargate", "Redis"],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    featured: false,
    githubUrl: "https://github.com/"
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Full Stack Developer",
    company: "JPMorgan Chase & Co.",
    period: "Oct 2025 - Present",
    description: "Specializing in building scalable enterprise applications using Spring Boot, React, and microservices architecture. Leveraging Amazon Web Services (AWS) and React.js to drive digital innovation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/JPMorgan_Chase_logo_2008.svg/1200px-JPMorgan_Chase_logo_2008.svg.png"
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Tata Consultancy Services",
    period: "Nov 2024 - Sep 2025",
    description: "Orchestrated backend microservice enhancements using Spring Boot, centralizing mobile and banking metrics. Established Docker-based prototyping environments reducing feature iteration times by 50%.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png"
  },
  {
    id: "3",
    role: "Java Backend Developer",
    company: "Tata Consultancy Services",
    period: "May 2022 - Oct 2024",
    description: "Contributed to middleware components development integrating hospital supply chains. Optimized data-parsing workflows reducing errors by 30% and authored comprehensive REST API documentation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png"
  },
  {
    id: "4",
    role: "Technical Content Engineer Intern",
    company: "HackerEarth",
    period: "Jan 2022 - May 2022",
    description: "Authored 900+ MCQs demonstrating expertise in web development and cloud topics. Focused on Front-End Development and Cloud Computing content creation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/600px-HackerEarth_logo.png"
  },
   {
    id: "5",
    role: "Content Analyst Intern",
    company: "HackerEarth",
    period: "Aug 2021 - Dec 2021",
    description: "Conducted technical content analysis focusing on Python programming and Cloud Computing domains.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/HackerEarth_logo.png/600px-HackerEarth_logo.png"
  },
  {
    id: "6",
    role: "Web Developer Intern",
    company: "Lingo Jr",
    period: "Jul 2021 - Aug 2021",
    description: "Assisted in web development tasks using HTML and CSS, contributing to frontend interface improvements.",
    logo: "https://ui-avatars.com/api/?name=Lingo+Jr&background=efefef&color=333&size=200"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
];