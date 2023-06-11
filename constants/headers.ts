import heroImage from '@/images/hero.svg';
import { HeaderT } from '@/types';

export const headers: Record<string, HeaderT> = {
  aboutMe: {
    heading: 'Hi, I am ',
    subHeading: 'Pushpendra',
    description:
      'I am a Frontend Developer with experience working at Infosys as a React Developer and currently employed at Revyz as a Software Engineer. I am passionate about creating engaging user interfaces and delivering high-quality web applications.',
    image: heroImage,
  },
  projects: {
    heading: 'see my ',
    subHeading: 'code',
    description:
      'These are the projects I have worked on, showcasing my expertise in frontend development and my ability to create impactful user experiences. From responsive web designs to interactive user interfaces. Feel free to explore my code! I welcome your feedback and suggestions as well.',
  },
};
