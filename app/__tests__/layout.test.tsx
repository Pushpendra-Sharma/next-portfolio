import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from '../layout';

describe('RootLayout', () => {
  it('renders the navbar and footer', () => {
    const { getByTestId } = render(<RootLayout>App loaded</RootLayout>);

    const navbarElement = getByTestId('navigation-bar');
    const footerElement = getByTestId('footer');

    expect(navbarElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});
