import React, { useEffect, useState } from "react";
import { Container, Input, ModalInfo } from "./style";
import bgImg from "../../Assets/uefa.png";
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { getId, getToken } from "../../Services/auth";
import http from "../../Services/httpRequest";
import swal from "sweetalert";
import Modal from "react-modal/lib/components/Modal";
import { useNavigate } from "react-router-dom";

const Eventos = ({data}) => {

    const [user, setUser] = useState([])

    const history = useNavigate();

    const linkEvento = () =>{
        history(`/buy/${data._id}`)
    }

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/user/${getId()}`);
          console.log(response.data);
          setUser(response.data);
        })();
      }, []);

    const customStyles = {
        overlay: {
          backgroundColor: "rgba(0,0,0,0.8)",
        },
        content: {
          padding: "0",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          color: "#000",
          background: "#fff",
        },
      };

      const [openModal, setOpen] = useState(false);

    const deleteEvento = () => {

        const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };

        const body = {
            userID: getId(),
            eventoID: data._id,
        }

        http.put('removeevento', body, config).then(
            (res)=> {
                console.log(res);
                window.location.reload()
        }).catch((err) => {
            console.log("Ocorreu algum erro");
            console.log(err.response);
        })
    }

    return(
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {user.isOrganizador ? <Container backgroundImg={bgImg}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>
                            {data.titulo}
                        </h1>
                        <div>
                        <h2 style={{color: 'white'}}>
                            {data.local.localName}
                        </h2>
                        <h2 style={{fontSize: '10px', color: 'white'}}>{data.data}</h2>
                        </div>
                    </div>
                        <div style={{diplay: 'flex', flexDirection: 'row'}}>
                            <div style={{color: 'white', marginBottom: '10px',
                            }} onClick={deleteEvento}>
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                            <div style={{color: 'white'}} onClick={e => setOpen(true)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </div>
                        </div>

                        <WrapModal
                            customStyles={customStyles}
                            openModal={openModal}
                            data={data}
                            setOpen={setOpen}
                        />
                </Container> : 
                <Container backgroundImg={bgImg} onClick={linkEvento}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1>
                        {data.titulo}
                    </h1>
                    <div>
                    <h2 style={{color: 'white'}}>
                        {data.local.localName}
                    </h2>
                    <h2 style={{fontSize: '10px', color: 'white'}}>{data.data}</h2>
                    </div>
                </div>
                    {/* <div style={{diplay: 'flex', flexDirection: 'row'}}>
                        <div style={{color: 'white', marginBottom: '10px',
                        }} onClick={deleteEvento}>
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                        <div style={{color: 'white'}} onClick={e => setOpen(true)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                    </div> */}

                    <WrapModal
                        customStyles={customStyles}
                        openModal={openModal}
                        data={data}
                        setOpen={setOpen}
                    />
            </Container>
            }
        </div>
     
        
    )
}

const WrapModal = ({ customStyles, openModal, setOpen, data }) => {

  const [date, setDate] = useState('')

  const HandleSubmit = (e) => {

    const body = {
      data: date,
      userID: getId(),
      eventoID: data._id,
    }
    const config = {
      headers: { Authorization: `Bearer ${getToken()}` }
    };


    console.log(body)
    e.preventDefault();
    if (body.date !== '') {
      http
        .put("/updateevento", body, config)
        .then((result) => {
          setOpen(false)
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal("Preencha todos os dados!");
    }
  };

  return (
    <Modal
      style={customStyles}
      isOpen={openModal}
      onRequestClose={() => setOpen(false)}
    >
      <ModalInfo>
        <h1> Altere o dia do jogo </h1>
        <Input>
          <h2>Data</h2>
          <input
            onChange={e => setDate(e.target.value)}
            placeholder="Data"
            type='date'
            value={date}
            max={moment().format("YYYY-MM-DD")}
            required
          />
        </Input>
        <button onClick={HandleSubmit}>
          Salvar
        </button>
      </ModalInfo>

    </Modal>
  );
};
export default Eventos;