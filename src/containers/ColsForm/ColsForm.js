import React from 'react';
import { LineCenter } from '../../styled';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { UseAppContext } from "../../context/app"

const ColsForm = ({ startNewGame }) => {
  const { setNumCols, numCols, gameStart, haveWinner,  } = UseAppContext()
  return (
    <>
      <LineCenter>
        <Form.Label htmlFor="cols">Columns:</Form.Label>
        <InputGroup className="mb-3">
          <FormControl 
            type="number" 
            disabled={gameStart} 
            onChange={(e) => setNumCols(e.target.value)} 
            value={ numCols || '' }
            id="cols" />
        </InputGroup>
      </LineCenter>

      <LineCenter>
        <div className="d-grid gap-2">
            <Button 
              disabled={!numCols} 
              variant={gameStart ? (haveWinner ? 'success' : 'danger') : 'success'} 
              onClick={() => startNewGame()} 
              size="lg"
            >
              { gameStart ? (haveWinner ? 'Start new game' : 'Finish current game') : 'Start new game' }
            </Button>
        </div>
      </LineCenter>
    </>

  )
}

export default ColsForm;