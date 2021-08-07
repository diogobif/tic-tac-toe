import React, { useEffect, useState } from 'react';
import { Container, LineCenter } from './components/styled';
import { Button, Form, InputGroup, FormControl, Alert } from 'react-bootstrap'
import { initializeMatrix, findMatch } from './utils';
import Card from './components/Card';

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [haveWinner, setHaveWinner] = useState(false);
  const [draw, setDraw] = useState(false);
  const [cols, setCols] = useState(0);
  const [matrix, setMatrix] = useState({values: []});
  const [playerIcon, setPlayerIcon] = useState('X');
  const [counter, setCounter] = useState(0);

  function startNewGame() {
    setMatrix({values: initializeMatrix(cols)});
    setDraw(false);
    setHaveWinner(false);
    setPlayerIcon('X');
    setCounter(0);
    setGameStart(true);
  }

  useEffect(() => {
    if (cols) {
      if (counter === cols * cols) {
        setDraw(true);
      }
    }
  }, [counter, cols])

  function updateMatrix(coordX, coordY) {
    if (!haveWinner) {
      let matCopy = matrix.values;
      matCopy[coordX][coordY] = playerIcon;
      const winner = findMatch(matCopy, playerIcon);

      if (winner) {
        setHaveWinner(true);
      } else {
        setPlayerIcon(playerIcon === 'X' ? 'O' : 'X');
      }
      setMatrix({values: matCopy});
    }
  }

  return (
    <Container>
      { haveWinner && <LineCenter><Alert variant="success">Congratulations, {playerIcon} is the winner!</Alert></LineCenter> }
      { draw && <LineCenter><Alert variant="warning">It's a draw!</Alert></LineCenter> }
      
      <LineCenter>
        <Form.Label htmlFor="cols">Columns:</Form.Label>
        <InputGroup className="mb-3">
          <FormControl 
            type="number" 
            disabled={gameStart} 
            onChange={(e) => setCols(e.target.value)} 
            id="cols" />
        </InputGroup>
      </LineCenter>
      
      <LineCenter>
        { gameStart && matrix.values.length ? <Card matrix={matrix.values} updateMatrix={(coordx, coordY) => updateMatrix(coordx, coordY)} /> : null }
      </LineCenter>

      <LineCenter>
        <div className="d-grid gap-2">
            <Button disabled={!cols} variant={gameStart ? (haveWinner || draw ? 'success' : 'danger') : 'success'} onClick={() => startNewGame()} size="lg">
              { gameStart ? (haveWinner || draw ? 'Start new game' : 'Finish current game') : 'Start new game' }
            </Button>
        </div>
      </LineCenter>
    </Container>
  )
}

export default App;
