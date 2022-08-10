import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as myRoute from '../Coordinates'
import { GenericContainer, GenericDiv } from './../Style';


export default function AdminHomePage() {
    const navigate = useNavigate()
    const pathParams = useParams()
    const id = 'someid'

  return (
    <GenericContainer>
      <h1>AdminHomePage</h1>
      <GenericDiv>
      <button onClick={()=> {myRoute.goBack(navigate)}}>Back</button>
      <button onClick={()=> {myRoute.goToTripDetailsPage(navigate, id)}}>Trip Details</button>
      <button onClick={()=> {myRoute.goToCreateTripPage(navigate)}}>Create Trip</button>
      </GenericDiv>
    </GenericContainer>
  )
}
