import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
import Footer from './components/Footer';

import logo from './logo.svg';
import './App.css';

const App = (props) => (
  <div className="App">
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;
