import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import LinkButton from '../LinkButton';

test('renders link button component with correct content', () => {
  render(<LinkButton btnType='primary' label='Projects' url='/projects' />);

  const linkButton = screen.getByTestId('link-button');

  expect(linkButton).toBeInTheDocument();
  expect(linkButton).toHaveTextContent('Projects');
  expect(linkButton).toHaveAttribute('href', '/projects');
});
