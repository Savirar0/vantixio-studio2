export interface ServiceItem {
  title: string;
  items: string[];
}

export interface MasteryItem {
  title: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description?: string;
  highlight?: boolean;
  link?: string;
  imageUrl?: string;
}

export interface ClientCategory {
  name: string;
}

export interface NavItem {
  label: string;
  path: string;
}