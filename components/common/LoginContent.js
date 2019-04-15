import React from 'react';
import styled from 'styled-components';
import { Icon, Input } from 'antd';
import { connect } from 'react-redux';
import { updateLoginState, updateLoginModalState } from '../../ducks/sanarflix';

const MainWrapper = styled.div`
 
`;

const TitleWrapper = styled.div`
  h1 {
    color: #484f52;
    text-align: center;
    margin-bottom: 0;
    margin-top: 30px;
  }
  h2 {
    color: #484f52;
    text-align: center;
    font-weight: 300;
    margin-bottom: 30px;
    margin-top: 0;
  }
`;

const FieldsWrapper = styled.div`
  .ant-input-group-wrapper{
    margin-bottom: 10px;
  }
`;

const ActionsWrapper = styled.div`

`
const ButtonLogin = styled.div`
  background: #e62e2e;
  border-radius: 100px;
  -webkit-box-shadow: 0px 0px 22px 1px rgba(230,46,46,0.42);
  -moz-box-shadow: 0px 0px 22px 1px rgba(230,46,46,0.42);
  box-shadow: 0px 0px 22px 1px rgba(230,46,46,0.42);
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  padding: 10px 20px;
  margin-top: 30px;
  :hover{
    cursor: pointer;
  }
`;

const DontHaveAccount = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 20px;
  width: 70%;
  span {
    text-decoration: underline;
  }
  :hover {
    cursor: pointer;
  }
`;

function LoginContent(props) {
  
  function handleLogin(){
    props.updateLoginState();
    props.updateLoginModalState();
  }

  return (
    <MainWrapper>
      <TitleWrapper>
        <h1>Bem-vindo(a) a Sanarflix!</h1>
        <h2>Digite suas credenciais abaixo para acessar</h2>
      </TitleWrapper>
      <FieldsWrapper>
        <Input
          size="large"
          addonBefore={<Icon type="user" />}
          placeholder="Digite seu Usuário..."
        />
        <Input.Password
          addonBefore={<Icon type="key" />}
          size="large"
          placeholder="Digite sua Senha..."
        />
      </FieldsWrapper>
      <ActionsWrapper>
        <ButtonLogin onClick={()=>{handleLogin()}}>Acessar</ButtonLogin>
        <DontHaveAccount>
          Você ainda não é cadastro? <span>Clique aqui</span> e crie sua conta no Sanarflix agora mesmo!
        </DontHaveAccount>
      </ActionsWrapper>
    </MainWrapper>
  );
}

function mapStateToProps(state) {
  return {
    userIsLoggedIn: state.sanarflixReducer.userIsLoggedIn,
  };
}

const mapDispatchToProps = {
  updateLoginState,
  updateLoginModalState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContent);
