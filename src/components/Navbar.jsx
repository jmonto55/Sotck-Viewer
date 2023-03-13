import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => ( 
  <>
    <nav className="flex w-full max-w-screen-2xl justify-between px-10 py-5 m-auto text-neutral-100">
      <h2 className="text-xl">
        Quantum
        <span className="font-bold">Stocks💱</span>
      </h2>
      <ul className="flex w-40 justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <h2 className="flex">
            Markets
            <span className="text-base material-symbols-outlined cursor-pointer">
              expand_more
            </span>
          </h2>
          <ul className="flex flex-col fixed bg-neutral-900">
            <Link to="/market">NYSE</Link>
            <Link to="/market">NASDAQ</Link>
            <Link to="/market">EURONEXT</Link>
            <Link to="/market">AMEX</Link>
            <Link to="/market">TSX</Link>
          </ul>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
