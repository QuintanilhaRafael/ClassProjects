import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

html {
    width:100vw;
    overflow-x:hidden;
}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    input {
    margin-right: 5px;
    border-radius: 15px;
    padding: 6px;
    border: 1px solid black;
    background-color: whitesmoke;
}

input:focus {
    outline: none !important;
    border:1px solid black;
    box-shadow: 0 0 10px #719ECE;
    
  }
    


`

export const Header = styled.header`
display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgb(83, 82, 82);
    max-height: 10vh;

    h1 {
        margin-left: 47%;
        text-shadow: 2px 2px 4px orange;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`

export const GenericContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: 90vh;
img {
    width: 50%;
}
`

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;


    button {
        background: transparent;
        border: none !important;
        color: gray;
        cursor: pointer;
        margin: 15px 5px;
        padding: 10px;
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

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 15px;
border: solid 2px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 15px;
margin: 15px;
width: 400px;
background-image: linear-gradient(to left, gray, darkgray, white);

div {
    display: flex;
    align-items: center;
    justify-content: center;
}

li {
    display: flex;
    align-items: center;
    justify-content: center;
}

p {
    text-shadow: 2px 2px 4px black;
}



span {
  display: flex;
  align-items: center;
  margin: 5px;
  max-width: 600px;
  word-break: break-word;

  p {
    font-weight: 700;
    margin: 5px;
    min-width:100px;
  }
}

button {
    width: 100px;
    align-self: center;
}
`

export const GreenButton = styled.button`

    background: whitesmoke;
    border: solid 2px green;
    border-radius: 15px;
    color: black;
    margin: 10px;
    

    :hover {
        cursor: pointer;
        color: white;
        box-shadow: 0 5px 35px limegreen;
        background: limegreen;
        border: solid 2px limegreen;
        scale: 1.3;
            
    }
`

export const RedButton = styled.button`

    background: whitesmoke;
    border: solid 2px red;
    border-radius: 15px;
    color: black;
    margin: 10px;
    

    :hover {
        cursor: pointer;
        color: white;
        box-shadow: 0 5px 35px red;
        background: red;
        border: solid 2px red;
        scale: 1.3;
            
    }
`

export const GenericDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img {
    align-self: center;
}

h1 {
    text-shadow: 2px 2px 4px orange;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: solid 1px orange;
padding: 75px 50px;
border-radius: 15px;
background: gray;

select {
    margin-top: 15px;
    text-align: center;

}


h1 {
    margin-top: -35px;
    margin-bottom: 30px;
}

input {
    width: 200px;
    text-align: center;
    margin: 3px;
}

button {
        background: whitesmoke;
        border: solid 2px darkgray;
        border-radius: 15px;
        padding: 10px 40px;
        color: black;
        margin-top: 20px;
        margin-bottom: -35px;
    }

    button:hover {
        cursor: pointer;
        color: white;
        box-shadow: 0 5px 35px limegreen;
        background: limegreen;
        border: solid 2px limegreen;
            
    }
`

export const TripsContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
padding: 35px;
text-shadow: 2px 2px 4px black;
letter-spacing: 3px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 650;

h1 {
    align-self: center;
    margin-bottom: 25px;
}


`

export const TripsDiv = styled.div`
display: flex;
justify-content: space-between;

button {
    margin-left: 15px;
    cursor: pointer;
    background: transparent;
    border: none !important;
    font-size: 20px;
    
}

button:hover {
        cursor: pointer;
        color: red;
            
    }

span {
    cursor: pointer;
    margin: 15px 0px;
}

span:hover {
    opacity: 0.8;
}

`

export const ApprovedListContainer = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: solid 2px black;
background-image: linear-gradient(to left, gray, darkgray, white);
border-radius: 15px;
padding: 50px;
margin-top: 20px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
width: 600px;

li {
    text-shadow: 2px 2px 4px black;
    font-size: 25px;
}
`
