import React, {useState} from 'react'

export const EnsinoSuperiorForm = (props) => {

    return (
        <>
            <input type="text" placeholder='Qual o curso?' value={props.valorCurso} onChange={props.handleValorCurso} />
            <input type="text" placeholder='Qual a unidade de ensino?' value={props.valorLugar} onChange={props.handleValorLugar} />
            <button type='submit' onClick={props.send}><i class="fa fa-send-o"></i></button>
        </>
    )
}