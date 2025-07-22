export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'others';
}

export interface ContactInfo {
  name: string;
  email: string;
  github?: string;
  linkedin?: string;
  blog?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar?: string;
  contactInfo: ContactInfo;
}