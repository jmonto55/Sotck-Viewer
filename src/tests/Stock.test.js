import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Stock from '../components/Stock';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('Test suite for Stock component', () => {
  it('Should render a Snapshot of Stock component', () => {
    const stock = render(
      <Provider store={store}>
        <MemoryRouter>
          <Stock />
        </MemoryRouter>
      </Provider>,
    );
    expect(stock).toMatchSnapshot();
  });
  it('Should test if Stocks section is being rendered', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Stock />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Price: $' && 'Market Cap: $')).toBeInTheDocument();
  });
});
