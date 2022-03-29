import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 17px;

  border: none;
  border-width: 0;
  box-shadow: none;

  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  text-transform: uppercase;
  
  color: #000000;
`

export function InputTextField() {
  return (
    <><Input type="text" /></>
  )
}
