import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineStock } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { fetchStocks, filterStocks, selectStock } from '../redux/markets/marketsSlice';

const Market = () => {
  const dispatch = useDispatch();
  const { filteredList, isLoading, market } = useSelector((store) => store.markets);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(fetchStocks(market));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch, market]);

  if (isLoading) {
    return (
      <div className="opacity-50 w-screen h-screen flex flex-col justify-center items-center">
        <div className="animate-spin border-8 border-t-transparent mb-10 border-white w-24 h-24 rounded-full" />
        <h1 className="text-xl text-white animate-ping">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="relative w-screen h-full flex max-w-screen-2xl flex-col my-20 items-center">
      <button onClick={handleScrollToTop} type="button" className="animate-bounce-slow hover:opacity-50 shadow-[0_4px_8px_rgba(0,0,0,0.5)] bg-neutral-800 z-20 text-white dark:text-neutral-900 flex w-12 h-12 fixed bottom-3 right-3 rounded-full dark:bg-neutral-300">
        <span className="m-auto material-symbols-outlined">
          expand_less
        </span>
      </button>
      <header className="m-auto mt-6 max-w-screen-2xl bg-white w-full bg-opacity-10 h-48 p-2 md:py-10 md:pt-14 lg:pr-24 rounded-t-lg flex justify-evenly items-center relative dark:bg-neutral-300 dark:bg-opacity-40">
        <Link to="/" className="text-white dark:text-neutral-900 material-symbols-outlined text-xl cursor-pointer absolute top-4 left-4 md:top-6 md:left-6 opacity-50 hover:scale-110">
          arrow_back_ios
        </Link>
        <h2 className={`animate-pulse-slow text-center w-1/2 ${market === 'EURONEXT' || market === 'NASDAQ' ? 'text-4xl' : 'text-6xl'} md:text-6xl text-white dark:text-neutral-900`}>{market}</h2>
        <AiOutlineStock size={200} className="text-neutral-100 dark:text-neutral-800 animate-pulse-slow" />
      </header>
      <input
        type="text"
        placeholder="Filter by company name or symbol"
        className="py-3 z-20 max-w-screen-2xl pt-4 w-full placeholder-shown:bg-neutral-500 p-2 focus:outline-none focus:bg-neutral-500 focus:text-white dark:text-neutral-900 dark:placeholder-neutral-900 dark:placeholder-shown:bg-neutral-300 dark:focus:bg-neutral-300"
        onChange={(e) => dispatch(filterStocks(e.target.value))}
      />
      <ul className="z-10 w-full grid grid-cols-2">
        {filteredList.map((stock) => (
          <Link
            to="/stock"
            className="relative h-32 shadow-[0_4px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-y-105 text-center text-white p-3 flex flex-col justify-between dark:text-neutral-700"
            key={uuidv4()}
            onClick={() => dispatch(selectStock(stock))}
          >
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <h2 className="text-4xl">{stock.symbol}</h2>
            <p className="text-left">
              <span>$</span>
              {stock.price || 125.0}
            </p>
            <h2 className="text-left text-sm">{stock.companyName}</h2>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Market;
