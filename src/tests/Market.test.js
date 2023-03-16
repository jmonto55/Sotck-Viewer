import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Market from './__mocks__/Market';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('Test suite for Market component', () => {
  it('Should render a Snapshot of Market component', () => {
    const market = render(
      <Provider store={store}>
        <MemoryRouter>
          <Market />
        </MemoryRouter>
      </Provider>,
    );
    expect(market).toMatchSnapshot();
  });
  it('Should test if Markets section is being rendered', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Market />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('expand_less')).toBeInTheDocument();
  });
});
