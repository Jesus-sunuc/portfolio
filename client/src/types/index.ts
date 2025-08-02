// Common types used throughout the portfolio

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  liveDemo: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  period: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuickLink {
  name: string;
  href: string;
}
