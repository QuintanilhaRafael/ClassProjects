import React from 'react'
import { CardContainer, Descriptions, ButtonClear } from './Style'

export const Card = ({ person, clearMatches }) => {

    // mapeamento condicional dos cartões/botão de clear. (O próximo card só é mapeado caso o array person não seja nulo, do contrário, o botão clear list aparece)

    const mapedPerson = person && person.map((e, i) => {

        if (person[0] === null) {
            return (
                <ButtonClear onClick={clearMatches}>Clear<p>List</p></ButtonClear>
            )
        } else {
            return (
                <CardContainer key={i}>
                    <img src={e.photo} alt="photo" />
                    <Descriptions>
                        <h3>{e.name}, {e.age}</h3>
                        <span>{e.bio}</span>
                    </Descriptions>
                </CardContainer>
            )
        }
    })

     //Cartão ou botão clear já mapeados.

    return (
        <>
            {mapedPerson}
        </>
    )
}
