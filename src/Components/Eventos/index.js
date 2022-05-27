import React from "react";
import { Container } from "./style";
import bgImg from "../../Assets/uefa.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Eventos = ({data}) => {
    return(
        <Container backgroundImg={bgImg}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>
                    {data.titulo}
                </h1>
                <h2 style={{color: 'white'}}>
                    {data.local.localName}<h2 style={{fontSize: '10px'}}>{data.data}</h2>
                </h2>
            </div>

                <div style={{diplay: 'flex', flexDirection: 'row'}}>
                     <div style={{color: 'white', marginBottom: '10px'}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                    <div style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                   
                </div>
              
               
        </Container>
    )
}

export default Eventos;