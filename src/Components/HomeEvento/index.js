import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import http from "../../Services/httpRequest";
import Eventos from "../Eventos";
import { Container } from "./style";

const HomeEvento = () => {

    const [eventos, setEventos] = useState([]);
    const history = useNavigate();

    const linkAddEvento = () => {
        history('/addevento');
        window.location.reload();
    }

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/readeventos`);
          console.log(response.data);
          setEventos(response.data);
        })();
      }, []);

   
    return(
        <Container>
            {eventos.map((item, index) => {
                return(
                    <Eventos data={item}/>
                )
            })}
            <button onClick={linkAddEvento}>
                Adicionar Evento
            </button>
        </Container>
    )
}

export default HomeEvento;