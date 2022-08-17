import styled from 'styled-components';

export const ListContainer = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`

export const ListItem = styled.div`
    display: flex;
    align-items: center;

    :hover {
        cursor: pointer;
        outline: none !important;
        border:0px solid #E5E5E5;
        border-radius: 15px;
        box-shadow: 0 0 10px black;
    }

    img {
        width: 45px;
        height: 45px;
        margin: 10px;
        border-radius: 50%;
        object-fit: cover;
    }

    p {
        font-family: monospace;
        font-size: 20px;
        font-weight: 650;
    }
`