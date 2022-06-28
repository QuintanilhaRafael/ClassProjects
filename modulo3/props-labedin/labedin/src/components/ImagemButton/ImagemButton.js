import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    const clickHere = () => {
        alert('Working...')
      }
    return (
        <button onClick={clickHere} className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </button>

    )
}

export default ImagemButton;