import styled from 'styled-components';

export const ListContainer = styled.li`
display: flex;
flex-direction: column;
`

export const ListItem = styled.div`
display: flex;
align-items: center;

:hover {
    cursor: pointer;
    opacity: 0.8;
}

img {
    width: 45px;
    height: 45px;
    margin: 10px;
    border-radius: 50%;
}

p {
    font-family: monospace;
    font-size: 20px;
    font-weight: 650;
}
`