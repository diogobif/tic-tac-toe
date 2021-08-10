import React from 'react';
import { Alert } from 'react-bootstrap';
import { MessageContainer } from '../../styled';
import { UseAppContext } from '../../context/app'

const AlertMessage = () => {
  const { haveWinner, playerChar } = UseAppContext();

  return (
    <MessageContainer>
      { haveWinner && <Alert variant="success">Congratulations, {playerChar} is the winner!</Alert> }
    </MessageContainer>
  )
}

export default AlertMessage;