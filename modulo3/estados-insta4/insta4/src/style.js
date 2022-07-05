import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    margin-left: calc(100vw - 100%);
  }

  body {
    box-sizing: border-box;
    list-style: none;
  }

`

export const MainContainer = styled.div`
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  

`

export const CommentContainer = styled.div`
  
    display: flex;
    justify-content: center;
    padding: 5px;
  

`

export const InputComentario = styled.input`
  
    width: 100%;
    margin-right: 5px;
  

`

export const ListItem = styled.li`
    display:flex;
`

export const PostContainer = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`

export const PostHeader = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`

export const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

export const PostPhoto = styled.img`
    width: 100%;
`


export const IconContainer = styled.div`
    display: flex;
`

export const IconImage = styled.img`
    margin-right: 5px;
`

export const IconContainerNew = styled.div`
    display: flex;
    flex-direction: column;
`

export const DropDownStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    margin-top: 24px;
    transform: translateX(-5%);
`

export const DropDownItem = styled.div`
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: solid 1px;
        padding: 5px;
        background-color: whitesmoke;

        i {
            font-size: 30px;
            margin-right: 10px;
        }
`





