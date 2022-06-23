import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import rafa from './img/rafa.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={rafa} 
          nome="Rafael Quintanilha" 
          descricao="Oi, eu sou o Rafael. Sou um estudante na Labenu e não faço a mínima ideia do que falar aqui, então, beijos! s2."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
      <CardPequeno
      imagem="https://i.pinimg.com/736x/2e/e5/0b/2ee50b20e6cbf18856f683c82e681d8c.jpg"
      info="Email:"
      conteudo="rafaelquintanilha@hotmail.com"
      />
            <CardPequeno
      imagem="https://cutewallpaper.org/24/address-icon-png/home-address-free-architecture-and-city-icons.png"
      info="Endereço:"
      conteudo="Rua dos alfeneiros, N° 4"
      />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
