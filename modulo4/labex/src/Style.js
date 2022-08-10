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

export const GenericContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const GenericDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px black;


    button {
        background: transparent;
        border: none !important;
        color: gray;
        cursor: pointer;
        margin: 5px;
        padding: 5px;
        background: orange;
        border-radius: 5px;

        :hover {
            color: black;
            text-shadow:0px 0px 30px orange;
            -moz-transition: all 0.1s ;
            -o-transition: all 0.1s ;
            -webkit-transition: all 0.1s ;
            transition: all 0.1s ;
        }
    }

`
