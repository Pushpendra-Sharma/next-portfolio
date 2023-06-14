import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';

import { projectsArray } from '@/constants/projects';
import Projects from '../page';

describe('Projects page', () => {
  test('renders project sections for each project', () => {
    render(<Projects />);

    const projectSections = screen.getAllByTestId('project-container');

    expect(projectSections.length).toBe(projectsArray.length);

    projectSections.forEach((section, index) => {
      const project = projectsArray[index];

      const headingElement = within(section).getByTestId('project-heading');
      expect(headingElement).toHaveTextContent(project.heading);

      const descriptionElement = within(section).getByTestId(
        'project-description'
      );
      expect(descriptionElement).toHaveTextContent(project.description);
    });
  });
});
