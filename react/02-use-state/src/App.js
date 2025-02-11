import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './components/MiPrimerEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Hooks:</h2>
        </p>
        <div className='components'>
          <MiPrimerEstado />
        </div>
      </header>
    </div>
  );
}

export default App;
