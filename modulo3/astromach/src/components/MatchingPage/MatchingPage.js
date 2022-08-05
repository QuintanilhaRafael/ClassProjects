import React from 'react'
import { Card } from './../Card/Card';
import { MatchingContainer } from './Style';

export const MatchingPage = (person) => {
  return (
    <MatchingContainer>
     <Card person={person}/>
     <>
     <button></button>
     <button></button>
     </>
    </MatchingContainer>
  )
}
