import styled from "styled-components";

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

export const LineItem = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  margin: 1px;
  cursor: pointer;
  height: 50px;
`;