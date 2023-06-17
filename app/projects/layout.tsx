import React from 'react';

import { Header } from '@/components';
import { headers } from '@/constants/headers';

export const metadata = {
  title: 'Pushpendra Sharma | Projects',
  description:
    'Explore my frontend projects and showcase of my skills in JavaScript, React, and Web development.',
  keywords:
    'Frontend Developer, JavaScript, React, Web development, HTML5, CSS3',
  author: 'Pushpendra Sharma',
  twitter: {
    card: 'summary',
    site: '@ietl_pushpendra',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectsHeader = headers['projects'];

  return (
    <main
      className='flex flex-col items-center justify-between mt-12 p-0 sm:px-16 md:px-24 '
      data-testid='projects-layout'
    >
      <Header {...projectsHeader} />
      {children}
    </main>
  );
}
