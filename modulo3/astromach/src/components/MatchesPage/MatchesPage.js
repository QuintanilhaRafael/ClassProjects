import React from 'react'
import { ListContainer, ListItem } from './Style'

export const MatchesPage = ({matches}) => {
    

    const mapedList = matches && matches.map((e) => {
        return (
            <ListContainer>
                <ListItem>
                    <img src={e.photo} alt='photo'></img>
                    <p>{e.name}</p>
                </ListItem>
            </ListContainer>
        )
    })

  return (
    <>
{mapedList}
    </>
  )
}
