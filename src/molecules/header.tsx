import React from 'react';
import styled from 'styled-components';
import { TitleText } from '../atoms';

const Wrapper = styled.div `
  position: absolute;
  width: 205px;
  height: 34px;
  left: 93px;
  top: 88px;
`

export function Header() {
  return(
    <Wrapper>
      <TitleText title="Add new card" />
    </Wrapper>
  )
}
