import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchStocks, filterStocks } from '../redux/markets/marketsSlice';

const Market = () => {
  const dispatch = useDispatch();
  const { filteredList, isLoading, market } = useSelector((store) => store.markets);

  useEffect(() => {
    dispatch(fetchStocks(market));
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
    <div className="w-screen h-full flex max-w-screen-2xl flex-col my-20 items-center">
      <input
        type="text"
        placeholder="Filter by company name or symbol"
        className="z-20 fixed max-w-screen-2xl pt-4 w-full placeholder-shown:bg-neutral-500 p-2 focus:outline-none focus:bg-neutral-500 focus:text-white"
        onChange={(e) => dispatch(filterStocks(e.target.value))}
      />
      <ul className="z-10 w-full grid grid-cols-2 mt-16">
        {filteredList.map((stock) => (
          <li className="h-32 shadow-[0_4px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-y-105 text-center text-white p-3 flex flex-col justify-between" key={uuidv4()}>
            <span className="material-symbols-outlined text-base absolute top-4 right-4 opacity-50 hover:scale-110">
              arrow_forward_ios
            </span>
            <h2 className="text-4xl">{stock.symbol}</h2>
            <p className="text-left">
              <span>$</span>
              {stock.price || 125.0}
            </p>
            <h2 className="text-left text-sm">{stock.companyName}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
