import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 55vh;
  width: 100%;
  position: relative;
  background: #030619;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15%;

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
    font-weight: 300;
    font-family: 'Fira Sans', sans-serif;
  }
  p {
    font-family: 'Fira Sans', sans-serif;
    max-width: 40vw;
    margin: 0 auto;
  }
`;

const YoutubeEmbed = styled.div`
  width: 35vw;
  margin: 0 auto;
  overflow: none;
  position: absolute;
  transform: translateY(50%);
  margin-top: 5%;
  border-radius: 20px;
  background: #000;
  iframe {
    border-radius: 20px;
    width: 100%;
    height: 340px;
    -webkit-box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 1);
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderInfo>
        <TitleWrapper>
          <p>SOBRE O SANARFLIX</p>
          <h1>Olá, Seja Bem-vindo ao SanarFlix!</h1>
        </TitleWrapper>
      </HeaderInfo>
      <YoutubeEmbed>
        <iframe
          src="https://www.youtube.com/embed/AJ0P2joRyEk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </YoutubeEmbed>
    </HeaderWrapper>
  );
}
