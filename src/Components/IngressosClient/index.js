import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getId } from "../../Services/auth";
import http from "../../Services/httpRequest";
import Ingresso from "../Ingresso";
import { Container, ButtonAdd } from "./style";

const IngressosClient = () => {

    const navigate = useNavigate();
    const [ingresso, setIngress] = useState([])
    useEffect(() => {
        (async () => {
            const response = await http.get(`/readingressosfromuser/${getId()}`);
            console.log(response.data);
            setIngress(response.data);
        })();
    }, []);

    return (
        <Container>

                 {ingresso.map((item, index) => {
                     return(
                        <Ingresso data={item} key={index} />
                     )
                 })}
            <ButtonAdd style={{width:'250px', marginRight:'0px', marginLeft:'-25px'}} onClick={e => navigate(-1)}>
                        Voltar
            </ButtonAdd>
        </Container>

    )
}

export default IngressosClient;