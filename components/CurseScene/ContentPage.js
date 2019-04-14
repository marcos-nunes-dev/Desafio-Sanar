import React, { Component } from 'react';
import styled from 'styled-components';
import CheckIcon from '../../static/icons/checked.svg';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

const ContentWrapper = styled.div`
  width: 70%;
  padding: 0 10%;
  margin-top: 50px;
`;

const TextAboutWrapper = styled.div`
  color: #656e70;
  line-height: 24px;
  font-size: 19px;
  margin-top: 60px;
  p {
    margin-bottom: 40px;
  }
`;

const BoxInfo = styled.div`
  background: #f0faf2;
  border: 1px solid #ccf2d4;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  span {
    width: 90%;
  }
`;

const BoxIconHolder = styled.div`
  width: 2.5%;
  height: 100%;
  margin-right: 10px;
  svg {
    width: 100%;
    fill: #43a25f;
  }
`;

const CollapseWrapper = styled.div`
  margin-top: 30px;
`;

const InsidePanel = styled.div`
  padding: 15px;
`;

export default class ContentPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <TextAboutWrapper>
          <h1>O que você vai aprender</h1>
          <BoxInfo>
            <BoxIconHolder>
              <CheckIcon />
            </BoxIconHolder>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </span>
          </BoxInfo>
          <BoxInfo>
            <BoxIconHolder>
              <CheckIcon />
            </BoxIconHolder>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </BoxInfo>
          <BoxInfo>
            <BoxIconHolder>
              <CheckIcon />
            </BoxIconHolder>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </BoxInfo>
        </TextAboutWrapper>
        <TextAboutWrapper>
          <h1>Conteúdo do Curso</h1>
          <CollapseWrapper>
            <Collapse defaultActiveKey={['0']}>
              {this.props.data &&
                this.props.data.map(
                  (item, index) =>
                    index !== 0 && (
                      <Panel header={item.nome} key={index}>
                        <InsidePanel>
                          <ul>
                            {item.conteudos &&
                              item.conteudos.map(conteudo => {
                                <li>{conteudo.id}</li>;
                              })}
                          </ul>
                        </InsidePanel>
                      </Panel>
                    )
                )}
            </Collapse>
          </CollapseWrapper>
        </TextAboutWrapper>
      </ContentWrapper>
    );
  }
}
