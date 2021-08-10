import React from 'react';
import { UseAppContext } from '../../context/app';
import { LineItem } from '../../styled';
import { findMatch } from '../../utils';
import { PLAYER_ONE_CHAR, PLAYER_TWO_CHAR } from '../../constants';

const CardItem = ({ indexX, indexY }) => {
  const { matrix, setMatrix, playerChar, setHaveWinner, setPlayerChar } = UseAppContext();
  
  const handleClick = () => {
    if (!matrix[indexX][indexY]) {
      let matCopy = matrix;
      matCopy[indexX][indexY] = playerChar;
      setMatrix(matCopy);

      if (findMatch(matCopy, playerChar)) {
        setHaveWinner(true);
      } else {
        setPlayerChar(playerChar === PLAYER_ONE_CHAR ? PLAYER_TWO_CHAR : PLAYER_ONE_CHAR);
      }
    }
  }

  return (
    <LineItem 
      content={matrix[indexX][indexY]} 
      key={`row_${indexX}`} 
      onClick={() => handleClick()}
    >
      { <span>{ matrix[indexX][indexY] }</span> }
    </LineItem>
  )
}

export default CardItem