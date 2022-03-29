import React from 'react';
import styled from 'styled-components';
import Background from './background.svg';
import { Checkout } from '../organism';

const Wrapper = styled.div `
  background-image: url(${Background});
  height: 100%;
`

function Page() {
  return (
    <Wrapper>
      <Checkout />
    </Wrapper>
  )
}

export default Page;
