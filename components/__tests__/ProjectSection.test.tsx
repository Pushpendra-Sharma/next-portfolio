import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ProjectSection from '../ProjectSection';
import { projectsArray } from '@/constants/projects';

describe('ProjectSection component', () => {
  const projectProps = projectsArray[0];

  test('renders project section component with correct content', () => {
    render(<ProjectSection {...projectProps} />);

    const projectContainer = screen.getByTestId('project-container');
    const projectHeading = screen.getByTestId('project-heading');
    const projectTime = screen.getByTestId('project-time');
    const projectDescription = screen.getByTestId('project-description');
    const projectTechnologies = screen.getByTestId('project-technologies');
    const projectLinks = screen.getByTestId('project-links');
    const projectGithubLink = screen.getByText('View Source');
    const projectLiveLink = screen.getByText('Live Project');

    expect(projectContainer).toBeInTheDocument();
    expect(projectHeading).toHaveTextContent(projectProps.heading);
    expect(projectTime).toHaveTextContent(projectProps.time);
    expect(projectDescription).toHaveTextContent(projectProps.description);
    expect(projectTechnologies).toBeInTheDocument();
    expect(projectLinks).toBeInTheDocument();
    expect(projectGithubLink).toHaveAttribute('href', projectProps.srcLink);
    expect(projectGithubLink).toHaveAttribute('target', '_blank');
    expect(projectLiveLink).toHaveAttribute('href', projectProps.liveLink);
    expect(projectLiveLink).toHaveAttribute('target', '_blank');
  });
});
