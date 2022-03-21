import React from 'react';
import Page from './page';
import styled from 'styled-components';

const Wrapper = styled.div `
  height: 100%;
`

function App() {
  return (
    <Wrapper>
      <Page />
    </Wrapper>
  );
}

export default App;
