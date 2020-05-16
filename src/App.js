import React from 'react';
import './App.css';
import Game from './components/Game.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <br></br>
        <Game/>

      </header>
    </div>
  );
}
