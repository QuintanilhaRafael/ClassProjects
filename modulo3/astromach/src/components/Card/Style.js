import styled from 'styled-components';
import { MatchingContainer } from './../MatchingPage/Style';

export const CardContainer = styled.div`
    display: flex;
    width: fit-content;
    background-color: gray;
    margin: 25px;
    box-shadow: 0 0 15px black;


img {
    object-fit: cover;
    width: 280px;
    height: 370px;
    
}
`

export const Descriptions = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-self: flex-end;
    width: 230px;
    color: white;
    text-shadow: 0 0 3px black;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
           line-clamp: 3; 
   -webkit-box-orient: vertical;
   margin-bottom: 15px;
   margin-left: 10px;
  
`

export const ButtonClear = styled.button`
    display: flex;
    background: darkgray;
    padding: 15px;
    border: none !important;
    border-radius: 10px;
    margin: 160px 0px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    color: gray;
    box-shadow: 0 0 5px black;

    :hover {
        opacity: 0.8;
    }

    p {
        margin-left: 5px;
        color: orange;
    }
`