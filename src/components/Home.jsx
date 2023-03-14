import stock from '../assets/stock.svg';
import euronext from '../assets/euronext.svg';
import amex from '../assets/amex.png';

const Home = () => (
  <div className="z-10 w-screen text-white mt-20 px-10 mb-10 flex flex-col justify-center">
    <header className="max-w-screen-2xl bg-white w-full bg-opacity-10 h-48 p-2 md:p-10 rounded-lg flex justify-between items-center">
      <h2 className="animate-pulse-slow text-center md:text-2xl text-sky-500">Welcome to Quantum Stocks</h2>
      <img src={stock} alt="stock" className="mt-10 w-40 md:w-64" />
    </header>
    <section>
      <h2 className="mt-10 p-5 bg-black">Stocks by Market</h2>
      <div className="grid grid-cols-2">
        <button className="p-10 bg-neutral-900" type="button">NYSE</button>
        <button className="p-10 bg-neutral-800" type="button">NASDAQ</button>
        <button className="p-10 bg-neutral-800 flex flex-col" type="button">
          <img src={euronext} alt="euronext" className="m-auto opacity-20 w-64 animate-pulse-slow" />
          {' '}
          EURONEXT
        </button>
        <button className="p-10 bg-neutral-900" type="button">
          <img src={amex} alt="euronext" className="m-auto opacity-20 w-64 animate-pulse-slow" />
          {' '}
          AMEX
        </button>
        <button className="p-10 bg-neutral-900" type="button">TSX</button>
        <button className="p-10 bg-neutral-800" type="button">ETF</button>
      </div>
    </section>
  </div>
);

export default Home;
