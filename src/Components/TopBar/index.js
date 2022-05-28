import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/contextAPI.js";
import { Container, Image, User } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const TopBar = () => {

    const { desloga } = useContext(Context);

    // const [medico, setMedico] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const response = await http.get(`/pediatra/${getId()}`);
    //         console.log(response.data);
    //         setMedico(response.data);
    //     })();
    // }, []);

    return (
        <Container>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <h2 style={{ color: "white", marginRight: '1200px', marginLeft: '0px' }}> opaaa </h2>
                <User onClick={desloga}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </User>
            </div>

        </Container>
    )
}

export default TopBar;