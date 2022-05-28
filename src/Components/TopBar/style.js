import styled from 'styled-components';

export const Container = styled.div`
    grid-area: TB;
    display: flex;
    /* background-color: transparent; */
    background-size: cover;
    place-items: center;
    justify-content: end;
    position: initial;
    width: 100%;
    height: 90px;
    h2 {
        color: white;
        font-weight: bold;
        font-size: 20px;
        margin-left:600px;
        margin-top: 8px;
        margin-right: 8px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }
    div {
        display: 'flex';
        flex-direction: 'row';
        justify-content: 'space-between'
    }
`;



export const Image = styled.img`
    width: 30px;
    height: 30px;
    background-image: URL(${(props) => props.backgroundImg});
`;

export const User = styled.div`
    background-color: var(--secondary);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;