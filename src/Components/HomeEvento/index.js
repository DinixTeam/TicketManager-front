import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../Services/httpRequest";
import Eventos from "../Eventos";
import { Container } from "./style";

const HomeEvento = () => {

    const [eventos, setEventos] = useState([]);
    const history = useHistory();

    const linkAddEvento = () => {
        history.push('/addevento');
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