import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericDiv, GenericContainer } from './../Style';



export default function HomePage() {

  const [auth, setAuth] = useState(true)
  const navigate = useNavigate()

  return (
    <GenericContainer>
      <h1>HomePage</h1>
      <GenericDiv>
        <button onClick={() => { myRoute.goToListPage(navigate) }}>Trips</button>
        {auth ? <button onClick={() => { myRoute.goToAdminPage(navigate) }}>Admin</button> : <button onClick={() => { myRoute.goToLoginPage(navigate) }}>Login</button>}
      </GenericDiv>
    </GenericContainer>
  )
}
