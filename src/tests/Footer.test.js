import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Footer component', () => {
  it('Should render a Snapshot of Footer component', () => {
    const footer = render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
    expect(footer).toMatchSnapshot();
  });

  test('Should test if the text "Built with💙in Medellin, CO" is inside the Footer', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
    expect(screen.getByText('Built with💙in Medellin, CO')).toBeInTheDocument();
  });
});
