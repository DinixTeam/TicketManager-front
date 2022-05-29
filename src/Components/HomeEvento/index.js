import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { getId } from "../../Services/auth";
import http from "../../Services/httpRequest";
import Eventos from "../Eventos";
import { Container } from "./style";

const HomeEvento = () => {

    const [eventos, setEventos] = useState([]);
    const [user, setUser] = useState([])
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
          const respo = await http.get(`/user/${getId()}`);
          console.log(respo.data);
          setUser(respo.data);
        })();
      }, []);


   
    return(
        <Container>
            {eventos.map((item, index) => {
                return(
                    <Eventos data={item} key={index}/>
                )
            })}
            {user.isOrganizador ?  <button onClick={linkAddEvento}>
                Adicionar Evento
            </button> : null}
           
        </Container>
    )
}

export default HomeEvento;