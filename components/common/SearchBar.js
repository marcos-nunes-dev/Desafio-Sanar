import React, { Component } from 'react';
import styled from 'styled-components';
import SearchIcon from '../../static/icons/search.svg';
import { connect } from 'react-redux';
import _ from 'lodash';
import Router from 'next/router';

const SearchInput = styled.div`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    width: -webkit-fill-available;
    padding: 7px 15px;
    padding-right: 45px;
    background: #ffffff1a;
    border: 1px solid #ffffff26;
    border-radius: 3px;
    color: #fff;
  }

  input::placeholder {
    color: #ffffff9c;
  }

  input:focus,
  input:active {
    box-shadow: 0;
    outline: 0;
  }
`;

const IconHolder = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  svg {
    fill: #fff;
  }
  :before {
    content: '';
    position: absolute;
    z-index: 2;
    height: 90%;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    border-left: 1px solid #ffffff9c;
  }
`;

const SearchPanelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
  background: #161a31;
  width: 100%;
  transform: translateY(100%);
`;

const SearchPanelItem = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff54;
  p {
    margin-bottom: 0px;
    transition: all .3s;
  }
  span {
    color: #ffffff54;
  }
  :hover{
    cursor: pointer;
  }
  :hover p{
    opacity: .5;
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      result: []
    };
  }

  SearchPanel = () => {
    if (this.state.searchText.length > 3) {
      return <SearchPanelWrapper>
        {this.state.result.map(res => {
          return (
            <SearchPanelItem key={res.id} onClick={() => Router.push('/curso')}>
              <p>{res.nome}</p>
              <span>{res.area}</span>
            </SearchPanelItem>
          );
        })}
      </SearchPanelWrapper>;
    }
  };

  handleChange = event => {
    this.setState({ searchText: event.target.value });
    this.setState({ result: _.filter(this.props.cursesList, (o) => { return _.includes(o.nome, this.state.searchText) }) })  
  }

  render() {
    return (
      <SearchInput>
        <IconHolder>
          <SearchIcon />
        </IconHolder>
        <input
          type="text"
          placeholder="Busque seu curso..."
          onChange={this.handleChange}
        />
        {this.SearchPanel()}
      </SearchInput>
    );
  }
}

function mapStateToProps(state) {
  return {
    cursesList: state.sanarflixReducer.cursesList,
  };
}

export default connect(mapStateToProps)(SearchBar);
