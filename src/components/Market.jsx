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
      <div className="w-screen h-screen mt-20">
        <h1 className="text-9xl text-white">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="w-screen h-full my-20">
      <input
        type="text"
        placeholder="Filter by company name or symbol"
        className="w-full placeholder-shown:bg-neutral-500 p-2 focus:outline-none focus:bg-neutral-500 focus:text-white"
        onChange={(e) => dispatch(filterStocks(e.target.value))}
      />
      <ul className="grid grid-cols-2">
        {filteredList.map((stock) => (
          <li className="text-white bg-every-1st-child" key={uuidv4()}>
            <h2>{stock.companyName}</h2>
            <h2 className="text-4xl">{stock.symbol}</h2>
            <p>
              <span>$</span>
              {stock.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
