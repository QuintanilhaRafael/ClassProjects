import React from "react";
import Router from "./Components/Router";
import { Container, GlobalStyle } from "./Style";


function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Router/>
    </Container>
  );
}

export default App;
