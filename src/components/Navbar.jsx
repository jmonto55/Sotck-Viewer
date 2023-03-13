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
    <>
      <nav className="flex w-full max-w-screen-2xl justify-between px-8 md:px-24 py-5 m-auto text-neutral-100">
        <Link className="text-xl" to="/">
          Quantum
          <span className="font-bold">Stocks💱</span>
        </Link>
        <ul
          ref={ref2}
          className={
            `${open ? 'translate-y-0' : 'right-0 -translate-y-64'}
            ease-in-out duration-700 ${markets ? '' : 'rounded-b-lg'} fixed right-0 top-20
            w-32 flex flex-col -z-1 bg-neutral-900 justify-center items-center md:static md:translate-y-0
            md:flex-row md:w-1/5 md:justify-between md:items-center md:right-base`
          }
        >
          <li className="mb-4 md:mb-1">
            <Link onClick={toggleOpen} className="hover:text-gray-400" to="/">Home</Link>
          </li>
          <li>
            <button onClick={toggleMarkets} type="submit" className="mb-2 md:mb-0 flex cursor-pointer hover:text-gray-400">
              Markets
              <span ref={ref1} className="text-base material-symbols-outlined cursor-pointer motion-safe:animate-bounce-slow mt-1">
                expand_more
              </span>
            </button>
            <ul
              className={`flex flex-col fixed bg-neutral-800 p-2 w-32 rounded-b-lg shadow-black right-0
            ${markets ? 'translate-x-0' : 'translate-x-full opacity-0'} ease-in-out duration-700 md:mt-2`}
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
    </>
  );
};

export default Navbar;
