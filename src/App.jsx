import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Home from './components/Home';

const App = () => {
  const x = 0;
  return (
    <div id={x} className="App flex flex-col bg-neutral-900 overflow-y-hidden h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </div>
  );
};

export default App;
