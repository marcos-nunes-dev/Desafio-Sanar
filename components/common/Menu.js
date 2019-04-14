import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { ButtonRed } from './Buttons';

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background: #181d35;
  color: #fff;
`;

const LogoWrapper = styled.div`
  width: 10vw;
  padding: 0 20px;
  img {
    max-width: 130px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40vw;
  span {
    margin-right: 30px;
    font-weight: 400;
    font-size: 13px;
  }
`;

const ActionsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  padding: 0 20px;
`;

const AcessButton = styled.div`
  padding: 20px 40px;
  color: #fff;
  font-weight: 400;
  font-size: 13px;

  :hover {
    cursor: pointer;
  }
`;

const SearchBarHolder = styled.div`
  flex: 1;
`;

export default class Menu extends Component {
  render() {
    return (
      <MainWrapper>
        <LogoWrapper>
          <img src="../../static/img/logo.png" />
        </LogoWrapper>
        <MenuWrapper>
          <span>Início</span>
          <span>Sobre o Sanarflix</span>
          <span>Perguntas frequentes</span>
        </MenuWrapper>
        <ActionsMenu>
          <SearchBarHolder>
            <SearchBar />
          </SearchBarHolder>
          <AcessButton>Entrar</AcessButton>
          <ButtonRed text="Assine" />
        </ActionsMenu>
      </MainWrapper>
    );
  }
}
