import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
    }
    button { 
        margin-top: 20px;
        margin-bottom: 20px;
        width: 15%;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
        background-color: #70448B;
        color: white;
        font-weight: bold;
    }
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: white;
    
    h2 {
        font-size: 12px;
        margin-left: 10px;
        margin-bottom: 1px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }
    input { 
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #0E1E5B;
        border-radius: 5px;
        height: 45px;
        width: 20vw;
        padding: 10px;
        border: 1px solid #0E1E5B;
        color: white;
    }
`;