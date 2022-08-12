import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericContainer, GenericDiv } from './../Style';


export default function TripDetailsPage() {
  const navigate = useNavigate()
  const pathParams = useParams()
  const id = 'someid'
  return (
    <GenericContainer>
      <h1>TripDetailsPage</h1>
      <GenericDiv>
        <button onClick={() => { myRoute.goBack(navigate) }}>Back</button>
      </GenericDiv>
    </GenericContainer>
  )
}
