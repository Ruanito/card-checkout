import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  width: 100%;
  
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: rgba(0, 0, 0, 0.25);
`

interface Props {
  placeholder: string;
}

export function InputPlaceholder(props: Props) {
  return (
    <Span>{props.placeholder}</Span>
  )
}
