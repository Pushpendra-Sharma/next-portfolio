import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../loading';

describe('Loader component', () => {
  it('renders the loader', () => {
    const { getByTestId } = render(<Loading />);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
