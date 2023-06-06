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

export type ProjectT = {
  heading: string;
  description: string;
  time: string;
  liveLink: string;
  srcLink: string;
};
