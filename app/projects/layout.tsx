import React from 'react';

import { Header } from '@/components';
import { headers } from '@/constants/headers';

export const metadata = {
  title: 'Pushpendra Sharma | Projects',
  description:
    'Explore my frontend projects and showcase of my skills in JavaScript, React, and web development.',
  keywords:
    'frontend developer, JavaScript, React, web development, HTML5, CSS3',
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
      className='flex flex-col items-center justify-between p-24'
      data-testid='projects-layout'
    >
      <Header {...projectsHeader} />
      {children}
    </main>
  );
}
