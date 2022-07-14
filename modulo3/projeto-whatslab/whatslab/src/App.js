import InputArea from './components/ImputArea/InputArea';
import { Footer, Container, Header, Main, OrangeLeft, Midpage, OrangeRight, GlobalStyle } from './style';


function App() {
  return (
    
    <Container>
      <GlobalStyle/>
    <Header>
      <img src="https://pbs.twimg.com/profile_images/1413183413322928134/IQQZwt7g_400x400.jpg" alt="Logo" />
      <span>Whatslab</span>
    </Header>
    <Main>
      
      <Midpage>
      <InputArea/>
      </Midpage>
      
    </Main>
    <Footer>
      <p>Copyright © 2022 Labenu All rights reserved, R Pais Leme, 215, Conjunto 820 Pinheiros, CEP 05424-150</p>
    </Footer>
    </Container>
    
  );
}

export default App;
