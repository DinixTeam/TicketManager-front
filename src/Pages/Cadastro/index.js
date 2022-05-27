import React from "react";
import FormLogin from "../../Components/FormLogin";
import { Container } from "./style";
import bgImg from "../../Assets/league.jpg";
import FormRegister from "../../Components/FormRegister";


const Cadastro = () => {
    return(
        <Container backgroundImg={bgImg}>
            <FormRegister />
        </Container>
    )
}

export default Cadastro;