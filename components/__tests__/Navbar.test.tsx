import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders the navigation component', () => {
    render(<Navbar />);

    const NavBarElement = screen.getByTestId('navigation-bar');
    expect(NavBarElement).toBeInTheDocument();
  });

  it('renders the logo with the correct text', () => {
    render(<Navbar />);

    const logoElement = screen.getByText('IAmDeveloper');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the home link with the correct href', () => {
    render(<Navbar />);

    const homeLink = screen.getByTestId('home-link');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders the projects link with the correct href', () => {
    render(<Navbar />);

    const projectsLink = screen.getByTestId('projects-link');
    expect(projectsLink).toHaveAttribute('href', '/projects');
  });
});
