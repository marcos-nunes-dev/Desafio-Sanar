import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { ButtonRed } from './Buttons';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { updateLoginModalState, updateLoginState } from '../../ducks/sanarflix';
import LoginContent from '../common/LoginContent';
import { notification } from 'antd';

const openNotificationWithIcon = (type, title, desc) => {
  notification[type]({
    message: title,
    description: desc,
  });
};

notification.config({
  placement: 'topRight',
  top: 100,
  duration: 5,
});

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
  transition: all 1s ease;

  :hover {
    cursor: pointer;
  }
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: url('../../static/img/useravatar.jpg') no-repeat center center /
    cover;
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
          <LoginContent />
        </Modal>
        <MainWrapper>
          <LogoWrapper>
            <img src="../../static/img/logo.png" />
          </LogoWrapper>
          <MenuWrapper>
            <span onClick={() => Router.push('/')}>Início</span>
            <span onClick={() => Router.push('/sobre')}>
              Sobre o Sanarflix
            </span>
            <span>Perguntas frequentes</span>
            <span onClick={() => Router.push('/curso')}>
              Página de Curso
            </span>
          </MenuWrapper>
          <ActionsMenu>
            <SearchBarHolder>
              <SearchBar />
            </SearchBarHolder>
            {this.props.userIsLoggedIn ? (
              <AcessButton>
                <div
                  onClick={() => {
                    this.props.updateLoginState(),
                      openNotificationWithIcon('info', 'Usuário Deslogado', 'Seu usuário foi deslogado com sucesso!');
                  }}
                >
                  Logout
                </div>
              </AcessButton>
            ) : (
              <AcessButton>
                <div
                  onClick={() => {
                      this.props.updateLoginModalState();
                  }}
                >
                  Entrar
                </div>
              </AcessButton>
            )}
            {this.props.userIsLoggedIn ? (
              <UserAvatar />
            ) : (
              <ButtonRed text="Assine" />
            )}
          </ActionsMenu>
        </MainWrapper>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginModalState: state.sanarflixReducer.loginModalState,
    userIsLoggedIn: state.sanarflixReducer.userIsLoggedIn,
  };
}

const mapDispatchToProps = {
  updateLoginModalState,
  updateLoginState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
