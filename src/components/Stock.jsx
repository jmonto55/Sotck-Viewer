import { useSelector } from 'react-redux';

const Stock = () => {
  const { stock } = useSelector((store) => store.markets);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        {stock.symbol}
      </div>
    </div>
  );
};

export default Stock;
