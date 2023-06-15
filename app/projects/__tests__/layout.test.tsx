import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ProjectsLayout from '../layout';

describe('project page layout', () => {
  test('renders projects layout component with correct content', () => {
    render(
      <ProjectsLayout>
        <div>Mock projects</div>
      </ProjectsLayout>
    );

    const projectsContainer = screen.getByTestId('projects-layout');

    expect(projectsContainer).toBeInTheDocument();

    const childrenComponent = screen.getByText('Mock projects');
    expect(childrenComponent).toBeInTheDocument();
  });
});
