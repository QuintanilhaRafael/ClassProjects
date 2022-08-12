import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../../Components/Coordinates'
import { GenericContainer, GenericDiv } from '../../Style';
import { useRequestData } from '../../Hook/useRequestData';
import { URL } from '../../Components/Constants';
import { CardContainer } from './Style';


export default function ListTripsPage() {
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
      </CardContainer>
      )
    })

  return (
    <GenericContainer>
      <GenericDiv>
      <button onClick={()=> {myRoute.goBack(navigate)}}>Back</button>
      <button onClick={()=> {myRoute.goToApkFormPage(navigate)}}>Application</button>
      </GenericDiv>
      {isLoadingList && <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt="loading..." /> }
      {!isLoadingList && list}
      {!isLoadingList && !list && errorList}
    </GenericContainer>
  )
}
