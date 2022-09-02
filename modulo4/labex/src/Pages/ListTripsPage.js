import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { CardContainer, GenericContainer, GenericDiv, Header, HeaderDiv } from '../Style';
import { useRequestData } from '../Hooks/useRequestData';
import { URL } from '../Components/Constants';
import { GreenButton } from './../Style';


export default function ListTripsPage({setId, setName}) {
    const [dataList, isLoadingList, errorList] = useRequestData(`${URL}trips`)
    const navigate = useNavigate()

    const list = dataList && dataList.trips.map((e, i) => {
      return (
        <CardContainer key={i}>
        <span><p>Nome:</p>{e.name}</span>
        <span><p>Descrição:</p>{e.description}</span>
        <span><p>Planeta:</p>{e.planet}</span>
        <span><p>Duração:</p>{e.durationInDays}</span>
        <span><p>Data:</p>{e.date}</span>
        <GreenButton onClick={()=> {myRoute.goToApkFormPage(navigate); setId(e.id); setName(e.name);}}>Application</GreenButton>
      </CardContainer>
      )
    })

  return (
    <>
    <Header>
        <h1>Labex</h1>
      <HeaderDiv>
      <button onClick={()=> {myRoute.goBack(navigate)}}>Back</button>
      </HeaderDiv>
      </Header>
    <GenericContainer>
      <GenericDiv>
      {isLoadingList && <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt="loading..." /> }
      {!isLoadingList && list}
      {!isLoadingList && !list && errorList}
      </GenericDiv>
    </GenericContainer>
    </>
  )
}
