import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { ButtonRed } from './Buttons';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { updateLoginModalState } from '../../ducks/sanarflix';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #181d35e0;
  color: #fff;
  z-index: 2;
`;

const LogoWrapper = styled.div`
  width: 15vw;
  padding: 0 20px;
  img {
    max-width: 100px;
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
  span:hover {
    cursor: pointer;
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

class Menu extends Component {
  handleCancel = e => {
    this.props.updateLoginModalState();
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Modal
          title="Basic Modal"
          maskClosable
          closable
          onCancel={this.handleCancel}
          footer={null}
          visible={this.props.loginModalState}
        >
          asd
        </Modal>
        <MainWrapper>
          <LogoWrapper>
            <img src="../../static/img/logo.png" />
          </LogoWrapper>
          <MenuWrapper>
            <span onClick={() => Router.push('/')}>Início</span>
            <span onClick={() => Router.push('/sobre')}>Sobre o Sanarflix</span>
            <span>Perguntas frequentes</span>
          </MenuWrapper>
          <ActionsMenu>
            <SearchBarHolder>
              <SearchBar />
            </SearchBarHolder>
            <AcessButton>
              <div
                onClick={() => {
                  this.props.updateLoginModalState();
                }}
              >
                Entrar
              </div>
            </AcessButton>
            <ButtonRed text="Assine" />
          </ActionsMenu>
        </MainWrapper>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginModalState: state.sanarflixReducer.loginModalState,
  };
}

const mapDispatchToProps = {
  updateLoginModalState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
