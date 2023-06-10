import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

describe('page', () => {
  it('renders main content', () => {
    render(<Home />);

    const mainElement = screen.getByTestId('main-content');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders header inside main content', () => {
    render(<Home />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('renders differnet sections inside main content', () => {
    render(<Home />);

    const sections = screen.getAllByTestId('section-container');
    expect(sections.length).toEqual(3);
  });
});
