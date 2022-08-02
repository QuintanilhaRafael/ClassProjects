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
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: orange;

    h2 {
        margin-bottom: 15px;
    }


`

export const MainContainer = styled.div`
    display: flex;
    background-color: grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border:solid 1px whitesmoke;
    padding: 15px 15px;
    border-radius: 10px;

    .flipScr {

    background-color: skyblue;
    align-self: flex-start;
    border: none;
    border-radius: 10px;
    padding: 5px 5px;
    cursor: pointer;
    margin: 0px 0px 10px 0px;
  

  :hover {
    outline: none !important;
    border:0px solid skyblue;
    box-shadow: 0 0 10px #719ECE;
    
  }
    }
`

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;

    span {
        color: gainsboro;
        margin-bottom: 35px;
        margin-top: -47px;
        font-style: italic;
    }
`

export const User = styled.li`
    display: flex;
    width: 100%;
    justify-content: space-between;

    button {
    background: transparent;
    border: none !important;
    font-size: 19px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 5px;
    }

    button:hover {
    opacity: 0.6;
    cursor: pointer;
    color: skyblue;
  
    }


`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

  button {
    background-color: skyblue;
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    cursor: pointer;
    margin: 50px 0px 10px 0px;
  }

  button:hover {
    outline: none !important;
    border:0px solid skyblue;
    box-shadow: 0 0 10px #719ECE;
    
  }

  span {
    color: gainsboro;
    margin-bottom: 35px;
    margin-top: -33px;
    font-style: italic;
  }

`

export const InputSearchList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 55px;

    input {
        align-self: center;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid black;
    background-color: whitesmoke;
    margin: 5px 0;
}

input:focus {
    outline: none !important;
    border:1px solid whitesmoke;
    box-shadow: 0 0 10px #719ECE;
    
  }

  button {
    background-color: skyblue;
    border: none;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    margin: 0px 0px 0px 10px;
  }

  button:hover {
    outline: none !important;
    border:0px solid skyblue;
    box-shadow: 0 0 10px #719ECE;
    
  }
`

export const UserInfoScr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        align-self: flex-start;
    }

    input {
    border-radius: 5px;
    padding: 5px;
    border: 1px solid black;
    background-color: whitesmoke;
    margin: 5px;
}

input:focus {
    outline: none !important;
    border:1px solid whitesmoke;
    box-shadow: 0 0 10px #719ECE;
    
  }

  button {
    background-color: skyblue;
    border: none;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    margin: 5px;
  }

  button:hover {
    outline: none !important;
    border:0px solid skyblue;
    box-shadow: 0 0 10px #719ECE;
    
  }

  .buttonBack {
    margin-top: -48px;
    margin-left: 180px;
    margin-right: -15px;
  }
`