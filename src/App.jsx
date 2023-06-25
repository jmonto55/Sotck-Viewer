import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Home from './components/Home';
import Footer from './components/Footer';
import Stock from './components/Stock';

const App = () => {
  const x = 0;
  return (
    <div id={x} className="flex flex-col bg-neutral-900 dark:bg-slate-100 min-h-screen items-center relative overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
