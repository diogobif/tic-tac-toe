import React, { useCallback } from 'react';
import { Container, LineCenter } from '../../styled';
import { initializeMatrix } from '../../utils';
import { PLAYER_ONE_CHAR } from '../../constants'
import { UseAppContext } from '../../context/app';
import Card from '../../components/Card';
import ColsForm from '../ColsForm';
import AlertMessage from '../../components/AlertMessage';

const App = () => {
  const { 
    setMatrix, setPlayerChar, numCols, setHaveWinner, setGameStart
  } = UseAppContext();

  const startNewGame = useCallback(() => {
    setMatrix(initializeMatrix(numCols));
    setHaveWinner(false);
    setPlayerChar(PLAYER_ONE_CHAR);
    setGameStart(true);
  }, [numCols, setMatrix, setHaveWinner, setPlayerChar, setGameStart]);

  return (
      <Container>
        <AlertMessage />
        <ColsForm startNewGame={startNewGame} />
        <LineCenter>
          <Card />
        </LineCenter>
      </Container>
  )
}

export default App;
