import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  //  margin-top: -10%;
  //  border-radius: 10px;
`;



export const ButtonAdd = styled.div`
    display: flex;
    position:fixed;
    border: 1px solid transparent;
    padding: 1px 5px;
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
    margin-right: 15%;
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