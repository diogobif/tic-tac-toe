import styled from "styled-components";
import { PLAYER_ONE_CHAR, PLAYER_TWO_CHAR } from '../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  flex-wrap: nowrap;
`;


export const LineCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;
  margin-bottom: 10px;

  button {
    width: 100% !important;
  }
`;

const getColor = (content) => {
  return content ===  PLAYER_ONE_CHAR ? '00f' : (content ===  PLAYER_TWO_CHAR ? 'f00' : '000')
}

export const LineItem = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border: 2px solid #${(props) => getColor(props.content)};
  margin: 1px;
  cursor: pointer;
  height: 50px;
`;