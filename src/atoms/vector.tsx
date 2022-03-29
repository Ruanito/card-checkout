import React from 'react';
import styled from 'styled-components';

const VectorBorder = styled.div `
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.7);
`

export function Vector() {
  return (
    <><VectorBorder /></>
  )
}
