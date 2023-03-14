import stock from '../assets/stock.svg';
import euronext from '../assets/euronext.svg';
import amex from '../assets/amex.png';
import nyse from '../assets/nyse.svg';
import nasdaq from '../assets/nasdaq.svg';
import tsx from '../assets/tsx.svg';
import etf from '../assets/etf.svg';

const Home = () => (
  <div className="z-10 w-screen text-white mt-20 px-10 mb-10 flex flex-col justify-center">
    <header className="m-auto max-w-screen-2xl bg-white w-full bg-opacity-10 h-48 p-2 md:p-10 rounded-lg flex justify-between items-center">
      <h2 className="animate-pulse-slow text-center md:text-2xl text-white">Welcome to Quantum Stocks</h2>
      <img src={stock} alt="stock" className="animate-pulse-slow mt-10 w-40 md:w-64" />
    </header>
    <section className="m-auto w-full max-w-screen-2xl">
      <h2 className="mt-10 p-5 bg-black">Stocks by Market</h2>
      <div className="grid grid-cols-2">
        <button className="relative p-10 bg-neutral-900 h-40 flex flex-col justify-center items-center hover:opacity-60" type="button">
          <span className="material-symbols-outlined absolute top-4 right-4 opacity-50 hover:scale-110">arrow_circle_right</span>
          <img src={etf} alt="euronext" className="m-auto opacity-20 h-28 w-64 animate-pulse-slow" />
          {' '}
          ETF
        </button>
        <button className="relative p-10 bg-neutral-800 h-40 flex flex-col justify-center items-center hover:opacity-60" type="button">
          <span className="material-symbols-outlined absolute top-4 right-4 opacity-50 hover:scale-110">arrow_circle_right</span>
          <img src={nyse} alt="euronext" className="m-auto opacity-20 w-64 h-28 animate-pulse-slow" />
          {' '}
          NYSE
        </button>
        <button className="relative p-10 bg-neutral-800 h-40 flex flex-col justify-center items-center hover:opacity-60" type="button">
          <span className="material-symbols-outlined absolute top-4 right-4 opacity-50 hover:scale-110">arrow_circle_right</span>
          <img src={euronext} alt="euronext" className="m-auto opacity-20 w-64 h-28 animate-pulse-slow" />
          {' '}
          EURONEXT
        </button>
        <button className="relative p-10 bg-neutral-900 h-40 flex flex-col justify-center items-center hover:opacity-60" type="button">
          <span className="material-symbols-outlined absolute top-4 right-4 opacity-50 hover:scale-110">arrow_circle_right</span>
          <img src={amex} alt="euronext" className="m-auto opacity-20 w-64 h-28 animate-pulse-slow" />
          {' '}
          AMEX
        </button>
        <button className="relative p-10 bg-neutral-900 h-40 flex flex-col justify-center items-center hover:opacity-60" type="button">
          <span className="material-symbols-outlined absolute top-4 right-4 opacity-50 hover:scale-110">arrow_circle_right</span>
          <img src={tsx} alt="euronext" className="m-auto opacity-20 h-28 w-64 animate-pulse-slow" />
          {' '}
          TSX
        </button>
        <button className="relative p-10 bg-neutral-800 h-40 flex flex-col justify-center items-center hover:opacity-60" type="button">
          <span className="material-symbols-outlined absolute top-4 right-4 opacity-50 hover:scale-110">arrow_circle_right</span>
          <img src={nasdaq} alt="euronext" className="m-auto h-28 w-64 animate-pulse-slow" />
          {' '}
          NASDAQ
        </button>
      </div>
    </section>
  </div>
);

export default Home;
