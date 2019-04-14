import React from 'react';
import styled from 'styled-components';
import AboutIcon from '../../static/icons/about.svg';
import TalkIcon from '../../static/icons/envelope.svg';
import AskIcon from '../../static/icons/send.svg';
import BlogIcon from '../../static/icons/blog.svg';
import FacebookIcon from '../../static/icons/facebook.svg';
import InstagramIcon from '../../static/icons/instagram.svg';
import YoutubeIcon from '../../static/icons/youtube.svg';

const MainWrapper = styled.div`
  margin-top: 40px;
`;

const PreFooter = styled.div`
  padding: 80px 0;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const LinksTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

const LinksTabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconLinksHolder = styled.div`
  background: #2472ea;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  -webkit-box-shadow: 0px 0px 25px 1px rgba(36, 114, 234, 0.32);
  -moz-box-shadow: 0px 0px 25px 1px rgba(36, 114, 234, 0.32);
  box-shadow: 0px 0px 25px 1px rgba(36, 114, 234, 0.32);
  svg {
    fill: #fff;
    width: 50%;
  }
`;

const SocialTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
`;

const SocialTabItem = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #434343;
    width: 70%;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #e6e6e6;
`;


export default function Footer() {
  return (
    <MainWrapper>
      <PreFooter>
        <LinksTab>
          <LinksTabItem>
            <IconLinksHolder>
              <AboutIcon />
            </IconLinksHolder>
            <span>Sobre o Sanarflix</span>
          </LinksTabItem>
          <LinksTabItem>
            <IconLinksHolder>
              <TalkIcon />
            </IconLinksHolder>
            <span>Fale Conosco</span>
          </LinksTabItem>
          <LinksTabItem>
            <IconLinksHolder>
              <AskIcon />
            </IconLinksHolder>
            <span>Perguntas Frequentes</span>
          </LinksTabItem>
          <LinksTabItem>
            <IconLinksHolder>
              <BlogIcon />
            </IconLinksHolder>
            <span>Blog</span>
          </LinksTabItem>
        </LinksTab>
        <SocialTab>
          <SocialTabItem><FacebookIcon /></SocialTabItem>
          <SocialTabItem><InstagramIcon /></SocialTabItem>
          <SocialTabItem><YoutubeIcon /></SocialTabItem>
        </SocialTab>
      </PreFooter>
      <Copyright>
        @ SanarFlix 2018 - Todos os Direitos Reservados
      </Copyright>
    </MainWrapper>
  );
}
