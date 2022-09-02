import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericContainer, GenericDiv, Header, HeaderDiv, TripsContainer, TripsDiv } from './../Style';
import { URL } from '../Components/Constants';
import useRequestData from "../Hooks/useRequestData";
import useProtectedPage from "../Hooks/useProtectedPage";
import axios from 'axios';


export default function AdminHomePage() {
  useProtectedPage();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [dataTrips, isLoadingTrips, errorTrips, getTrips] = useRequestData(`${URL}trips`);

  const logout = () => {
    localStorage.setItem("token", "")
    navigate("/")
  }

  // DELETE

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      auth: token
    }
  }

  const deleteTrip = (trip) => {
    if (window.confirm(`Você tem certeza que deseja deletar a viagem ${trip.name}?`)) {
      axios.delete(`${URL}trips/${trip.id}`, headers)
        .then(() => {
          alert("Viagem deletada!")
          getTrips()
        }).catch((err) => {
          alert("Erro!")
          console.log(err.response)
        })
    }
  }


  // RENDER CARDS


  const adminTripsList = dataTrips && dataTrips.trips.map((trip) => {
    return (
      <TripsDiv key={trip.id} onClick={() => myRoute.goToTripDetailsPage(navigate, trip.id)}>
        <span>{trip.name}</span>
        <button onClick={(e) => {
          e.stopPropagation()
          deleteTrip(trip)
        }}>
          <i className="fa fa-trash-o" />
        </button>
      </TripsDiv>
    )
  })

  return (
    <>
    <Header>
        <h1>LabeX</h1>
        <HeaderDiv>
          <button onClick={() => { myRoute.goBack(navigate) }}>Back</button>
          <button onClick={() => { myRoute.goToCreateTripPage(navigate) }}>Create Trip</button>
        </HeaderDiv>
      </Header>
      <GenericContainer>
      <GenericDiv>
        <TripsContainer>
        <h1>Trips</h1>
        {isLoadingTrips && <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt="loading..." />}
        {!isLoadingTrips && dataTrips && (dataTrips.trips.length === 0 ? <span>No trips yet.</span> : adminTripsList)}
        {!isLoadingTrips && !dataTrips && errorTrips}
        </TripsContainer>
      </GenericDiv>
    </GenericContainer>
    </>
  )
}
