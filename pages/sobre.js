import 'isomorphic-unfetch';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentPage from '../components/AboutScene/ContentPage';
import Header from '../components/AboutScene/Header';
import MeetTeachers from '../components/AboutScene/MeetTeachers';
import Footer from '../components/common/Footer';
import MainWrapper from '../components/common/MainWrapper';
import Menu from '../components/common/Menu';
import { fetchTeachersDetails } from '../ducks/sanarflix';

class sobre extends Component {
  componentDidMount() {
    this.props.fetchTeachersDetails();
  }

  render() {
    return (
      <MainWrapper>
        <Menu />
        <Header />
        <ContentPage />
        <MeetTeachers data={this.props.teachersList} />
        <Footer />
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    teachersList: state.sanarflixReducer.teachersList,
  };
}

const mapDispatchToProps = {
  fetchTeachersDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sobre);
