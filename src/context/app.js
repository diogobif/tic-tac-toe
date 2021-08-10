import React, { createContext, useState, useContext } from 'react';
import { PLAYER_ONE_CHAR } from '../constants';

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [matrix, setMatrix] = useState([]);
  const [playerChar, setPlayerChar] = useState(PLAYER_ONE_CHAR);
  const [numCols, setNumCols] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [haveWinner, setHaveWinner] = useState(false);

  return (
    <AppContext.Provider value={
      { matrix, setMatrix, playerChar, setPlayerChar, numCols, setNumCols, gameStart, setGameStart, haveWinner, setHaveWinner }
    }>
      {children}
    </AppContext.Provider>
  )
}

export function UseAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error("useAppContext needs a provider");
  const { matrix, setMatrix, playerChar, setPlayerChar, numCols, setNumCols, gameStart, setGameStart, haveWinner, setHaveWinner } = appContext;
  return { matrix, setMatrix, playerChar, setPlayerChar, numCols, setNumCols, gameStart, setGameStart, haveWinner, setHaveWinner };
}