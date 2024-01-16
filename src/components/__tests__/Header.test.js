import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

it('Should load a header with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });

  expect(loginButton).toBeInTheDocument();
});

it('Should render header with cart item 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText('🛒(0)');

  expect(cartItem).toBeInTheDocument();
});
