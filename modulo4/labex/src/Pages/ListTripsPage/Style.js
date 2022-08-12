import styled from 'styled-components';

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 15px;
border: solid darkgray 1px;
border-radius: 15px;
width: 60%;
margin: 15px;

span {
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin: 5px;

  p{
    font-weight: 700;
    color: darkgray;
    margin: 5px;
  }
}
`
