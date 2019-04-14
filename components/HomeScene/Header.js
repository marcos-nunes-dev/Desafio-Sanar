import React from 'react';
import styled from 'styled-components';
import { ButtonRed, ButtonWhiteBordered } from '../common/Buttons';

const HeaderWrapper = styled.div`
  height: 75vh;
  width: 100%;
  position: relative;
  background: #0b1131;
  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: '';
    background: url('../../static/img/header.png')no-repeat top center fixed / cover;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`;

const HeaderInfo = styled.div`
  z-index: 2;
  color: #fff;
  text-align: center;
  max-width: 65vw;  
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  h1 {
    font-size: 3vw;
    color: #fff;
    font-family: 'Fira Sans', sans-serif;
  }
  p {
    font-family: 'Fira Sans', sans-serif;
    max-width: 40vw;
    margin: 0 auto;
  }
`;

const ButtonsInfoHolder = styled.div`
  width: 60%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  div{
    margin: 0 10px;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderInfo>
        <TitleWrapper>
          <h1>Todos os caminhos levam ao Sanarflix!</h1>
          <p>
            Aprenda com professores refêrencia na área de medicina. Acelere seu
            aprendizado tendo acesso a plataforma em qualquer lugar, em diversos
            dispositivos, Aprenda o que é importante para realização dos seus
            objetivos.
          </p>
        </TitleWrapper>
        <ButtonsInfoHolder>
          <ButtonRed block text="Assine Agora" />
          <ButtonWhiteBordered block text="Conheça Nossos Cursos" />
        </ButtonsInfoHolder>
      </HeaderInfo>
    </HeaderWrapper>
  );
}
