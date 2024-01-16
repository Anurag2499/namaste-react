import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us page test case', () => {
  test('Should load contact page or not', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  test('Should load button on contact component', () => {
    render(<Contact />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('Should load input name inside contact component', () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText('name');

    expect(inputName).toBeInTheDocument();
  });

  test('Should load all input name inside contact component', () => {
    render(<Contact />);

    const inputs = screen.getAllByRole('textbox');
    console.log(inputs);

    expect(inputs.length).toBe(2);
  });
});
