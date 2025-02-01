export interface DevelopmentPath {
  id: string;
  title: string;
  description: string;
  whatTheyDo: string;
  technologies: string[];
  languages: string[];
  sections: PathSection[];
}

export interface PathSection {
  title: string;
  description: string;
  technologies: string[];
  details: string;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  description: string;
  purpose: string;
  features: string[];
  syntax: string;
  pros: string[];
  cons: string[];
  resources: Resource[];
}

export interface Resource {
  title: string;
  url: string;
  description: string;
}

export interface MenuItem {
  title: string;
  path: string;
  icon: string;
}