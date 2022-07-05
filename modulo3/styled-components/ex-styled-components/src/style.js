import styled from 'styled-components'



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
flex: 1;

`

export const OrangeLeft = styled.nav`
background: orange;
width: 15%;

`

export const OrangeRight = styled.aside`
background: orange;
width: 15%;

`

export const Midpage = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
width: 70%;

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

export const ImputSectionContainer = styled.div`
display: flex;
justify-content: center;
margin: 15px 0;
flex-wrap: wrap;
 
input {
    margin-right: 15px;
}

span {
    margin-right: 15px;
}

button {
    width: 10vw;
    min-width: 80px;
}

`

export const InputMsg = styled.input`
width: 25vw;

`

export const InputSender = styled.input`
width: 10vw;

`