import React from 'react';
import styled from 'styled-components';
import Background from './background.svg';
import { Header } from '../molecules';

const Wrapper = styled.div `
  background-image: url(${Background});
  height: 100%;
`

function Page() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default Page;
