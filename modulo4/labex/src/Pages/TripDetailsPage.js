import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericContainer, Header, HeaderDiv, GenericDiv, CardContainer, GreenButton, RedButton, ApprovedListContainer } from './../Style';
import useProtectedPage from './../Hooks/useProtectedPage';
import { URL } from '../Components/Constants';


export default function TripDetailsPage() {

  useProtectedPage();

  const pathParams = useParams();

  const navigate = useNavigate();


  const [tripData, setTripData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [candidates, setCandidates] = useState(undefined)
  const [approvedCandidates, setApprovedCandidates] = useState([])


  const token = localStorage.getItem("token");



  useEffect(() => {
    getTripDetail()
  }, [])

  const getTripDetail = () => {
    setIsLoading(true);

    axios.get(`${URL}trip/${pathParams.id}`,
      {
        headers: {
          auth: token
        }
      }).then((response) => {
        setTimeout(() => {
          setIsLoading(false)
          setTripData([response.data.trip])
          setCandidates(response.data.trip.candidates)
          setApprovedCandidates(response.data.trip.approved)
        }, 1000)
      }).catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }


  const headers = {
    headers: {
      'Content-Type': 'application/json',
      auth: token
    }
  }

  const decideCandidate = (candidate, decision) => {

    const body = { approve: decision }

    axios.put(`${URL}trips/${pathParams.id}/candidates/${candidate.id}/decide`, body, headers)
      .then(() => {
        getTripDetail()
      }).catch((err) => {
        alert("Erro!")
        console.log(err)
      })
  }



  const candidatesList = candidates && candidates.map((e, i) => {
    return (
      <CardContainer key={i}>
        <li><p>Nome: </p><span>{e.name}</span></li>
        <li><p>Profissão: </p><span>{e.profession}</span></li>
        <li><p>Idade: </p><span>{e.age}</span></li>
        <li><p>País: </p><span>{e.country}</span></li>
        <li><span>{e.applicationText}</span></li>
        <div>
          <GreenButton onClick={() => decideCandidate(e, true)}>Approve</GreenButton>
          <RedButton onClick={() => decideCandidate(e, false)}>Disapprove</RedButton>
        </div>
      </CardContainer>
    )
  })


  const approvedCandidatesList = approvedCandidates && approvedCandidates.map((e, i) => {
    return (
      <div key={i}>
        <li>{e.name}</li>
      </div>
    )
  })

  return (
    <>
    <Header>
        <h1>Labex</h1>
        <HeaderDiv>
          <button onClick={() => { myRoute.goBack(navigate) }}>Back</button>
        </HeaderDiv>
      </Header>
    <GenericContainer>
      <GenericDiv>
        <h1>Candidates</h1>
        {isLoading && <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt="loading..." /> }
        {!isLoading && tripData && (candidates.length === 0 ? <span>There're no candidates to this trip.</span> : candidatesList)}
        {!isLoading && !tripData && error}
        <h1>Approved candidates</h1>
        <ApprovedListContainer>
        {isLoading && <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt="loading..." /> }
        {!isLoading && tripData && (approvedCandidates.length === 0 ? <span>There're no approved candidates in this trip.</span> : approvedCandidatesList)}
        {!isLoading && !tripData && error}
        </ApprovedListContainer>
      </GenericDiv>
    </GenericContainer>
    </>
  )
}
