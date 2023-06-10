export interface SectionInfoT {
  heading: string;
  info: string;
  link?: {
    label: string;
    type: 'primary' | 'secondary';
    url: string;
  };
}

export type SocialLinkT = {
  label: string;
  imageSrc: string;
  url: string;
};

export interface ProjectT {
  heading: string;
  description: string;
  time: string;
  liveLink: string;
  srcLink: string;
  type?: string;
  technologies: Array<TechnologyT>;
}

export type TechnologyT =
  | 'Atlaskit'
  | 'NextJS'
  | 'TypeScript'
  | 'TailwindCSS'
  | 'ExpressJS'
  | 'NodeJS'
  | 'JWT'
  | 'Redux Toolkit'
  | 'ReactJS'
  | 'JavaScript'
  | 'CSS3'
  | 'HTML5';

export type HeaderT = {
  heading: string;
  subHeading?: string;
  image?: string;
  description: string;
};
