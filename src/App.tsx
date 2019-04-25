import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './Homepage';

const App: React.FC = () => {
  return (
    <Homepage
      pageHeader="Welcome to John Doe's Homepage! Enjoy your stay"
    ></Homepage>
  );
}

export default App;


