
import React from 'react';
import { Layout, Globe, Share2, Code2, Zap, Rocket, Terminal, Smartphone } from 'lucide-react';
import { type Project, type Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Automated Course Allocation',
    category: 'Full-Stack / Research',
    image: '/Screenshot 2026-05-12 115031.png',
    link: 'https://cbaas-ivory.vercel.app/',
    description: 'An intelligent system designed to automate the complex process of allocating courses to university lecturers.'
  },
  {
    id: '2',
    title: 'Landing Page for Sustainable Cleaning',
    category: 'Landing Page / Frontend',
    image: '/Screenshot 2026-02-17 161706.png',
    link: 'https://be-clean-webpage.vercel.app/',
    description: 'Building high-performance, interactive user interfaces and web applications for clients.'
  },
  {
    id: '3',
    title: 'Stylized Online Shopping Experience',
    category: 'E-Commerce',
    image: '/Screenshot 2026-02-17 162214.png',
    link: 'https://verno-peach.vercel.app/',
    description: '360° content strategy and community management for luxury brand advertising.'
  },
  {
    id: '4',
    title: 'Allocation Automation Study',
    category: ' Research',
    image: 'https://picsum.photos/seed/ai/1200/800',
    link: '/Project Report.pdf',
    downloadUrl: '/Project Report.pdf',
    fileName: 'Course_Allocation_Study.pdf',
    description: 'Deep dive into the intrinsic workings and structure of Javascript in building Mathematical Models.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Frontend Architecture',
    description: 'Building interactive UIs, constructing websites, and web apps with a focus on modern frameworks and performance.',
    icon: 'Code2'
  },
  {
    title: 'Social Media Management',
    description: 'Data-driven content creation, posting schedules, and research-backed advertising concepts.',
    icon: 'Share2'
  },
  {
    title: 'AI & Prompt Engineering',
    description: 'Exploring AI integration in web development to evaluate maintainability and isolate faults in micro-frontends.',
    icon: 'Terminal'
  },
  {
    title: 'Mobile-First PWAs',
    description: 'Specializing in Progressive Web Apps and performance evaluation in intermittent network conditions.',
    icon: 'Smartphone'
  }
];

export const ICONS: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />
};

export const SKILLS = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
  "Python", "SQL", "Prompt Engineering", "UI/UX Design", "SaaS Construction", "Music (Sight-reading)"
];
