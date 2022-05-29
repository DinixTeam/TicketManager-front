import React from "react";
import { Container, Ingresso, ButtonAdd } from "./style";
import { useNavigate } from "react-router-dom";

const IngressosClient = () => {

    const navigate = useNavigate();
    return(
             <Container>
            <Ingresso>

            </Ingresso>
            <Ingresso>

            </Ingresso>
            <ButtonAdd style={{width:'250px', marginRight:'0px', marginLeft:'-25px'}} onClick={() => navigate(-1)}>
                        Voltar
            </ButtonAdd>
        </Container>
       
    )
}

export default IngressosClient;