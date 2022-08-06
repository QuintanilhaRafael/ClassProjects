import React from 'react'
import { ListContainer, ListItem } from './Style'

export const MatchesPage = ({ matches }) => {

    // mapeamento da lista de matches do app

    const mapedList = matches && matches.map((e, i) => {
        return (
            <ListContainer key={i}>
                <ListItem>
                    <img src={e.photo} alt='photo'></img>
                    <p>{e.name}</p>
                </ListItem>
            </ListContainer>
        )
    })

    // página da lista de matches já mapeada.

    return (
        <>
            {mapedList}
        </>
    )
}
