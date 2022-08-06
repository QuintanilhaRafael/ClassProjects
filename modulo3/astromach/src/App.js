import React, { useEffect, useState } from "react";
import { Container, GlobalStyle, Header, PageContainer } from "./Style";
import { MatchingPage } from './components/MatchingPage/MatchingPage';
import axios from "axios";
import { MatchesPage } from "./components/MatchesPage/MatchesPage";

function App() {

  //states

  const [person, setPerson] = useState([])
  const [open, setOpen] = useState(false)
  const [matches, setMatches] = useState([])

  // functions

  const changeGate = () => {
    setOpen(!open)
    getMatches()
  }

  // useEffect

  useEffect(() => {
    getNewPerson()
  }, []
  )

  // axios
  

  const getNewPerson = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-quintanilha-lamarr/person').then((response) => {

      setPerson([response.data.profile])

    }).catch((error) => {
      alert('nope')
    })

  }

  const getMatches = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-quintanilha-lamarr/matches').then((response) => {
      setMatches(response.data.matches)
    }).catch((error) => {
      alert('nope')
    })

  }

  const matchingFunction = (id, choice) => {
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-quintanilha-lamarr/choose-person', {
      "id": id,
      "choice": choice
    }).then(() => {
      getNewPerson()
    }).catch(() => {
      alert('nope!')
    })
  }

  const clearMatches = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-quintanilha-lamarr/clear').then(() => {
      alert('Cleared!')
      getNewPerson()
    }).catch((error) => {
      alert('nope!')
    })
  }


  // execução da escolha de pages e botôes

  return (
    <Container>
      <GlobalStyle />
      <PageContainer>
        <Header>
          {open && <button onClick={changeGate}><i class="fa fa-group"></i></button>}
          <h3><p>astro</p><span>match</span></h3>
          {!open && <button className="orange" onClick={changeGate}><i class="fa fa-user-plus"></i></button>}
        </Header>
        {!open
          ? <MatchingPage clearMatches={clearMatches} matchingFunction={matchingFunction} person={person} />
          : <MatchesPage matches={matches} />
        }
      </PageContainer>
    </Container>
  );
}

export default App;
