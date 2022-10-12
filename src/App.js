import React from 'react';
import About from './components/about';
import Hero from './components/hero';
import Navbar from './components/Navbar';
import Support from './components/support';
import AllInOne from './components/allinone';
import Pricing from './components/pricing';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
    </div>
  );
};

export default App;
