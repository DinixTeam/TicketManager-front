import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    min-height: 350px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0E1E5B;
    border-radius: 20px;
    margin: auto;
    padding: 10px;
    margin-top: 15%;
    color: white;

`;

export const Image = styled.img`
  
`;

export const Button = styled.div`
    background: #70448B;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    width: 50%;
    text-align: center;
    display: flex;
    border: 1px solid transparent;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
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
    }
`;