import React, { useEffect, useState } from "react";
import axios from 'axios';
import Styled from 'styled-components';
import SearchForm from './SearchForm'

const Section = Styled.section`
   display : flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin-top: 35px;
   width: 80%;
   margin-left: 8%;
   margin-right: 8%;
   margin-bottom: 35px;

`
const Div = Styled.div`
    width: 40%;
`
const H3 = Styled.h3` 
 text-align: center;
`
const Img = Styled.img`
    border-radius: 50%;

`

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = ()=>{
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response =>{
        const dataArr = Object.values(response.data);
        console.log(dataArr[1]);
        setCharacters(dataArr[1])
      })
      .catch(error=>{
        console.log(error)
      })
    }
    getCharacters();
  }, []);
    if(!characters || characters.length === 0){
      return <h3>Loading...</h3>
    }
  return (
    <section className="character-list">
      <SearchForm />
      <Section>
      {
        characters.map(character =>{
          return(
         <Div key={character.id}>
          <Img  src={character.image} alt={`${character.name}  image`}/>
              <H3>{character.name}</H3>
            </Div>
            );
        })
      }
        
      </Section>
      
    </section>
  );
}
