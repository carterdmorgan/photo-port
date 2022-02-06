import ContactForm from '..';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]

afterEach(cleanup);

describe('ContactForm', () => {
  it('renders', () => {
    render(<ContactForm/>);
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm/>);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('header tag', () => {
    it('has content', () => {
      const { getByTestId } = render(<ContactForm/>);
      expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    })
  });

  describe('submit button', () => {
    it('has content', () => {
      const { getByTestId } = render(<ContactForm/>);
      expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    })
  });
});
