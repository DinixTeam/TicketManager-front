import styled from 'styled-components';



export const Form = styled.div`
    grid-area: CS;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    /* width: 100%; */
    min-height: 500px;
    /* background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0E1E5B; */
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06)), rgba(0, 8, 34, 0.6);
    border-radius: 20px;
    opacity: 6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: auto;
    padding: 20px;
    //margin-top: 3%;
    color: white;
    
    
    h1 {
        margin-top: 10px;
        margin-bottom: -50px;
        font-size: 20px;
    }

    h3 {
        margin-top: 10px;
        font-size: 15px;
        margin-left: -55px;
    }
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
        margin-left: 10px;
        border: 1px solid #0E1E5B;
        color: white;
    }
`;

export const Linha = styled.div`
    width: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: 'space-between';
    margin-bottom: '10px';
`;

export const ButtonAdd = styled.div`
    display: flex;
    /* position:fixed; */
    border: 1px solid transparent;
    padding: 10px 10px;
    margin-top: 10px;
    margin-left: 150px;
    background-color: #0E1E5B;
    color: white;
    height: 30px;
    border-radius: 20px;
    bottom: 10px;
    font-size: 1.3vw;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    text-align: center;
    /* align-self: flex-end; */
    width: 30%;
    margin-right: 30%;
    cursor: pointer;
    :hover{
      transition: all linear 0.3s;
      color: #E5F3ED;
      background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #949393;
    }
   
    @media (max-width: 1310px) {
        width: 18%;
        font-size: 1.2vw;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        width: 30%;
        font-size: 1.8vw;
    }
`;