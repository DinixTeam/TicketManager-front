import React, { useEffect, useState } from "react";
import http from "../../Services/httpRequest";
import { Container } from "./style";

const Ingresso = ({data}) => {

    const [evento, setEvento] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await http.get(`/readoneevento/${data.idevento}`);
          console.log(response.data);
          setEvento(response.data);
        })();
      }, []);
    
    return(
        <Container>
            <h1>
                {evento.titulo}
            </h1>
            <h2>
                {evento.descricao} - {data.tipoIngresso}
            </h2>
            <h3 style={{marginTop: '20px'}}>
                Valor Total: {data.valorFinal}     Quantidade de Ingressos: {data.quantidade}
            </h3>
            {data.foiPago ? <h4 style={{marginTop: '10px', color: 'green'}}>
               Status: Pago
            </h4> : null}
            
        </Container>
    )
}

export default Ingresso;