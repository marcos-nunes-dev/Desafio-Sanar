import React from 'react';
import styled from 'styled-components';

const RedDefaultButton = styled.div`
  background: #e62e2e;
  padding: ${props => (props.block ? '10px 40px' : '10px 20px')};
  width: ${props => (props.block ? '100%' : 'initial')};
  font-size: 13px;
  border-radius: 100px;
  -webkit-box-shadow: 0px 0px 22px 1px rgba(230, 46, 46, 0.42);
  -moz-box-shadow: 0px 0px 22px 1px rgba(230, 46, 46, 0.42);
  box-shadow: 0px 0px 22px 1px rgba(230, 46, 46, 0.42);

  :hover{
    cursor: pointer;
  }
`;

const WhiteBorderedButton = styled.div`
  background: transparent;
  padding: ${props => (props.block ? '10px 40px' : '10px 20px')};
  width: ${props => (props.block ? '100%' : 'initial')};
  border: 1px solid #fff;
  font-size: 13px;
  border-radius: 100px;

  :hover {
    cursor: pointer;
  }
`;

export function ButtonRed(props) {
  return (
    <RedDefaultButton block={props.block}>
      {props.text ? props.text : 'props.text'}
    </RedDefaultButton>
  )
}

export function ButtonWhiteBordered(props) {
  return (
    <WhiteBorderedButton block={props.block}>
      {props.text ? props.text : 'props.text'}
    </WhiteBorderedButton>
  )
}
