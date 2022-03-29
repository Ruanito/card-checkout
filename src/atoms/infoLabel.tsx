import React from 'react';
import styled from 'styled-components';

const Spam = styled.span `
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #FF9900;
`

interface Props {
  text: string;
}

export function InfoLabel(props: Props) {
  return (
    <Spam>
      {props.text}
    </Spam>
  );
}
