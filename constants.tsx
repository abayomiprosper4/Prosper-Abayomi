
import React from 'react';
import { Layout, Globe, Share2, Code2, Zap, Rocket, Terminal, Smartphone } from 'lucide-react';
import { type Project, type Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Automated Course Allocation',
    category: 'Full-Stack / Research',
    image: 'https://picsum.photos/seed/course/1200/800',
    link: '#',
    description: 'An intelligent system designed to automate the complex process of allocating courses to university lecturers.'
  },
  {
    id: '2',
    title: 'NITHub Interactive UI',
    category: 'Frontend Engineering',
    image: 'https://picsum.photos/seed/nithub/1200/800',
    link: '#',
    description: 'Building high-performance, interactive user interfaces and web applications for NITDA Hub.'
  },
  {
    id: '3',
    title: 'Vanilla Concierge Strategy',
    category: 'Social Media Management',
    image: 'https://picsum.photos/seed/vanilla/1200/800',
    link: '#',
    description: '360° content strategy and community management for luxury brand advertising.'
  },
  {
    id: '4',
    title: 'Prompt Engineering Study',
    category: 'AI Research',
    image: 'https://picsum.photos/seed/ai/1200/800',
    link: '#',
    description: 'Deep dive into the intrinsic workings and structure of prompt engineering for LLMs.'
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
