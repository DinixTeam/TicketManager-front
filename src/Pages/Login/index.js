import React from "react";
import FormLogin from "../../Components/FormLogin";
import { Container } from "./style";
import bgImg from "../../Assets/league.jpg";


const Login = () => {
    return(
        <Container backgroundImg={bgImg}>
            <FormLogin />
        </Container>
    )
}

export default Login;