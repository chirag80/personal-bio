export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: 'code' | 'brain' | 'cloud' | 'server';
}

export interface CertificationItem {
  name: string;
  issuer: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'linkedin' | 'github' | 'mail';
}
