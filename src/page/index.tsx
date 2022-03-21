import React from 'react';
import styled from 'styled-components';
import Background from './background.svg';

const Wrapper = styled.div `
  background-image: url(${Background});
  height: 100%;
`

function Page() {
  return (
    <Wrapper />
  )
}

export default Page;
