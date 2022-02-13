import React from 'react';

import { Footer, Blog, Possibility, Features, WhatTest, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

function App() {
  return <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatTest />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>;
}

export default App;
