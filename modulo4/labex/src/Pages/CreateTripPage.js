import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericContainer, GenericDiv } from './../Style';


export default function CreateTripPage() {
    const navigate = useNavigate()
  return (
    <GenericContainer>
      <h1>CreateTripPage</h1>
      <GenericDiv>
      <button onClick={()=> {myRoute.goBack(navigate)}}>Back</button>
      </GenericDiv>
    </GenericContainer>
  )
}
