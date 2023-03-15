import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  const x = 0;
  return (
    <div id={x} className="App flex flex-col bg-neutral-900 min-h-screen items-center relative overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
