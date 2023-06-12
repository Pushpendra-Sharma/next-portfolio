import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import RootError from '../error';

describe('GlobalError component', () => {
  test('renders error message and reset button', () => {
    const mockReset = jest.fn();
    const mockError = new Error('Test error');

    render(<RootError error={mockError} reset={mockReset} />);

    const headingElement = screen.getByTestId('error-heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Something went wrong!');

    const buttonElement = screen.getByTestId('error-description');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Try again!');

    fireEvent.click(buttonElement);
    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
