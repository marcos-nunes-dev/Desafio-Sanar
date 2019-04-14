
import React, { Component } from 'react';
import Menu from '../components/common/Menu';
import MainWrapper from '../components/common/MainWrapper';
import Header from '../components/CurseScene/Header';
import ContentPage from '../components/CurseScene/ContentPage';
import Footer from '../components/common/Footer';
import 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { updateModulesList } from '../ducks/sanarflix';

class curso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
  }

  fetchCursesData = () => {
    !this.props.moduleList
      ? fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos')
        .then(response => response.json())
        .then(data =>
          this.setState({ res: data }, () =>
            this.props.updateModulesList(this.state.res)
          )
        )
      : fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos')
        .then(response => response.json())
        .then(
          data =>
            data !== this.props.moduleList &&
            this.setState({ res: data }, () =>
              this.props.updateModulesList(this.state.res)
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
  updateModulesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(curso);
