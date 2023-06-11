import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SectionInfoT } from '@/types';
import Section from '../Section';

describe('Section component', () => {
  const sectionProps: SectionInfoT = {
    heading: 'Projects',
    info: 'These are the projects I have worked on.',
    link: {
      type: 'primary',
      label: 'See my work',
      url: '/projects',
    },
  };

  test('renders section component with correct content', () => {
    render(<Section {...sectionProps} />);

    const sectionContainer = screen.getByTestId('section-container');
    const sectionHeading = screen.getByTestId('section-heading');
    const sectionDescription = screen.getByTestId('section-description');
    const sectionLink = screen.getByTestId('section-link');

    expect(sectionContainer).toBeInTheDocument();
    expect(sectionHeading).toHaveTextContent('Projects');
    expect(sectionDescription).toHaveTextContent(
      'These are the projects I have worked on.'
    );
    expect(sectionLink).toHaveTextContent('See my work');
  });
});
