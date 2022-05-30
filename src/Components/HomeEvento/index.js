import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { getId } from "../../Services/auth";
import http from "../../Services/httpRequest";
import Eventos from "../Eventos";
import { Container } from "./style";

const HomeEvento = () => {

    const [eventos, setEventos] = useState([]);
    const [user, setUser] = useState([]);
    const [eventoOrg, setEventoOrg] = useState([])
    const history = useNavigate();

    const linkAddEvento = () => {
        history('/addevento');
        window.location.reload();
    }

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/readeventos`);
          setEventos(response.data);
          const respo = await http.get(`/user/${getId()}`);
          setUser(respo.data);
        })();
      }, []);

      useEffect(() => { 
        (async () => {
          const response = await http.get(`/readeventofromorganizador/${getId()}`);
          setEventoOrg(response.data);
        })();
      }, []);



   
    return(
        <Container>
            {user.isOrganizador ? <div style={{width: '100%'}}>
                {eventoOrg.map((item, index) => {
                return(
                    <Eventos data={item} key={index}/>
                )
            })}
            </div> : user.isCliente ?
            <div style={{width: '100%'}}>
                      {eventos.map((item, index) => {
                return(
                    <Eventos data={item} key={index}/>
                )
            })}
                </div> : null}
          
            {user.isOrganizador ?  <button onClick={linkAddEvento}>
                Adicionar Evento
            </button> : null}
           
        </Container>
    )
}

export default HomeEvento;