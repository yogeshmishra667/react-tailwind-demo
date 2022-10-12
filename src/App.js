import React from 'react';
import About from './components/about';
import Hero from './components/hero';
import Navbar from './components/Navbar';
import Support from './components/support';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
    </div>
  );
};

export default App;
