import React from 'react';
import logo from './logo.svg';
import {SideBySide, GameBox, CellBox, Title} from './styles.js';
import './App.css';

class Cell{
  constructor(row, column){
  this.row = row;
  this.column = column;
  this.id = `c${this.row}:${this.column}`
  this.alive = false;
  }
}

const rows = [];
for (let i = 0; i < 30; i++){
  const newRow = [];
  for (let j = 0; j < 30; j++){
    newRow.push(new Cell(i, j))
  }
  rows.push(newRow)  
}
console.log(rows);

function App() {
  return (
    <div className="App">
      <Title>
        <h1>Conway's Game of Life</h1>
      </Title>
      <SideBySide>
        <div>
          <button>Start</button>
          <button>Stop</button>
          <GameBox>
          {rows.map(row=>{
            return(row.map(cell=>{
              return(
                <CellBox id={cell.id}></CellBox>
              )
            }))
          })}
          </GameBox>
        </div>
        <div>
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
        </div>
      </SideBySide>
      <h2>About the Game</h2>
      <p>Mollit cupidatat cillum eiusmod in aute sunt ipsum ut duis non dolor nisi aliquip. Laborum ipsum consequat sunt laboris tempor excepteur id sint ullamco officia excepteur sunt. Consectetur ad amet incididunt duis exercitation cupidatat voluptate irure.</p>
    </div>
  );
}

export default App;
