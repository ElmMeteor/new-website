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

export interface InternationalTradeData {
  title: string;
  leadLines: string[];
  wholesaleTitle: string;
  wholesaleParagraphs: string[];
  oemTitle: string;
  oemParagraphs: string[];
  oemSupplyTitle: string;
  oemSupplyParagraphs: string[];
  supportMessage: string;
  closingTitle: string;
  closingParagraphs: string[];
}

export type FinancialServiceAlign = "left" | "right";

export interface FinancialServiceBlock {
  title: string;
  paragraphs: string[];
  align: FinancialServiceAlign;
}

export interface FinancialBusinessData {
  title: string;
  leadLines: string[];
  consultingTitle: string;
  consultingSubtitle: string;
  consultingParagraphs: string[];
  serviceBlocks: FinancialServiceBlock[];
}

export type RecyclingSectionAlign = "left" | "right";

export interface RecyclingSection {
  title: string;
  paragraphs: string[];
  align: RecyclingSectionAlign;
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
