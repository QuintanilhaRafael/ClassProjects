import styled from 'styled-components'
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
flex-direction: column;
min-height: 100vh;

`

export const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
top: 100%;
position: sticky;
background: grey;
font-size: 20px;

`

export const Main = styled.main`
display: flex;
flex: 1 ;
justify-content: center;
background-color: orange;
box-shadow: 8px 4px 8px 8px rgb(42, 42, 42);

`



export const Midpage = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
width: 40%;
min-width: 360px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.70), 0 4px 8px 0 rgba(0, 0, 0, 0.70);
background-image: url(https://i.pinimg.com/564x/98/da/8f/98da8f9306de27424460d16e53938b72.jpg);
border-radius: 5px;
margin-bottom: 1px;

`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
font-weight: 700;

  img {
    width: 120px;
  }
`

export const ImputSectionContainer = styled.form`
display: flex;
justify-content: center;
align-items: center;
margin: 15px 10px;
width: 100%;

 
input {
    margin-right: 5px;
    border-radius: 15px;
    padding: 10px;
    border: 1px solid black;
    background-color: whitesmoke;
}

input:focus {
    outline: none !important;
    border:1px solid black;
    box-shadow: 0 0 10px #719ECE;
    
  }

button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: transparent;
    border: none !important;
    margin: 0 5px;

    i {
      font-size: 20px;
    }
    
}

button:hover {
  opacity: 0.6;
  cursor: pointer;
  
}

`

export const InputMsg = styled.input`
width: 60%;
height: 35px;
min-width: 200px;

`

export const InputSender = styled.input`
width: 20%;
height: 35px;
min-width: 60px;

`

export const ChatContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const MsgBox = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
border-radius: 10px;
padding: 15px;
margin: 15px 30px;
box-shadow: 0 4px 8px 0 rgb(83, 82, 82);
background: ${(props)=>props.cor};
min-width: 120px;
max-width: 75%;
-ms-hyphens: auto;
-moz-hyphens: auto;
-webkit-hyphens: auto;
hyphens: auto;
overflow-wrap: break-word;
word-wrap: break-word;
 ${(props)=> {
  if (props.lado === 'direito') {
    return 'align-self: flex-end;'
  }
 }}

p {
  font-weight: 650;
  margin-bottom: 5px;
  font-style: italic;
}

span {
  max-width: 95%;
}
`

export const MsgContainer = styled.div`
display: flex;
flex-direction: column;

`



