import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.js'
import { MainContainer, GlobalStyle, ListItem, InputMakeUp } from './style.js';


function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')
  const [fotoUsuario, setFotoUsuario] = useState('')
  const [fotoPost, setFotoPost] = useState('')
  const [arrayDePosts, setArrayDePosts] = useState([{
    nomeUsuario: 'Harry',
    fotoUsuario: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/08/1586634605500927-img-624452-daniel-radcliffe-em-harry-potter-e-o-enigma-do-principe20140811091407760459-1200x900-1.jpg',
    fotoPost: 'https://i.ytimg.com/vi/FGdePqS_Uh8/maxresdefault.jpg'
  },
  {
    nomeUsuario: 'Ron',
    fotoUsuario: 'https://i.pinimg.com/originals/a1/68/c2/a168c2283daee20fa232a01a8e370a61.jpg',
    fotoPost: 'https://media.tenor.com/images/4afbffad8accac213741125d733a0ef3/tenor.png'
  },
  {
    nomeUsuario: 'Snape',
    fotoUsuario: 'https://rollingstone.uol.com.br/media/_versions/alan-rickman-harry-potter_reproducao_widelg_1_widelg.jpg',
    fotoPost: 'https://media.tenor.com/images/7c3afce308ccf3db65315ad10e84757b/tenor.png'
  }]);

  const upNewPost = (e) => {
    e.preventDefault();
    const newPost = { nomeUsuario: nomeUsuario, fotoUsuario: fotoUsuario, fotoPost: fotoPost };
    const newArrayOfPosts = [...arrayDePosts, newPost];
    setArrayDePosts(newArrayOfPosts);
    setNomeUsuario('')
    setFotoUsuario('')
    setFotoPost('')

  }



  let arrayDeCards = arrayDePosts.map((e, i) => {
    const deletarPessoa = () => {
      const novaListaDePessoas = [...arrayDePosts]
      const deletar = novaListaDePessoas.findIndex((element) => {
        return element === e
      })
      novaListaDePessoas.splice(deletar, 1)
      setArrayDePosts(novaListaDePessoas)
    }
    return (
      <ListItem key={i}>
        <Post
          nomeUsuario={e.nomeUsuario}
          fotoUsuario={e.fotoUsuario}
          fotoPost={e.fotoPost}
          deletePost={deletarPessoa}
        />
      </ListItem>
    )
  })




  return (
    <MainContainer>
      <GlobalStyle />
      {arrayDeCards}
      <InputMakeUp>
        <label>Nome:</label>
        <input placeholder='Nome' onChange={(e) => {
          setNomeUsuario(e.target.value)
        }} value={nomeUsuario} />
        <label>ProfileImgUrl:</label>
        <input placeholder='Profile URL' onChange={(e) => {
          setFotoUsuario(e.target.value)
        }} value={fotoUsuario} />
        <label>PostImgUrl:</label>
        <input placeholder='Post URL' onChange={(e) => {
          setFotoPost(e.target.value)
        }} value={fotoPost} />
        <button onClick={upNewPost}>Sent</button>
      </InputMakeUp>
    </MainContainer>
  )

}


export default App;
