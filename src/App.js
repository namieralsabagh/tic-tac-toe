import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(1)
  const [counter, setCounter] = useState(0)
  
  let newSquares = [...squares] 

  const handleGame = (index) => {

    
    if (calculateWinner(squares) === "X") {
      alert("Winner is Player One")
      return
    } else if (calculateWinner(squares) === "O") {
      alert("Winner is Player Two")
      return
    }

    
    if(counter === squares.length) {
      alert("Game Over")
    }

      
      if (player === 1) {
        if (newSquares[index] === "X") {
          alert("You have already marked this square")
        } else if (newSquares[index] === "O") {
          alert(`Player ${player + 1} already marked this square`)
        } else {
          newSquares[index] = "X"
          setSquares(newSquares)
          setCounter(counter + 1)
          setPlayer(2)
        }
      }
     
      if (player === 2) {
        if (newSquares[index] === "O") {
          alert("You have already marked this square")
        } else if (newSquares[index] === "X") {
          alert(`Player ${player - 1} already marked this square`)
        } else {
          newSquares[index] = "O"
          setSquares(newSquares)
          setCounter(counter+1)
          setPlayer(1)
        }
      }

  }
    
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
    
    const handleReset = () => {
      setPlayer(1)
      setCounter(0)
      setSquares(squares.fill(null))
    }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) => {
        return (
          <Square handleGame={handleGame} value={value} index={index}/>
        )
      })}
      </div>
    <p>Player: {player}</p>
    <div className="button">
    <button onClick ={handleReset}>Reset</button> 
    </div>
    </>
  )
}

export default App
