import React, { Component } from 'react';
import Menu from '../components/common/Menu';
import MainWrapper from '../components/common/MainWrapper';
import Footer from '../components/common/Footer';
import Header from '../components/HomeScene/Header';
import SlidersFeed from '../components/HomeScene/SlidersFeed';
import 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { updateCursesList } from '../ducks/sanarflix';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
  }

  fetchCursesData = () => {
    !this.props.cursesList
      ? fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos')
        .then(response => response.json())
        .then(data =>
          this.setState({ res: data }, () =>
            this.props.updateCursesList(this.state.res)
          )
        )
      : fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos')
        .then(response => response.json())
        .then(
          data =>
            data !== this.props.cursesList &&
            this.setState({ res: data }, () =>
              this.props.updateCursesList(this.state.res)
            )
        );
  };

  componentWillMount() {
    this.fetchCursesData();
  }

  render() {
    return (
      <MainWrapper>
        <Menu />
        <Header />
        <SlidersFeed />
        <Footer />
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    cursesList: state.sanarflixReducer.cursesList,
  };
}

const mapDispatchToProps = {
  updateCursesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
