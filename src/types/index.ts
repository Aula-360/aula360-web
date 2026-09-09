export interface SiteConfig {
  name: string;
  email: string;
  whatsappNumber: string;
  domain: string;
  location: string;
  schedule: string;
  description: string;
}

export interface Product {
  icon: string;
  name: string;
  description: string;
  price: string;
  image: string;
  whatsappMessage: string;
}

export interface IncludeItem {
  title: string;
  description: string;
}

export interface CourseMetaItem {
  label: string;
  value: string;
}
