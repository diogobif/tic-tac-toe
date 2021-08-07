import React from 'react';
import { Line, LineItem, LineCenter } from '../styled';

const Card = ({ matrix, updateMatrix }) => {
  const matLength = matrix[0].length;
  let rows = [], i = -1;
  while (++i < matLength) rows.push(matrix[i]);
  
  return (
    <LineCenter>
      {
        rows.map(function (row, index) {
          return (
            <Line key={`row_${index}`}>
              {
                row.map((item, indexRow) => {
                  return (
                    <LineItem key={`row_${indexRow}`} onClick={() => !matrix[index][indexRow] ? updateMatrix(index, indexRow) : null}>
                      <span>{ matrix[index][indexRow] }</span>
                    </LineItem>
                  )
                })
              }
            </Line>
          )
        })
      }
    </LineCenter>
  )
}

export default Card;