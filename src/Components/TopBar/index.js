import React, { useContext, useEffect, useState } from "react";
import { Container, Image, User } from "./style";
import add from "../../Assets/add_icon.png";
import exit from "../../Assets/exit_icon.png";

const TopBar = () => {

    // const { desloga } = useContext(Context);

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
            <h2 style={{color: "black", marginRight:'1150px', marginLeft:'0px'}}> opaaa </h2>
                <User>
                    <Image backgroundImg={add}/>

                </User>
                <User >
                    <Image backgroundImg={exit}/>

                </User>
            </div>

        </Container>
    )
}

export default TopBar;