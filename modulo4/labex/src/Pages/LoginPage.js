import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Coordinates'
import { GenericContainer, GenericDiv } from './../Style';


export default function LoginPage() {
    const navigate = useNavigate()
  return (
    <GenericContainer>
      <h1>LoginPage</h1>
      <GenericDiv>
      <button onClick={()=> {myRoute.goBack(navigate)}}>Back</button>
      </GenericDiv>
    </GenericContainer>
  )
}
