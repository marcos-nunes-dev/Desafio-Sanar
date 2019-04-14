import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import ArrowIcon from '../../static/icons/arrow.svg';

const TeachersWrapper = styled.div`
  margin-top: 90px;
  .slick-list {
    overflow: visible;
  }
`;

const MeetTeachersTitle = styled.div`
  text-align: center;
  margin-bottom: 80px;
  h1 {
    color: #484f52;
    font-weight: 300;
  }
`;

const CarouselWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  .slick-slide {
    transform: scale(1);
    transition: all 1s ease;
  }
  .slick-current {
    transform: scale(1.2);
    z-index: 4;
    -webkit-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
  }
  .slick-current p {
    text-align: center;
    opacity: 1;
    visible: auto;
  }
  .slick-current p span {
    display: block;
    font-size: 12px;
    opacity: 0.6;
  }
`;

const CarouselRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 15px;
  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
  p{
    opacity: 0;
    visible: hidden;
  }
`;

const TeacherAvatar = styled.div`
  width: 80px;
  height: 80px;
  background: ${props =>
    props.imagem
      ? `url(${props.imagem})no-repeat center center / cover`
      : '#000'};
  border-radius: 100%;
  margin-bottom: 25px;
`;

const PrevButton = styled.div`
  height: 100%;
  position: absolute;
  left: 42%;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #100b2378;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
  }
  :hover {
    cursor: pointer;
  }
`;
const NextButton = styled.div`
  height: 100%;
  position: absolute;
  right: 42%;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #100b2378;
    width: 20px;
    height: 20px;
  }
  :hover {
    cursor: pointer;
  }
`;

export default class MeetTeachers extends Component {
  resolvedata = (item, index) => {
    return (
      <div key={index}>
        <CarouselRow>
          <TeacherAvatar image={item.imagem} />
          <h1>{item.nome}</h1>
          <p>
            Cardiologista
            <span>Formada pela USP</span>
          </p>
        </CarouselRow>
      </div>
    );
  };

  RowScroll = action => {
    action === 'Next'
      ? this.refs.teachersRef.slick.slickNext()
      : this.refs.teachersRef.slick.slickPrev();
  };

  render() {
    return (
      <TeachersWrapper>
        <MeetTeachersTitle>
          <h1>Conheça Nossos Professores</h1>
        </MeetTeachersTitle>
        <CarouselWrapper>
          <Carousel
            centerMode={true}
            slidesToShow={7}
            dots={false}
            infinite={true}
            draggable
            ref="teachersRef"
          >
            {this.props.data &&
              this.props.data.map((item, index) => (
                <>{this.resolvedata(item, index)}</>
              ))}
          </Carousel>
          <PrevButton onClick={() => this.RowScroll('Prev')}>
            <ArrowIcon />
          </PrevButton>
          <NextButton onClick={() => this.RowScroll('Next')}>
            <ArrowIcon />
          </NextButton>
        </CarouselWrapper>
      </TeachersWrapper>
    );
  }
}
