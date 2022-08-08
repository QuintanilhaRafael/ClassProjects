import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px gray;
    border-radius: 5px;
    padding: 25px;
    background: #E5E5E5;
    width: 50%;
    max-width: 1000px;
    min-width: 370px;
    flex-wrap: wrap;

    button {
        display: flex;
        align-items: center;
        background: transparent;
        border: none !important;
        color: gray;
        font-size: 20px;
        align-self: flex-start;
        margin-bottom: 15px;
        font-size: 30px;

        p {
            margin-left: 15px;
            font-size: 15px;
            font-weight: 700;
        }

        i {
            margin-bottom: 5px;
        }
    }

    button:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    img {
        object-fit: cover;
        width: 280px;
        height: 370px;
        border-radius: 5px;
    }

    h1 {
        align-self: flex-start;
        margin-right: 25%;
        margin-bottom: auto;
    }

    .inline {
        @import url('https://fonts.googleapis.com/css?family=Special+Elite');
        display: flex;
        flex-direction: column;
        font-family: 'Special Elite', cursive;
        align-items: center;
        justify-content: center;
        width: 100%;

    }

    span {
        font-weight: 100;
        font-size: 2rem;
        max-width: 500px;
        line-height: 1.0;
        position: relative;
        margin-bottom: 35px;
        margin-right: 55px;
        margin-left: 55px;
        padding: 15px;
        padding-right: 45px;
}

span:before,
span:after {
	position: absolute;
	color: darkgray;
	font-size: 6rem;
	width: 4rem;
	height: 4rem;
}

span:before {
	content: '“';
	left: -3rem;
	top: -2rem;
}

span:after {
	content: '”';
	right: -4rem;
	bottom: -2rem;
}

p {
    font-size: 35px;
	line-height: 3;
	text-align: left;
}

.block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`