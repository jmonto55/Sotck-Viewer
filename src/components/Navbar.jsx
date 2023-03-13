import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [markets, setMarkets] = useState(false);
  const ref = useRef();

  const toggleMarkets = () => {
    setMarkets(!markets);
  };

  useEffect(() => {
    const handler = (event) => {
      if (markets && ref.current && !ref.current.contains(event.target)) {
        setMarkets(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [markets]);

  return (
    <>
      <nav className="flex w-full max-w-screen-2xl justify-between px-24 py-5 m-auto text-neutral-100">
        <h2 className="text-xl">
          Quantum
          <span className="font-bold">Stocks💱</span>
        </h2>
        <ul className="flex w-40 justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div type="submit" className="flex cursor-pointer">
              Markets
              <button type="button" onClick={toggleMarkets}>
                <span className="text-base material-symbols-outlined cursor-pointer">
                  expand_more
                </span>
              </button>
            </div>
            <ul
              ref={ref}
              className={`flex flex-col fixed bg-neutral-900 p-2
            ${markets ? 'translate-y-4' : '-translate-y-64'} ease-in-out duration-500`}
            >
              <Link className="mb-3" to="/market">NYSE</Link>
              <Link className="mb-3" to="/market">NASDAQ</Link>
              <Link className="mb-3" to="/market">EURONEXT</Link>
              <Link className="mb-3" to="/market">AMEX</Link>
              <Link className="mb-3" to="/market">TSX</Link>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
