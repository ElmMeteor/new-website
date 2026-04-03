export interface Project {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface RecruitmentItem {
  date: string;
  title: string;
  link: string;
}

export interface Recruitment {
  title: string;
  items: RecruitmentItem[];
}

export interface CompanyInfo {
  name: string;
  nameEn: string;
  mission: string[];
  vision: string[];
}

export interface Contact {
  title: string;
  info: string;
  phone: string;
  address: string;
  hours: string;
}

export type ServiceAlign = "left" | "right";

export interface SystemDevelopmentService {
  title: string;
  align: ServiceAlign;
  content: string[];
  highlightLast: boolean;
}

export interface SystemDevelopmentData {
  title: string;
  subtitle: string;
  mainImage: string;
  vision: string[];
  services: SystemDevelopmentService[];
}
