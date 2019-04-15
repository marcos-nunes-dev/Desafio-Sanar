import 'isomorphic-unfetch';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/common/Footer';
import MainWrapper from '../components/common/MainWrapper';
import Menu from '../components/common/Menu';
import ContentPage from '../components/CurseScene/ContentPage';
import Header from '../components/CurseScene/Header';
import { fetchModulesDetails } from '../ducks/sanarflix';

class curso extends Component {
  componentDidMount() {
    this.props.fetchModulesDetails();
  }

  render() {
    return (
      <MainWrapper>
        <Menu />
        <Header />
        <ContentPage data={this.props.moduleList} />
        <Footer />
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    moduleList: state.sanarflixReducer.moduleList,
  };
}

const mapDispatchToProps = {
  fetchModulesDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(curso);
