import React from 'react';
import styled from 'styled-components';

const ElementsWrapper = styled.div`
  max-width: 100%;
`;

export default function MainWrapper(props) {
  return (
    <ElementsWrapper>
      {props.children}
    </ElementsWrapper>
  )
}
