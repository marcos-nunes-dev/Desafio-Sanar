import React, { Component } from 'react';
import Menu from '../components/common/Menu';
import MainWrapper from '../components/common/MainWrapper';
import Footer from '../components/common/Footer';
import Header from '../components/AboutScene/Header';
import ContentPage from '../components/AboutScene/ContentPage';
import MeetTeachers from '../components/AboutScene/MeetTeachers';
import 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { updateTeachersList } from '../ducks/sanarflix';

class sobre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
  }

  fetchCursesData = () => {
    !this.props.teachersList
      ? fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/professores')
        .then(response => response.json())
        .then(data =>
          this.setState({ res: data }, () =>
            this.props.updateTeachersList(this.state.res)
          )
        )
      : fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/professores')
        .then(response => response.json())
        .then(
          data =>
            data !== this.props.teachersList &&
            this.setState({ res: data }, () =>
              this.props.updateTeachersList(this.state.res)
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
  updateTeachersList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sobre);