import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),URL(${(props) => props.backgroundImg});
    border-radius: 10px;
    height: 120px;
    margin-top: 20px;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;

    h1{
        color: white;
        display: flex;
        margin-left: 20px;
        align-items: center;
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

export const Input = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1%;
width: 80%;
#name-user{
  font-size: 20px;
}
input {
  background: #C2D2CA;
  border-radius: 5px;
  border: 1px solid #C2D2CA;
  height: 45px;
  width: 100%;
  padding: 10px;
  margin-bottom: 1%;
}
@media (min-width: 2560px) and (max-width: 3000px){
  input{
    width: 100%;
  }
}
@media (min-width: 1920px) and (max-width: 2500px){
  input{
    width: 100%;
  }
}
@media (min-width: 1440px) and (max-width: 1800px){
  #name-user{
  font-size: 18px;
}
  input{
    width: 100%;
    height: 55px;
    padding: 5px;
    font-size: 16px;
  }
}
@media (max-width: 768px){
  margin-bottom: 10px;
  #name-user{
    font-size: 20px;
  }
  input{
    width: 100%
  }
}
@media (max-width: 425px){
  #name-user{
    font-size: 18px;
    
  }
  input{
    width: 100%;
  }
}
@media (max-width: 375px){
  input{
    width: 100%;
  }
}
@media (max-width: 360px){
  #name-user{
    font-size: 16px;
  }
  input{
    width: 100%;
  }
}
@media (max-width: 320px){
#name-user{
  font-size: 14px;
}
input{
  width: 100%;
}
}
`;