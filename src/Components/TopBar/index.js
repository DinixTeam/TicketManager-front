import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/contextAPI.js";
import { Container, Image, User } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import http from "../../Services/httpRequest.js";
import { getId } from "../../Services/auth.js";
const TopBar = () => {

    const { desloga } = useContext(Context);
    const [user, setUser] = useState([]);
  
    useEffect(() => { 
        (async () => {
          const response = await http.get(`/user/${getId()}`);
          console.log(response.data);
          setUser(response.data);
        })();
      }, []);

      console.log(user.username)


    return (
        <Container>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <h2 style={{ color: "white", marginRight: '1200px', marginLeft: '0px' }}> {user.username} </h2>
                <User onClick={desloga}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </User>
            </div>

        </Container>
    )
}

export default TopBar;