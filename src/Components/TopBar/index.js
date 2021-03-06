import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/contextAPI.js";
import { Container, Image, User } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import http from "../../Services/httpRequest.js";
import { getId } from "../../Services/auth.js";
import { useNavigate } from "react-router-dom";
const TopBar = () => {

    const { desloga } = useContext(Context);
    const [user, setUser] = useState([]);
    const history = useNavigate();
  
    useEffect(() => { 
        (async () => {
          const response = await http.get(`/user/${getId()}`);
          console.log(response.data);
          setUser(response.data);
        })();
      }, []);

      console.log(user.username)

      const linkIngresso = () =>{
        history(`/ingressos`)
    }

    return (
        <Container>
                <h2 style={{ color: "white",  marginLeft: '30px' }}> {user.username} </h2>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                {user.isCliente ?
                    <User onClick={linkIngresso}>
                        <FontAwesomeIcon icon={faTicketAlt} />
                    </User>
                    : null
                }
                <User onClick={desloga}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </User>
                </div>
               
        </Container>
    )
}

export default TopBar;