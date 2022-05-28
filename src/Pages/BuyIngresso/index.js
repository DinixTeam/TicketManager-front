import React from "react";
import { Container, Grid } from "./style";
import bgImg from "../../Assets/224-2246637_big.jpg";
import Compraringresso from "../../Components/ComprarIngresso";
import TopBar from "../../Components/TopBar";

const BuyIngresso = () => {
    return (
        <Grid backgroundImg={bgImg}>
            <TopBar />
            <Compraringresso />
        </Grid>

    );

}

export default BuyIngresso;