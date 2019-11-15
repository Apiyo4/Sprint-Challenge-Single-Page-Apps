import React from "react";
import Styled from 'styled-components';

const Img = Styled.img`
  margin-left : 14%;
  margin-right: 8%;
  height: 400px;
  width: 76%;
  margin-bottom: 20px;
  box-shadow: -30px -30px #f5f5f5;
  margin-top: 25px;
   margin-bottom: 50px;

`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
