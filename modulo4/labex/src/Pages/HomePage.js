import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Coordinates'
import { GenericDiv, GenericContainer } from './../Style';



export default function HomePage() {
  const navigate = useNavigate()

  return (
    <GenericContainer>
      <h1>HomePage</h1>
      <GenericDiv>
        <button onClick={() => { myRoute.goToListPage(navigate) }}>Trips</button>
        <button onClick={() => { myRoute.goToLoginPage(navigate) }}>Login</button>
        <button onClick={() => { myRoute.goToAdminPage(navigate) }}>Admin</button>
      </GenericDiv>
    </GenericContainer>
  )
}
