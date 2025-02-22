export interface Topic {
  title: string;
  description: string;
  icon: string;
  href: string;
  sections?: TopicSection[];
}

export interface TopicSection {
  title: string;
  content: string;
  commands?: string[];
  examples?: string[];
} 