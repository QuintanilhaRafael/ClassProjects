import React from 'react'
import { ListContainer, ListItem } from './Style'

export const MatchesPage = ({ matches, profileSelection }) => {


    // mapeamento da página lista de matches do app

    const mapedList = matches && matches.map((e, i) => {
        return (
            <ListContainer key={i}>
                <ListItem onClick={() => { profileSelection(e) }}>
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
