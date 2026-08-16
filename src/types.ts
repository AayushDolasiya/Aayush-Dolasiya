export interface CaseStudy {
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
  alt: string;
  background: string;
  isReverse: boolean;
  caseStudy: CaseStudy;
  projectUrl?: string;
  githubUrl?: string;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface TechItem {
  name: string;
  level: number; // 1-100 or rating
  iconName: string;
  description: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}
