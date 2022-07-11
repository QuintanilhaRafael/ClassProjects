import React, { useState } from 'react'
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
import { PostContainer, PostHeader, PostFooter, UserPhoto, PostPhoto, CommentListContainer } from '../../style'



function Post(props) {
  

  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [salvo, setSalvo] = useState(false)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [inputMsg, setInputMsg] = useState("")
  const [commentList, setCommentList] = useState([])


  const addComment = (e) => {
    e.preventDefault();

   const newComment = {msg:inputMsg}

   const newCommentList = [ ...commentList, newComment ]

   setCommentList(newCommentList);

   setComentando(false);

  setNumeroComentarios(numeroComentarios + 1);

  setInputMsg('')
  
}

  

  const newCommentList = commentList.map ((e,i)=> {
    const deleteComment = () => {
      const newCommentList = [...commentList]
      const deletar = newCommentList.findIndex((element)=>{
          return element === e
      })
      newCommentList.splice(deletar, 1)
      setCommentList(newCommentList)
      setNumeroComentarios(numeroComentarios - 1);
    }
    return (
      <CommentListContainer key={i}>
       <span>{e.msg}</span>
       <button onClick={deleteComment}><i class="fa fa-close"></i></button>
      </CommentListContainer>
    )
  })

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
    componenteComentario = <SecaoComentario onChangeComentario={(e) => {
      setInputMsg(e.target.value);
    }} msg={inputMsg} aoEnviar={addComment} />
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
        <button onClick={props.deletePost}><i class="fa fa-close"></i></button>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
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
      </PostFooter>
      {newCommentList}
      {componenteComentario}
    </PostContainer>
  )
}


export default Post