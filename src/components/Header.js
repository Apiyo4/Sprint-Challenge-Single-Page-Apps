import React from "react";
import {NavLink} from 'react-router-dom';
import Styled from 'styled-components';

const Header1 = Styled.header`
 margin-top: 20px;
`
const Div = Styled.div`
 margin-left: 80%;

`
const H1 = Styled.h1`
  text-align: center;
`
const Span= Styled.span`
  padding-right: 5%;

`

export default function Header() {
  return (
    <Header1 className="ui centered">
      
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
      <Div>
      <NavLink to="/">
      <Span>Home</Span> 
      </NavLink>
      <NavLink to="/characters">
      <Span>Characters</Span> 
      </NavLink>

      </Div>
     
    </Header1>
  );
}
