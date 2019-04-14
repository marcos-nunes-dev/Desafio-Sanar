import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../static/icons/search.svg';

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

export default function SearchBar() {
  return (
    <SearchInput>
      <IconHolder>
        <SearchIcon />
      </IconHolder>
      <input type="text" placeholder="Busque seu curso..."/>
    </SearchInput>
  )
}
