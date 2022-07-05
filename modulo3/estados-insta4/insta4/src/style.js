import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    list-style: none;
  }

`

export const MainContainer = styled.div`
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
  

`

export const CommentContainer = styled.div`
  
    display: flex;
    justify-content: center;
    padding: 5px
  

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
    padding-left: 10px
`

export const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between
`


