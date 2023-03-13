import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [markets, setMarkets] = useState(false);
  const [open, setOpen] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  const toggleMarkets = () => {
    setMarkets(!markets);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handler = (event) => {
      if (markets && ref1.current && !ref1.current.contains(event.target)) {
        setMarkets(false);
      }
      if (open && ref2.current && !ref2.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [open, markets]);

  return (
    <div className="flex justify-center">
      <nav className="z-20 bg-neutral-900 fixed flex w-full max-w-screen-2xl justify-between px-8 md:px-24 py-5 m-auto text-neutral-100">
        <Link className="text-xl md:text-2xl" to="/">
          Quantum
          <span className="font-bold">Stocks💱</span>
        </Link>
        <ul
          ref={ref2}
          className={
            `${open ? '-translate-y-2.5' : 'right-0 -translate-y-64'} bg-neutral-900 md:text-xl
            ease-in-out duration-700 ${markets ? '' : 'rounded-b-lg'} fixed right-0 top-20
            w-32 flex flex-col justify-between items-center md:static md:translate-y-0
            md:flex-row md:w-48 md:justify-between md:items-center md:right-base shadow-lg shadow-black md:shadow-transparent`
          }
        >
          <li className="mb-4 md:mb-0">
            <Link onClick={toggleOpen} className="hover:text-gray-400" to="/">Home</Link>
          </li>
          <li>
            <button onClick={toggleMarkets} type="submit" className="mb-4 md:mb-0 flex cursor-pointer hover:text-gray-400">
              Markets
              <span ref={ref1} className="text-base material-symbols-outlined cursor-pointer motion-safe:animate-bounce-slow mt-1">
                expand_more
              </span>
            </button>
            <ul
              className={`flex flex-col fixed shadow-5xl p-2 w-32 rounded-b-lg right-0 bg-neutral-800
            ${markets ? 'translate-x-0 -translate-y-2' : 'translate-x-full opacity-0'} ease-in-out duration-700 md:mt-2
            backdrop-filter backdrop-blur-sm shadow-lg shadow-black`}
            >
              <Link onClick={toggleOpen} className="mb-3 border-b hover:text-gray-400" to="/market">NYSE</Link>
              <Link onClick={toggleOpen} className="mb-3 border-b hover:text-gray-400" to="/market">NASDAQ</Link>
              <Link onClick={toggleOpen} className="mb-3 border-b hover:text-gray-400" to="/market">EURONEXT</Link>
              <Link onClick={toggleOpen} className="mb-3 border-b hover:text-gray-400" to="/market">AMEX</Link>
              <Link onClick={toggleOpen} className="mb-1 hover:text-gray-400" to="/market">TSX</Link>
            </ul>
          </li>
        </ul>
        {open && (
        <button onClick={toggleOpen} type="button" className="z-10 md:hidden">
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
        )}
        {!open && (
        <button onClick={toggleOpen} type="button" className="z-10 md:hidden">
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
