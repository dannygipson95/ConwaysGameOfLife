import React from 'react';
import logo from './logo.svg';
import {SideBySide, GameBox} from './styles.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Conway's Game of Life</h1>
      </header>
      <SideBySide>
        <GameBox>
        Grid
        </GameBox>
        <ul>
          <h1>Presets</h1>
          <li>Preset 1</li>
          <li>Preset 2</li>
          <li>Preset 3</li>
          <li>Preset 4</li>
        </ul>
        <div>
          <h1>Rules</h1>
          <ul>
            <li>Rule 1</li>
            <li>Rule 2</li>
            <li>Rule 3</li>
          </ul>
        </div>
      </SideBySide>
      <h2>About the Game</h2>
      <p>Mollit cupidatat cillum eiusmod in aute sunt ipsum ut duis non dolor nisi aliquip. Laborum ipsum consequat sunt laboris tempor excepteur id sint ullamco officia excepteur sunt. Consectetur ad amet incididunt duis exercitation cupidatat voluptate irure.</p>
    </div>
  );
}

export default App;
