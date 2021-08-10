import React from 'react';
import CardItem from '../../containers/CardItem';
import { Line, LineCenter } from '../../styled';
import { UseAppContext } from "../../context/app"

const Card = () => {
  const { matrix, gameStart } = UseAppContext();
  let rows = [], i = -1, matLength = 0;

  if (matrix.length) {
    matLength = matrix[0].length;
    while (++i < matLength) rows.push(matrix[i]);
  }
  
  return (
    <LineCenter>
      {
        matrix.length > 0 && gameStart && rows.map(function (row, indexX) {
          return (
            <Line key={`row_${indexX}`}>
              { row.map((item, indexY) => <CardItem key={`${indexX}${indexY}`} indexX={indexX} indexY={indexY} />) }
            </Line>
          )
        })
      }
    </LineCenter>
  )
}

export default Card;