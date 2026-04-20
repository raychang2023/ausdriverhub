export interface FAQ {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Visa {
  code: string;
  name: string;
  shortName: string;
  description: string;
  path: string;
  features: string[];
  suitableFor: string;
}
