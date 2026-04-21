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

export interface InternationalTradeData {
  title: string;
  leadLines: string[];
  wholesaleParagraphs: string[];
  oemParagraphs: string[];
  closingTitle: string;
  closingParagraphs: string[];
}

export interface FinancialServiceBlock {
  title: string;
  paragraphs: string[];
}

export interface FinancialBusinessData {
  title: string;
  leadLines: string[];
  consultingTitle: string;
  consultingSubtitle: string;
  consultingParagraphs: string[];
  serviceBlocks: FinancialServiceBlock[];
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
  rows: RecruitmentDetailRow[];
  inquiryLabel: string;
}
