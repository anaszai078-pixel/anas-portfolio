export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  description: string;
  iconName: string;
  tag: string;
  accentColor: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  level: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  issueDate: string;
  credentialId?: string;
  description: string;
  modules: string[];
}
