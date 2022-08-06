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
flex-direction: column;
border: solid 1px gray;
border-radius: 5px;
padding: 15px;
background: #E5E5E5;
min-width: 400px;
max-width: 400px;
min-height: 580px;
max-height: 580px;
overflow:hidden;
overflow-y:scroll;

::-webkit-scrollbar {
width: 10px;
}

::-webkit-scrollbar-track {
    width: 10px;
    border-radius: 15px;
    margin-block: 5px;
}

::-webkit-scrollbar-thumb {
    width: 10px;
    background: darkgrey;
    border-radius: 15px;
}
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px orange;
width: 100%;

button {
    background: transparent;
    border: none !important;
    color: gray;
    font-size: 20px;
}

button:hover {
    opacity: 0.8;
    cursor: pointer;
}

.orange {
    color:orange
}


h3 {
    display: flex;
    align-items: center;
    margin: auto;
    margin-bottom: 15px;
    margin-top: 15px;
    font-size: 30px;
}

p {
    color: gray;
}

span {
    color: orange;
    font-size: 35px;
}
`
