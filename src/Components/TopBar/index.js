import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/contextAPI.js";
import { Container, Image, User } from "./style";

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
            
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}> 
            <h2> opaaa </h2>
                <User onClick={desloga}>
                    x
                </User>
            </div>

        </Container>
    )
}

export default TopBar;