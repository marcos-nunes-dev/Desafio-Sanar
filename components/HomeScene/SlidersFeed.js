import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import { connect } from 'react-redux';
import ArrowIcon from '../../static/icons/arrow.svg';
import { Skeleton } from 'antd';

const FeedWrapper = styled.div`
  padding-top: 40px;
  .slick-slide {
    padding: 0px 10px;
  }
`;

const SliderHolder = styled.div`
  margin-bottom: 40px;
  h1 {
    font-size: 30px;
    color: #484f52;
    font-weight: 300;
    margin-left: 5vw;
  }
  .slick-list {
    padding-left: 5vw;
  }
`;

const CarouselHeight = styled.div`
  position relative;
`;

const CarouselRow = styled.div`
  width: 100%;
  height: 200px;
  background: ${props =>
    !props.background
      ? `url('${props.background}')no-repeat center center / cover`
      : '#000'};
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 15px;
  span {
    color: #fff;
    font-size: 18px;
    max-width: 80%;
  }
`;

const PrevButton = styled.div`
  height: 100%;
  width: 5%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(100%, rgba(255, 255, 255, 0))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  svg {
    fill: #100b23;
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
  width: 5%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(100%, rgba(255, 255, 255, 0.4))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  svg {
    fill: #100b23;
    width: 20px;
    height: 20px;
  }
  :hover {
    cursor: pointer;
  }
`;

class SlidersFeed extends Component {
  resolveCursesList = (item, index) => {
    return (
      <CarouselRow background={item.imagem}>
        <span>{item.nome}</span>
      </CarouselRow>
    );
  };

  RowScroll = (action, carousel) => {
    switch (carousel) {
      case 'curses':
        action === 'Next'
          ? this.refs.cursesRef.slick.slickNext()
          : this.refs.cursesRef.slick.slickPrev();
        break;
      case 'seen':
        action === 'Next'
          ? this.refs.seenRef.slick.slickNext()
          : this.refs.seenRef.slick.slickPrev();
        break;
      case 'news':
        action === 'Next'
          ? this.refs.newsRef.slick.slickNext()
          : this.refs.newsRef.slick.slickPrev();
        break;
    }
  };

  render() {
    return (
      <FeedWrapper>
        <SliderHolder>
          <h1>Cursos</h1>
          <CarouselHeight>
            <Carousel
              slidesToShow={5}
              slidesToScroll={5}
              infinite={false}
              ref="cursesRef"
              dots={false}
              draggable
            >
              {this.props.cursesList &&
                this.props.cursesList.map((item, index) => (
                  <div key={index}>{this.resolveCursesList(item, index)}</div>
                ))}
            </Carousel>
            <PrevButton onClick={() => this.RowScroll('Prev', 'curses')}>
              <ArrowIcon />
            </PrevButton>
            <NextButton onClick={() => this.RowScroll('Next', 'curses')}>
              <ArrowIcon />
            </NextButton>
          </CarouselHeight>
        </SliderHolder>
        <SliderHolder>
          <h1>Mais Vistos</h1>
          <CarouselHeight>
            <Carousel
              slidesToShow={5}
              slidesToScroll={5}
              infinite={false}
              ref="seenRef"
              dots={false}
              draggable
            >
              {this.props.cursesList &&
                this.props.cursesList.map((item, index) => (
                  <div key={index}>{this.resolveCursesList(item, index)}</div>
                ))}
            </Carousel>
            <PrevButton onClick={() => this.RowScroll('Prev', 'seen')}>
              <ArrowIcon />
            </PrevButton>
            <NextButton onClick={() => this.RowScroll('Next', 'seen')}>
              <ArrowIcon />
            </NextButton>
          </CarouselHeight>
        </SliderHolder>
        <SliderHolder>
          <h1>Novidades</h1>
          <CarouselHeight>
            <Carousel
              slidesToShow={5}
              slidesToScroll={5}
              infinite={false}
              ref="newsRef"
              dots={false}
              draggable
            >
              {this.props.cursesList &&
                this.props.cursesList.map((item, index) => (
                  <div key={index}>{this.resolveCursesList(item, index)}</div>
                ))}
            </Carousel>
            <PrevButton onClick={() => this.RowScroll('Prev', 'news')}>
              <ArrowIcon />
            </PrevButton>
            <NextButton onClick={() => this.RowScroll('Next', 'news')}>
              <ArrowIcon />
            </NextButton>
          </CarouselHeight>
        </SliderHolder>
      </FeedWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    cursesList: state.sanarflixReducer.cursesList,
  };
}

export default connect(mapStateToProps)(SlidersFeed);
