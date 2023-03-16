import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('Test suite for Home component', () => {
  it('Should render a Snapshot of Home component', () => {
    const footer = render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
    expect(footer).toMatchSnapshot();
  });
  it('Should test if the welcome message is being rendered', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Stocks by Market')).toBeInTheDocument();
  });

  it('Should test if the market links are being rendered', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    const etfLink = screen.getByText(/etf/i);
    expect(etfLink).toBeInTheDocument();

    const nyseLink = screen.getByText(/nyse/i);
    expect(nyseLink).toBeInTheDocument();

    const euronextLink = screen.getByText(/euronext/i);
    expect(euronextLink).toBeInTheDocument();

    const amexLink = screen.getByText(/amex/i);
    expect(amexLink).toBeInTheDocument();

    const tsxLink = screen.getByText(/tsx/i);
    expect(tsxLink).toBeInTheDocument();

    const nasdaqLink = screen.getByText(/nasdaq/i);
    expect(nasdaqLink).toBeInTheDocument();
  });

  it('Should dispatch the selectMarket action when a link is clicked', () => {
    const selectMarketMock = jest.fn();
    store.dispatch = selectMarketMock;

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    const etfLink = screen.getByText(/etf/i);
    fireEvent.click(etfLink);
    expect(selectMarketMock).toHaveBeenCalledWith({ payload: 'ETF', type: 'markets/selectMarket' });

    const nyseLink = screen.getByText(/nyse/i);
    fireEvent.click(nyseLink);
    expect(selectMarketMock).toHaveBeenCalledWith({ payload: 'NYSE', type: 'markets/selectMarket' });

    const euronextLink = screen.getByText(/euronext/i);
    fireEvent.click(euronextLink);
    expect(selectMarketMock).toHaveBeenCalledWith({ payload: 'EURONEXT', type: 'markets/selectMarket' });

    const amexLink = screen.getByText(/amex/i);
    fireEvent.click(amexLink);
    expect(selectMarketMock).toHaveBeenCalledWith({ payload: 'AMEX', type: 'markets/selectMarket' });

    const tsxLink = screen.getByText(/tsx/i);
    fireEvent.click(tsxLink);
    expect(selectMarketMock).toHaveBeenCalledWith({ payload: 'TSX', type: 'markets/selectMarket' });

    const nasdaqLink = screen.getByText(/nasdaq/i);
    fireEvent.click(nasdaqLink);
    expect(selectMarketMock).toHaveBeenCalledWith({ payload: 'NASDAQ', type: 'markets/selectMarket' });
  });
});
