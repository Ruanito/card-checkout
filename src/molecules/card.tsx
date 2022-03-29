import React from 'react';
import styled from 'styled-components';
import { InfoLabel, InputPlaceholder, InputTextField, Vector } from '../atoms';

const Wrapper = styled.div`
  position: absolute;
  width: 342px;
  height: 444px;
  left: 24px;
  top: 170px;
`

const Form = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  background: #FFFFFF;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
`

const InfoLabelWrapper = styled.div`
  padding: 25px 0 0 25px;
`

const InputNameWrapper = styled.div`
  position: absolute;
  width: 279px;
  height: 46px;
  left: 25px;
  top: 74px;
`

export function Card() {
  return (
    <Wrapper>
      <Form>
        <InfoLabelWrapper>
          <InfoLabel text="Enter details" />
        </InfoLabelWrapper>
        <InputNameWrapper>
          <InputPlaceholder placeholder="Name" />
          <InputTextField />
          <Vector />
        </InputNameWrapper>
      </Form>
    </Wrapper>
  )
}
