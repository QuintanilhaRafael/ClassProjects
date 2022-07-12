import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const Container = styled.div`
display: flex;
min-height: 100vh;
`

export const Main = styled.main`
display: flex;
flex: 1 ;
justify-content: center;
align-items: center;
background-color: orange;
`

export const FormStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p {
  font-weight: 700;
  color: red;
  font-size: 30px;
  margin-top: 20px;
}

img {
  width: 60px;
}
`

export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: black solid 1px;
padding: 50px;
border-radius: 10px;
background: gray;

button {
    border-radius: 50%;
    background: transparent;
    border: none !important;
    margin-top: 25px;

    i {
      font-size: 20px;
    }
    
}

button:hover {
  opacity: 0.6;
  cursor: pointer;
  
}

input {
    border-radius: 5px;
    padding: 10px;
    border: 1px solid black;
    background-color: whitesmoke;
    margin: 5px 0;
}

input:focus {
    outline: none !important;
    border:1px solid whitesmoke;
    box-shadow: 0 0 10px #719ECE;
    
  }

  select {
    padding: 3px;
    border-radius: 5px;
    font-weight: 600;
    border: 1px solid black;
    color: grey;
    background: #B4DEE8;
    margin: 10px;
    text-align: center;


    option {
        border-radius: 15px;
        font-weight: 550;
    }
  }

  select:focus {
    outline: none !important;
    border:1px solid whitesmoke;
    box-shadow: 0 0 10px #719ECE;
    
  }
  
`

export const InputStyle = styled.input`
width: 350px ;
`

export const LogoStyle = styled.div`
display: flex;
align-items: center;

img {
  margin-bottom: 25px;
  margin-right: 5px;
}
`