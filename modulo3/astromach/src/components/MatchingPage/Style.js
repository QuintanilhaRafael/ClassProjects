import styled from 'styled-components';


export const MatchingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        .no {
            color: gray;
            font-size: 45px;

            :hover {
                color: red;
                text-shadow:0px 0px 30px red;
                -moz-transition: all 0.1s ;
                -o-transition: all 0.1s ;
                -webkit-transition: all 0.1s ;
                transition: all 0.1s ;
            }
            
        }



        .yes {
            color: gray;
            font-size: 40px;

            :hover {
                color: limegreen;
                text-shadow:0px 0px 30px limegreen;
                -moz-transition: all 0.1s ;
                -o-transition: all 0.1s ;
                -webkit-transition: all 0.1s ;
                transition: all 0.1s ;
            }
            
        }

    button {
        background: transparent;
        border: none !important;
        color: gray;
    }

    button:hover {
        cursor: pointer;
    }

    }

`

