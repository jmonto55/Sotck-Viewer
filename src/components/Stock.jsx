import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Stock = () => {
  const { stock } = useSelector((store) => store.markets);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-screen max-w-screen-2xl h-screen relative">
      <div className="m-auto w-3/4 h-3/4 flex">
        <div className="animate-pulse-mid z-10 h-80 w-80 md:h-96 md:w-96 bg-gradient-to-r from-neutral-400 to-neutral-900 rounded-full absolute right-20 top-0" />
        <div className="pt-8 text-center flex flex-col items-center justify-evenly z-20 p-5 m-auto h-5/6 w-5/6 min-w-full bg-white bg-opacity-10 text-white rounded-2xl shadow-5xl border-2 border-b-0 border-r-0 border-white/25 backdrop-filter backdrop-blur-sm">
          <Link to="/market" className="material-symbols-outlined text-xl cursor-pointer absolute top-4 left-4 md:top-6 md:left-6 opacity-50 hover:scale-110">
            arrow_back_ios
          </Link>
          <h2 className="text-2xl">{stock.companyName}</h2>
          <p className="text-2xl">{`Symbol: ${stock.symbol}`}</p>
          <p className="text-2xl">
            <span>Price: $</span>
            {stock.price || 125.0}
          </p>
          <p className="text-2xl">
            <span>Sector: </span>
            {stock.sector || 'Financial Services'}

          </p>
          <p className="text-2xl">
            <span>Industry: </span>
            {stock.industry || 'Banks—Diversified'}

          </p>
          <p className="text-2xl">
            <span>Market Cap: $ </span>
            {stock.marketCap || 1258953640}
          </p>
        </div>
        <div className="animate-pulse-mid z-10 h-80 w-80 md:h-96 md:w-96 bg-gradient-to-r from-neutral-900 to-neutral-300 rounded-full absolute left-20 bottom-6" />
      </div>
    </div>
  );
};

export default Stock;
