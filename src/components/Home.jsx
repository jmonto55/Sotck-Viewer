import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMarket } from '../redux/markets/marketsSlice';
import stock from '../assets/stock.svg';
import euronext from '../assets/euronext.svg';
import amex from '../assets/amex.png';
import nyse from '../assets/nyse.svg';
import nasdaq from '../assets/nasdaq.svg';
import tsx from '../assets/tsx.svg';
import etf from '../assets/etf.svg';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="z-10 w-screen text-white mt-24 px-5 mb-10 flex flex-col justify-center">
      <header className="m-auto max-w-screen-2xl bg-white w-full bg-opacity-10 h-48 p-2 md:p-10 rounded-lg flex justify-between items-center">
        <h2 className="animate-pulse-slow text-center md:text-2xl text-white">Welcome to Quantum Stocks</h2>
        <img src={stock} alt="stock" className="animate-pulse-slow mt-10 w-40 md:w-64" />
      </header>
      <section className="m-auto w-full max-w-screen-2xl">
        <h2 className="mt-5 p-5 bg-black rounded-t-lg opacity-70">Stocks by Market</h2>
        <div className="grid grid-cols-2">
          <Link
            to="/market"
            className="relative p-10 bg-neutral-900 h-40 flex flex-col justify-center items-center hover:opacity-60"
            type="button"
            onClick={() => dispatch(selectMarket('ETF'))}
          >
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <img src={etf} alt="euronext" className="m-auto opacity-20 w-64 h-28 animate-pulse-slow" />
            {' '}
            ETF
          </Link>
          <Link
            to="/market"
            className="relative p-10 bg-neutral-800 h-40 flex flex-col justify-center items-center hover:opacity-60"
            type="button"
            onClick={() => dispatch(selectMarket('NYSE'))}
          >
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <img src={nyse} alt="euronext" className="m-auto opacity-20 w-64 h-28 animate-pulse-slow" />
            {' '}
            NYSE
          </Link>
          <Link
            to="/market"
            className="relative p-10 bg-neutral-800 h-40 flex flex-col justify-center items-center hover:opacity-60"
            type="button"
            onClick={() => dispatch(selectMarket('EURONEXT'))}
          >
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <img src={euronext} alt="euronext" className="m-auto opacity-20 w-64 h-28 animate-pulse-slow" />
            {' '}
            EURONEXT
          </Link>
          <Link
            to="/market"
            className="relative p-10 bg-neutral-900 h-40 flex flex-col justify-center items-center hover:opacity-60"
            type="button"
            onClick={() => dispatch(selectMarket('AMEX'))}
          >
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <img src={amex} alt="euronext" className="m-auto opacity-60 h-28 animate-pulse-slow" />
            {' '}
            AMEX
          </Link>
          <Link
            to="/market"
            className="relative p-10 bg-neutral-900 h-40 flex flex-col justify-center items-center hover:opacity-60"
            type="button"
            onClick={() => dispatch(selectMarket('TSX'))}
          >
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <img src={tsx} alt="euronext" className="m-auto opacity-20 h-20 md:h-28 w-64 animate-pulse-slow" />
            {' '}
            TSX
          </Link>
          <Link
            to="/market"
            className="relative p-10 bg-neutral-800 h-40 flex flex-col justify-center items-center hover:opacity-60"
            type="button"
            onClick={() => dispatch(selectMarket('NASDAQ'))}
          >
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <img src={nasdaq} alt="euronext" className="m-auto opacity-20 w-64 h-28 animate-pulse-slow" />
            {' '}
            NASDAQ
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Home;
