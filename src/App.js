import React from 'react';
import About from './components/about';
import Hero from './components/hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
