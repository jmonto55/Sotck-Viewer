import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { selectMarket } from '../redux/markets/marketsSlice';

const Navbar = () => {
  const [markets, setMarkets] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const ref1 = useRef();
  const ref2 = useRef();
  const dispatch = useDispatch();

  const toggleMarkets = () => {
    setMarkets(!markets);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const changeMarket = (market) => {
    dispatch(selectMarket(market));
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

  const toggleTheme = () => {
    const htmlElement = document.querySelector('html');
    setDark(!dark);
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
    } else {
      htmlElement.classList.add('dark');
    }
  };

  return (
    <div className="flex justify-center">
      <nav className="shadow z-30 bg-neutral-900 dark:bg-slate-100 dark:text-slate-900 fixed flex w-full max-w-screen-2xl justify-between px-8 md:px-24 py-7 m-auto text-neutral-100">
        <Link className="mt-2 text-xl md:text-2xl" to="/">
          Quantum
          <span className="font-bold">Stocks💱</span>
        </Link>
        <div className="mt-1 flex justify-end w-full items-center pr-5">
          <MdDarkMode onClick={toggleTheme} className={`cursor-pointer text-lg ${!dark ? 'hidden' : 'block'}`} />
          <MdLightMode onClick={toggleTheme} className={`cursor-pointer text-lg ${dark ? 'hidden' : 'block'}`} />
        </div>
        <ul
          ref={ref2}
          className={
            `md:min-w-[160px] backdrop-filter backdrop-blur-md ${open ? '-translate-y-2.5' : 'right-0 -translate-y-64'} md:text-xl
            ease-in-out duration-700 ${markets ? '' : 'rounded-b-lg'} fixed right-0 top-20
            w-32 flex flex-col justify-between items-center md:static md:translate-y-0
            md:flex-row md:w-48 md:justify-between md:items-center md:right-base shadow md:shadow-transparent dark:opacity-90 dark:md:bg-slate-100`
          }
        >
          <li className="mb-4 md:mb-0">
            <Link onClick={toggleOpen} className="hover:text-gray-400 dark:hover:text-neutral-800" to="/">Home</Link>
          </li>
          <li>
            <button onClick={toggleMarkets} type="submit" className="mb-4 md:mb-0 flex cursor-pointer hover:text-gray-400 dark:hover:text-neutral-800">
              Markets
              <span ref={ref1} className="text-base material-symbols-outlined cursor-pointer motion-safe:animate-bounce-slow mt-1">
                expand_more
              </span>
            </button>
            <ul
              className={`mt-2 flex flex-col fixed shadow-5xl p-2 w-32 rounded-b-lg right-0 bg-neutral-800 dark:bg-slate-100 dark:bg-opacity-90
            ${markets ? 'translate-x-0 -translate-y-2' : 'translate-x-full opacity-0'} ease-in-out duration-700 md:mt-2
            shadow-lg`}
            >
              <Link onClick={() => changeMarket('ETF')} className="mb-3 border-b hover:text-gray-400 dark:hover:text-neutral-700" to="/market">ETF</Link>
              <Link onClick={() => changeMarket('NYSE')} className="mb-3 border-b hover:text-gray-400 dark:hover:text-neutral-700" to="/market">NYSE</Link>
              <Link onClick={() => changeMarket('EURONEXT')} className="mb-3 border-b hover:text-gray-400 dark:hover:text-neutral-700" to="/market">EURONEXT</Link>
              <Link onClick={() => changeMarket('AMEX')} className="mb-3 border-b hover:text-gray-400 dark:hover:text-neutral-700" to="/market">AMEX</Link>
              <Link onClick={() => changeMarket('TSX')} className="mb-3 border-b hover:text-gray-400 dark:hover:text-neutral-700" to="/market">TSX</Link>
              <Link onClick={() => changeMarket('NASDAQ')} className="mb-1 hover:text-gray-400 dark:hover:text-neutral-700" to="/market">NASDAQ</Link>
            </ul>
          </li>
        </ul>
        {open && (
        <button onClick={toggleOpen} type="button" className="mt-2 z-10 md:hidden">
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
        )}
        {!open && (
        <button onClick={toggleOpen} type="button" className="z-10 md:hidden">
          <span className="material-symbols-outlined mt-2">
            menu
          </span>
        </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
