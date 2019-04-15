import 'isomorphic-unfetch';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/common/Footer';
import MainWrapper from '../components/common/MainWrapper';
import Menu from '../components/common/Menu';
import Header from '../components/HomeScene/Header';
import SlidersFeed from '../components/HomeScene/SlidersFeed';
import { fetchCursesDetails, updateCursesList } from '../ducks/sanarflix';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
  }

  componentDidMount() {
    this.props.fetchCursesDetails();
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
  fetchCursesDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
