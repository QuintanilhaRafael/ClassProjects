import Form from './components/Form/Form';
import { Container, FormStyle, GlobalStyle, Main, LogoStyle } from './style';
import Logo from './img/Meu projeto.png'

function App() {




  return (
    <Container>
      <GlobalStyle/>
      <Main>
        <FormStyle>
          <LogoStyle>
          <img src={Logo} alt="logo" />
          <h1>LabeForm</h1>
          </LogoStyle>
          <Form/>
        </FormStyle>
      </Main>
    </Container>
  );
}

export default App;
