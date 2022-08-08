import React from 'react'
import { ProfileContainer } from './Style'

export const Profile = ({ selected, changeGateProfile }) => {

    // mapeamento do perfil selecionado

    const mapSelectedProfile = selected && selected.map((e, i) => {

        return (
            <ProfileContainer>
                <button onClick={changeGateProfile}><i class="fa fa-hand-o-left"></i> <p>BACK TO LIST</p></button>
                <div className='inline'>
                    <img src={e.photo} alt='profile'></img>
                    <div className='block'>
                        <p>{e.name}, {e.age}</p>
                        <span>{e.bio}</span>
                    </div>
                </div>
            </ProfileContainer>
        )
    })

    // render do perfil selecionado

    return (
        <>
            {mapSelectedProfile}
        </>
    )
}
