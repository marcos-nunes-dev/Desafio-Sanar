import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const TextAboutWrapper = styled.div`
  color: #656e70;
  line-height: 24px;
  font-size: 19px;
  p {
    margin-bottom: 40px;
  }
`;

const ContentBlocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemBlock = styled.div`
  margin: 15px;
  padding: 20px;
  padding-right: 30px;
  min-height: 300px;
  width: 25%;
  border-radius: 4px;
  :nth-child(1) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000),
      url('../../static/img/b1.png') no-repeat center center / cover;
  }
  :nth-child(2) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000),
      url('../../static/img/b2.png') no-repeat center center / cover;
  }
  :nth-child(3) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000),
      url('../../static/img/b3.png') no-repeat center center / cover;
  }
  :nth-child(4) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000),
      url('../../static/img/b4.png') no-repeat center center / cover;
  }
  :nth-child(5) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000),
      url('../../static/img/b5.png') no-repeat center center / cover;
  }
  :nth-child(6) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000),
      url('../../static/img/b6.png') no-repeat center center / cover;
  }
`;

const ContentItem = styled.div`
  max-width: 90%;
  color: #fff;
  font-size: 22px;
  span {
    margin-top: 20px;
    font-size: 15px;
    font-weight: 300;
    display: block;
  }
`;

export default function ContentPage() {
  return (
    <ContentWrapper>
      <TextAboutWrapper>
        <p>
          Olá, Tudo bom? Se você está por aqui, deve estar se perguntando oque é
          o SanarFlix e como podemos te ajudar. Então vamos começar a responder
          pelo final. O SanarFlix foi concebido, pois nós sabemos as
          dificuldades envolvidas na sua rotina de estudante de medicina.
        </p>
        <p>
          Em resumo, muito é fruto de um extenso volume de assuntos que lhe é
          apresentado em um curto espaço de tempo. Qaundo esse fato é associado
          á pressão por resultados imediatos das avaliações e da incerteza de
          uma adequada preparação para lidar com vidas no futuro, gera
          insegurança e prejuízos pessoais. Por isso, o SanarFlix será seu maior
          aliado. Nós somos a maior plataforma de educação médica no Brasil e
          tudo foi pensado para te acompanhar e te auxiliar durante toda a sua
          faculdade de medicina.
        </p>
        <p>Como? Simplesmente lhe disponibilizando:</p>
      </TextAboutWrapper>
      <ContentBlocks>
        <ItemBlock>
          <ContentItem>
            Aulas Didáticas e Objetivas
            <span>Você pode assistir quantas vezes quiser </span>
          </ContentItem>
        </ItemBlock>
        <ItemBlock>
          <ContentItem>
            Mapas Mentais
            <span>
              Mapas dos principais temas para que você possa revisar muito mais
              fácil os assuntos
            </span>
          </ContentItem>
        </ItemBlock>
        <ItemBlock>
          <ContentItem>
            Questões Comentadas
            <span>Para que você possa colocar em prática e aprender com os seus erros </span>
          </ContentItem>
        </ItemBlock>
        <ItemBlock>
          <ContentItem>
            Manuais, Diretrizes e Artigos
            <span>Acesso Rápido aos principais materias públicos de referência </span>
          </ContentItem>
        </ItemBlock>
        <ItemBlock>
          <ContentItem>
            Clube de Casos
            <span>Discussões em grupo semanalmente no nosso Clube de Casos com estudantes no mesmo nível que você </span>
          </ContentItem>
        </ItemBlock>
        <ItemBlock>
          <ContentItem>
            E Muito Mais!
            <span>Ainda vem muito mais por ai </span>
          </ContentItem>
        </ItemBlock>
      </ContentBlocks>
      <TextAboutWrapper>
        <p>
          Toda semana novas aulas e novos materiais são acrescentados a
          plataforma. Confira todo conteúdo disponível clicando em Todos os
          cursos ou em O que já está disponível? Experimente o SanarFlix e
          descubra oque é ter uma rotina de estudos otimizada!
        </p>
      </TextAboutWrapper>
    </ContentWrapper>
  );
}
