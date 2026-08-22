export type NavItem = {
  label: string;
  href: string;
};

export type GlanceItem = {
  k: string;
  v: string;
};

export type Module = {
  meta: string;
  title: string;
  detail: string;
};

export type Audience = {
  who: string;
  why: string;
};

export type PricingTier = {
  tier: string;
  price: string;
  note: string;
  features: string[];
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type Service = {
  id: string;
  code: string;
  name: string;
  duration: string;
  priceFrom: string;
  kicker: string;
  blurb: string;
  tools: string[];
  hero: string;
  sub: string;
  overview: string;
  overviewLong: string;
  outcomes: string[];
  structureKicker: string;
  structureTitle: string;
  modules: Module[];
  audience: Audience[];
  pricingTitle: string;
  pricing: PricingTier[];
  faqs: ServiceFaq[];
  finalCta: string;
  finalCtaSub: string;
  isKids?: boolean;
  ctaLabel: string;
};

export type CurriculumModule = {
  key: string;
  label: string;
  weeks: string;
  title: string;
  detail: string;
  tools: string[];
  outcomes: string[];
};

export type Post = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageNote: string;
};

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  program: string;
  before: string;
  after: string;
  quote: string;
};

export type ArticleBlock = {
  isHeading?: boolean;
  isParagraph?: boolean;
  isQuote?: boolean;
  isCode?: boolean;
  isImage?: boolean;
  text: string;
  caption?: string;
};

export type CaseStudy = {
  id: string;
  category: string;
  title: string;
  client: string;
  program: string;
  summary: string;
  challenge: string;
  approach: string;
  tools: string[];
  results: { label: string; value: string }[];
  imageNote: string;
};

export type Article = {

  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  body: ArticleBlock[];
};
