import styled from "styled-components";

export const Input = styled.input`
  background: #a4a4c4;
  font-size: 15px;
  margin: 5px;
  width: 100px;
  height: 35px;
  padding: 6px 10px;
  border: 2px solid #09f;
  border-radius: 5px;
  transition: all 0.2s ease;
  white-space: nowrap; /* Evita que el texto se divida en varias líneas */

  &:hover {
    background: #09f;
  }

  &::placeholder {
    font-weight: 540;
    color: black;
  }
`;

export const MyCard = styled.h2`
  margin-top: auto;
  font-style: italic;
  font-weight: 100;
  text-align: center;
`;

export const cardBox = styled.box`

    justify-content: center;
    padding: 20%;
    background-color: aliceblue;
    height: 500px;
    width: 500px;
`;



