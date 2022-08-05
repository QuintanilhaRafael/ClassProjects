import styled, { createGlobalStyle } from "styled-components";


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
align-items: center;
justify-content: center;
min-height: 100vh;
`

export const PageContainer = styled.div`
display: flex;
border: solid 1px gray;
padding: 15px;
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px whitesmoke;
width: 100%;

button {
    margin-right: auto;
}


h3 {
    display: flex;
    margin-right: auto;
    margin-bottom: 15px;
    margin-top: 15px;
    font-size: 25px;
}

p {
    color: gray;
}

span {
    color: orange;
}
`
