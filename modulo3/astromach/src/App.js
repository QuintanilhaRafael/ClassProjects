import React, { useEffect, useState } from "react";
import { Container, GlobalStyle, Header, PageContainer } from "./Style";
import { MatchingPage } from './components/MatchingPage/MatchingPage';
import axios from "axios";

function App() {
  //states
  const [person, setPerson] = useState([])








  // useEffect

  useEffect(()=> {
    getNewPerson()
  },[]
  )


  // axios
  const getNewPerson = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-quintanilha-lamarr/person').then((response) => {
      setPerson([response.data.profile])
    }).catch((error) => {
      alert('nope')
    })

  }




  return (
    <Container>
      <GlobalStyle/>
      <PageContainer>
      <Header>
        <button></button>
        <h3><p>astro</p><span>match</span></h3>
      </Header>
      <MatchingPage person={person}/>
      </PageContainer>
    </Container>
  );
}

export default App;
