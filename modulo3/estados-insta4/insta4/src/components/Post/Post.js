import React, { useState } from 'react'
import './style.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeSalvo from '../../img/saved.svg'
import iconeNaoSalvo from '../../img/notsaved.svg'
import iconeShare from '../../img/share.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { IconeSemContador } from './../IconeSemContador/IconeSemContador';
import { DropDown } from '../DropDown/DropDown'



function Post(props) {
  

  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [salvo, setSalvo] = useState(false)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [inputName, setInputName] = useState("")

  

  const handleInputName = (event) => {
    setInputName(event.target.value);
  }

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if (!curtido) {
      setnumeroCurtidas(numeroCurtidas + 1)
      console.log('Curtido!')
    } else {
      setnumeroCurtidas(numeroCurtidas - 1)
      console.log('Descurtido!')
    }

  }

  const onClickSalvo = () => {
    setSalvo(!salvo)
    if (!salvo) {
      console.log('Favoritado!')
    } else {
      console.log('Desfavoritado!')
    }
  }

  const onClickComentario = () => {
    setComentando(!comentando)
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    console.log(inputName)
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let iconeFavorito

  if (salvo) {
    iconeFavorito = iconeSalvo
  } else {
    iconeFavorito = iconeNaoSalvo
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario onChangeComentario={handleInputName} name={inputName} aoEnviar={aoEnviarComentario} />
  }

  return (
    <div className='PostContainer'>
      <div className='PostHeader'>
        <img className='UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </div>

      <img className='PostPhoto' src={props.fotoPost} alt={'Imagem do post'} />

      <div className='PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

        <IconeSemContador
          icone={iconeFavorito}
          onClickIcone={onClickSalvo}
        />

        <DropDown
          icone={iconeShare}
        />
      </div>
      {componenteComentario}
    </div>
  )
}


export default Post