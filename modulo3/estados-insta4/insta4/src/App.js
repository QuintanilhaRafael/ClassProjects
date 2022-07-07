import React from 'react';
import Post from './components/Post/Post';
import './style.js'
import { MainContainer, GlobalStyle, ListItem } from './style.js';


function App() {

  const arrayDePosts=[
    {
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
    }
]

let arrayDeCards=arrayDePosts.map((elemento,index)=>{
    return (
        <ListItem key={index}>
            <Post
            nomeUsuario={elemento.nomeUsuario}
            fotoUsuario={elemento.fotoUsuario}
            fotoPost={elemento.fotoPost}
          />
        </ListItem>
    )
})

console.log({arrayDeCards})


return(
  <MainContainer>
    <GlobalStyle/>
    {arrayDeCards}
  </MainContainer>
)

}


export default App;
