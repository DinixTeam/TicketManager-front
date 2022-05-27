import React from "react";
import { Container } from "./style";
import bgImg from "../../Assets/league.jpg";
import TopBar from "../../Components/TopBar";
import HomeEvento from "../../Components/HomeEvento";

const Home = () => {
    return(
        <Container backgroundImg={bgImg}>
            <TopBar />
            <HomeEvento />
        </Container>
    )
}

export default Home;