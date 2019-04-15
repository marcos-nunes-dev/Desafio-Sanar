import React from 'react';
import styled from 'styled-components';
import CheckIcon from '../../static/icons/checked.svg';
import DocumentsIcon from '../../static/icons/documentos.svg';
import PdfIcon from '../../static/icons/pdf.svg';
import QuestionsIcons from '../../static/icons/questoes.svg';
import VideosIcon from '../../static/icons/videos.svg';
import { ButtonRed } from '../common/Buttons';

const HeaderWrapper = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  background: #030619;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ::after {
    content: '';
    background: url('../../static/img/bgsobre.jpg') no-repeat top center fixed /
      cover;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }
`;

const HeaderInfo = styled.div`
  z-index: 1;
  color: #fff;
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const TitleWrapper = styled.div`
  width: 50%;
  h1 {
    font-size: 3vw;
    color: #fff;
    font-weight: 300;
    font-family: 'Fira Sans', sans-serif;
    margin-top: 15px;
    line-height: 50px;
  }
  p {
    font-family: 'Fira Sans', sans-serif;
    max-width: 40vw;
    margin: 0 auto;
  }
  p:last-child {
    font-family: 'Fira Sans', sans-serif;
    margin: 0 auto;
    font-weight: 300;
    line-height: 20px;
    color: #bfbfbf;
  }
`;

const PromotedContent = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
`;

const IframeWrapper = styled.div`
  iframe {
    width: 340px;
    height: 190px;
    border-radius: 4px;
  }
`;

const PromotedInfo = styled.div`
  text-align: center;
  h1 {
    font-size: 30px;
    font-weight: 500;
    color: #4d5457;
  }
  h1 span {
    font-size: 18px;
    font-weight: 300;
  }
  h2 {
    color: #4d5457;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 25px;
  }
  h2 svg {
    width: 20px;
    height: 20px;
    fill: #3ab859 !important;
  }
`;

const MoreIconsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin-top: 40px;
`;

const MoreIconsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 13px;
  font-weight: 300;
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    margin-bottom: 10px;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderInfo>
        <TitleWrapper>
          <p>SOBRE O CURSO</p>
          <h1>Raciocínio Clínico Baseado em Problemas</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
          <MoreIconsContent>
            <MoreIconsItem>
              <VideosIcon /> Vídeos <span>107</span>
            </MoreIconsItem>
            <MoreIconsItem>
              <PdfIcon /> Leitura <span>15</span>
            </MoreIconsItem>
            <MoreIconsItem>
              <DocumentsIcon /> Documentos <span>2</span>
            </MoreIconsItem>
            <MoreIconsItem>
              <QuestionsIcons /> Questões <span>6</span>
            </MoreIconsItem>
          </MoreIconsContent>
        </TitleWrapper>
        <PromotedContent>
          <IframeWrapper>
            <iframe
              src="https://www.youtube.com/embed/AJ0P2joRyEk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </IframeWrapper>
          <PromotedInfo>
            <h1>
              R$ 24,90 <span>/mês</span>
            </h1>
            <h2>
              <CheckIcon /> Cancele quando quiser!
            </h2>
            <ButtonRed text="Assine Agora" />
          </PromotedInfo>
        </PromotedContent>
      </HeaderInfo>
    </HeaderWrapper>
  );
}
