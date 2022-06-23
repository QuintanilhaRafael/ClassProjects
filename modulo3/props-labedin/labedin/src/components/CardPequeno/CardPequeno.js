import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img className='smallcard-item' src={props.imagem} />
            <h4 className='smallcard-item'>{props.info}</h4>
            <p className='smallcard-item'>{props.conteudo}</p>
        </div>
    )
}

export default CardPequeno;