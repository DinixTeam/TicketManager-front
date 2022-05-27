import React from "react";
import { Container } from "./style";
import bgImg from "../../Assets/uefa.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Eventos = () => {
    return(
        <Container backgroundImg={bgImg}>
                <h1>
                    time 1 x time 2 - xx/xx/xxxx
                </h1>
                <div style={{diplay: 'flex', flexDirection: 'row'}}>
                    <div style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <div style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>
              
               
        </Container>
    )
}

export default Eventos;