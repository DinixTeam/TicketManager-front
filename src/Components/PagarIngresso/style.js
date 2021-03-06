import styled from 'styled-components';



export const Form = styled.div`
    grid-area: CS;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    align-items: center;
    width: 50%;
    min-height: 300px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06)), rgba(0, 8, 34, 0.6); 
    border-radius: 20px;
    opacity: 6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: auto;
    padding: 10px;
    margin-top: 1%;
    color: white;
    margin-bottom: 3%;
    
    
    h1 {
        margin-top: 30px;
        font-size: 23px;
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
    padding: 30px;
    margin-bottom: 10px;
    //width: 50%;

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
        height: 35px;
        width: 20vw;
        padding: 10px;
        margin-left: 10px;
        border: 1px solid #0E1E5B;
        color: white;
    }
`;

export const Linha = styled.div`
    width: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: 'space-between';
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const ButtonAdd = styled.div`
    display: flex;
    /* position:fixed; */
    border: 1px solid transparent;
    padding: 10px 20px;
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
    width: 35%;
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

export const ModalInfo = styled.div`
  padding: 5%;
  width: 50vw;
  height: auto;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 75vw;
    display: flex;
    flex-direction: column;
    h1{
      text-align: center;
    }
  }
  @media (max-width: 400px) {
    width: 80vw;
    h1{
      font-size: 25px;
      text-align: center;
    }
  }
  h1{
      margin-bottom: 20px;
  }
  button {
    justify-content: center;
    background: var(--primary);
    border-radius: 40px;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 3.5px 10px;
    width: 30%;
    margin-top: 20px;
    
    font-family: var(--font-familyS);
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: white;
    /* identical to box height */
    :hover{
      border: 1px solid #006A58;
      background: #006A58;
      color: #FFF;
      transition: all linear 0.3s;
    }
    @media (max-width: 1024px) {
      width: auto;
    }
    @media (max-width: 768px){
      font-size: 20px;
    }
    @media (max-width: 425px){
      font-size: 18px;
    }
    @media (max-width: 320px){
      font-size: 16px;
    }
    
  }
  
`;