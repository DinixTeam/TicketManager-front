import React from "react";
import Pagaringresso from "../../Components/PagarIngresso";
import TopBar from "../../Components/TopBar";
import { Grid } from "../Pagar/style";
import bgImg from "../../Assets/224-2246637_big.jpg";

const Pagar = () => {

    return (
        <Grid backgroundImg={bgImg}>
            <TopBar />
            <Pagaringresso />
        </Grid>
    );
}

export default Pagar;