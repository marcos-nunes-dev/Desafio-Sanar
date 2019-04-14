import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.div`
  width: 100%;
  input {
    width: 100%;
    width: -webkit-fill-available;
    padding: 7px 15px;
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

export default function SearchBar() {
  return (
    <SearchInput>
      <input type="text" placeholder="Busque seu curso..."/>
    </SearchInput>
  )
}
