export interface Project {
  title: string;
  englishTitle?: string;
  description: string;
  lead?: string;
  items?: string[];
  image: string;
  reverse?: boolean;
  link?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Contact {
  title: string;
  info: string;
  phone: string;
  address: string;
  hours: string;
}

export interface SystemDevelopmentService {
  title: string;
  content: string[];
  highlightLast: boolean;
}

export interface SystemDevelopmentData {
  title: string;
  vision: string[];
  services: SystemDevelopmentService[];
}

export interface ItDxSupportService {
  title: string;
  description: string;
}

export interface ItDxSupportData {
  title: string;
  englishTitle: string;
  lead: string;
  introduction: string;
  services: ItDxSupportService[];
  closing: string;
}

export interface InternationalTradeData {
  title: string;
  leadLines: string[];
  wholesaleParagraphs: string[];
  oemParagraphs: string[];
  closingTitle: string;
  closingParagraphs: string[];
}

export interface RecyclingSection {
  title: string;
  paragraphs: string[];
}

export interface RecyclingBusinessData {
  title: string;
  leadLines: string[];
  mainTitle: string;
  sections: RecyclingSection[];
  closingTitle: string;
  closingParagraphs: string[];
}

export interface RecruitmentDetailRow {
  label: string;
  values: string[];
}

export interface RecruitmentPageData {
  title: string;
  noticeTitle: string;
  noticeLines: string[];
  categories?: string[];
  rows: RecruitmentDetailRow[];
  inquiryLabel: string;
}
