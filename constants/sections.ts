import { SectionInfoT } from '@/types';

export const sectionInfo: Array<SectionInfoT> = [
  {
    heading: 'Technologies',
    info: "I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, TailwindCSS, TypeScript and Web Hosting.",
  },
  {
    heading: 'Projects',
    info: 'I like to showcase my work and thus, you can see my projects hosted   online.',
    link: {
      label: 'See Projects',
      type: 'primary',
      url: 'projects',
    },
  },
  {
    heading: 'Get In Touch',
    info: 'Thanks for your visit. . .',
    link: {
      label: 'CONTACT ME',
      type: 'secondary',
      url: 'mailto:pushpendrasharma400@gmail.com',
    },
  },
];
