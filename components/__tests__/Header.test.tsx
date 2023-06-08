import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders the header component without image and subheading', () => {
    render(
      <Header
        heading='Technologies'
        description="I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, TailwindCSS, TypeScript and Web Hosting."
      />
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    expect(screen.getByTestId('hero-heading')).toHaveTextContent(
      'Technologies'
    );

    expect(screen.getByTestId('hero-description')).toHaveTextContent(
      "I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, TailwindCSS, TypeScript and Web Hosting."
    );
  });
});
