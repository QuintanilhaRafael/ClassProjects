import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericContainer, Header, HeaderDiv } from './../Style';



export default function HomePage() {

  const [auth, setAuth] = useState(true)
  const navigate = useNavigate()

  return (
    <>
    <Header>
      <h1>LabeX</h1>
      <HeaderDiv>
        <button onClick={() => { myRoute.goToListPage(navigate) }}>Trips</button>
        {auth ? <button onClick={() => { myRoute.goToAdminPage(navigate) }}>Admin</button> : <button onClick={() => { myRoute.goToLoginPage(navigate) }}>Login</button>}
      </HeaderDiv>
      </Header>
    <GenericContainer>
      <img src='https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/620fdad771beb335ce5e4aab_Logo%20completo.svg'></img>
    </GenericContainer>
    </>
  )
}
