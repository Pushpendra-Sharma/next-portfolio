import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import NotFound from '../not-found';

describe('NotFound component', () => {
  test('renders not found message and link button', () => {
    render(<NotFound />);

    const headingElement = screen.getByTestId('not-found-heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Not Found');

    const descriptionElement = screen.getByTestId('not-found-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(
      'Could not find requested resource!'
    );

    const linkButtonElement = screen.getByTestId('link-button');
    expect(linkButtonElement).toBeInTheDocument();
    expect(linkButtonElement).toHaveTextContent('Go home');
    expect(linkButtonElement).toHaveAttribute('href', '/');
  });
});
