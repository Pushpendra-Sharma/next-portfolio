import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />);

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  it('renders the LinkedIn image with the correct link', () => {
    render(<Footer />);

    const linkedinImage = screen.getByTestId('LinkedIn-image');
    expect(linkedinImage).toBeInTheDocument();

    const linkedinLink = screen.getByRole('link', {
      name: /LinkedIn/i,
    });

    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ietl-pushpendra-sharma/'
    );

    /*
    fireEvent.click(linkedinLink);

    expect(window.location.href).toBe(
      'https://www.linkedin.com/in/ietl-pushpendra-sharma/'
    );

    */
  });

  it('renders the GitHub image with the correct link', () => {
    render(<Footer />);

    const githubImage = screen.getByTestId('GitHub-image');
    expect(githubImage).toBeInTheDocument();

    const githubLink = screen.getByRole('link', {
      name: /GitHub/i,
    });

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/Pushpendra-Sharma'
    );

    /*
    fireEvent.click(githubLink);

    expect(window.location.href).toBe('https://github.com/Pushpendra-Sharma');
    */
  });

  it('renders the Twitter image with the correct link', () => {
    render(<Footer />);

    const twitterImage = screen.getByTestId('Twitter-image');
    expect(twitterImage).toBeInTheDocument();

    const twitterLink = screen.getByRole('link', {
      name: /Twitter/i,
    });

    expect(twitterLink).toHaveAttribute(
      'href',
      'https://twitter.com/https://twitter.com/ietl_pushpendra'
    );

    /*
    fireEvent.click(twitterLink);

    expect(window.location.href).toBe(
      'https://twitter.com/https://twitter.com/ietl_pushpendra'
    );
    */
  });
});
