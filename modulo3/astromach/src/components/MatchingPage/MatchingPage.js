import React from 'react'
import { Card } from './../Card/Card';
import { MatchingContainer } from './Style';

export const MatchingPage = ({ person, matchingFunction, clearMatches }) => {

  // página principal do app

  return (
    <MatchingContainer>
      <Card person={person} clearMatches={clearMatches} />
      <div className='buttons'>
        <button onClick={() => matchingFunction(person[0].id, false)} className='no'><i class="fa fa-times"></i></button>
        <button onClick={() => matchingFunction(person[0].id, true)} className='yes'><i class="fa fa-heart"></i></button>
      </div>
    </MatchingContainer>
  )
}
