import React from 'react';
import styled from 'styled-components';

const Spam = styled.span `
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-align: center;

  color: #FFFFFF;
`

interface Props {
  title: string;
}

export function TitleText(props: Props) {
  return(
    <Spam>{props.title}</Spam>
  )
}
