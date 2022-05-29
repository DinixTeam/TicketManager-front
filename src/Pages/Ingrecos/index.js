import React from "react";
import IngressosClient from "../../Components/IngressosClient";
import TopBar from "../../Components/TopBar";
import {  Container, Grid } from "../BuyIngresso/style";
import bgImg from "../../Assets/224-2246637_big.jpg";

const Ingressos = () => {
    return(
        <Container backgroundImg={bgImg}>
            <TopBar/>
            <IngressosClient/>
        </Container>
    )
}

export default Ingressos;