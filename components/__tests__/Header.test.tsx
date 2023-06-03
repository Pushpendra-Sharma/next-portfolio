import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders the header component', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the logo with the correct text', () => {
    render(<Header />);

    const logoElement = screen.getByText('IAmDeveloper');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the home link with the correct href', () => {
    render(<Header />);

    const homeLink = screen.getByTestId('home-link');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders the projects link with the correct href', () => {
    render(<Header />);

    const projectsLink = screen.getByTestId('projects-link');
    expect(projectsLink).toHaveAttribute('href', '/projects');
  });
});
