import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   button{
    display: flex;
    flex-direction: row;
    position:fixed;
    border: 1px solid transparent;
    padding: 1px 5px;
    margin-top: 10px;
    background-color: #D190EE;
    color: white;
    height: 40px;
    border-radius: 20px;
    bottom: 10px;
    font-size: 1.3vw;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    text-align: center;
    align-self: flex-end;
    width: 16%;
    margin-right: 42%;
    cursor: pointer;
    :hover{
      transition: all linear 0.3s;
      color: #E5F3ED;
      background: linear-gradient(0deg, rgba(229, 243, 237, 0.2), rgba(229, 243, 237, 0.2)), #D190EE;
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
   }
`;