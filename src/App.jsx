import React from 'react';
import './App.css';
import Calci from './components/ui/calci';
import Fetcher from './components/ui/fetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <Calci />
        <Fetcher />
      </header>
    </div>
  );
}

export default App;
