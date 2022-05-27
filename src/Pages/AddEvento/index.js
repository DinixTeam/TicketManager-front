import React from "react";
import { Container } from "../Home/style";
import bgImg from "../../Assets/champions.jpg";
import FormAddEvento from "../../Components/FormAddEvento";
import TopBar from "../../Components/TopBar";

const AddEvento = () => {
    return(
        <Container backgroundImg={bgImg}>
            <TopBar />
            <FormAddEvento />
        </Container>
    )
}   

export default AddEvento;