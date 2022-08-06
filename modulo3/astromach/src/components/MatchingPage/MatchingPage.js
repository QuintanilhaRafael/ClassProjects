import React from 'react'
import { Card } from './../Card/Card';
import { ButtonClear, MatchingContainer } from './Style';

export const MatchingPage = ({person, matchingFunction, clearMatches}) => {


  return (
    <MatchingContainer>
     {person.length === 0 ? <ButtonClear onClick={clearMatches}>Clear</ButtonClear> : <Card person={person}/>}
     <div className='buttons'>
     <button onClick={() => matchingFunction(person[0].id, false)} className='no'><i class="fa fa-times"></i></button>
     <button onClick={() => matchingFunction(person[0].id, true)} className='yes'><i class="fa fa-heart"></i></button>
     </div>
    </MatchingContainer>
  )
}
