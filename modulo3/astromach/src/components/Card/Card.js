import React from 'react'
import { CardContainer, Descriptions } from './Style'

export const Card = ({person}) => {



    const mapedPerson = person && person.map((e) => {

        return (
            <CardContainer key={person.id}>
                <img src={e.photo} alt="photo" />
                <Descriptions>
                    <h3>{e.name}, {e.age}</h3>
                    <span>{e.bio}</span>
                </Descriptions>
            </CardContainer>
        )
    })

    return (
    <>
    {mapedPerson}
    </>
  )
}
