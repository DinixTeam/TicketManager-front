import React, { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Form, Linha, ButtonAdd, ModalInfo, Input } from "./style";



const Pagaringresso = () => {
    const [tiposingressos, setEstado] = useState('');
    const [qntdingressos, setQuantidade] = useState(0);
    // const [ingresso, setIngress] = useState([])

    // useEffect(() => { 
    //     (async () => {
    //       const response = await http.get(`/readoneingresso/${idevento}`);
    //       console.log(response.data);
    //       setIngress(response.data);
    //     })();
    //   }, []);


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

    return (
        <Form>
            
                <h1>Miauuuuuu</h1>
                <h1>Time1 x Time2</h1>
                <h3 style={{ marginBottom: '5px', marginLeft: '-80px' }}>tipo de Pagamento</h3>
                <select style={{ width: '15vw', backgroundColor: '#929490', borderRadius: '15px', height: '30px', border: 'none', paddingLeft: '8px' }}
                    name='sexos' value={tiposingressos} onChange={texto => setEstado(texto.target.value)
                    }>
                    <option value="">Selecione</option>
                    <option value="Boleto">Boleto</option>
                    <option value="Cc">Cartão de Crédito</option>
                    <option value="Pix">Pix</option>
                </select>
                {tiposingressos === 'Cc' ?
                <div style={{marginTop: '50px'}}>
                    <Input>
                        <h2>Numero de cartão</h2>
                        <input
                            type="text"
                        />
                    </Input>
                    <Input>
                        <h2>Nome do titular</h2>
                        <input
                            type="text"
                        />
                    </Input>
                    <Input>
                        <h2>Cpf</h2>
                        <input
                            type="text"
                        />
                    </Input>
                    <Input>
                        <h2>Data vencimento</h2>
                        <input
                            type="text"
                        />
                    </Input>
                    <Input>
                        <h2>Número de parcelas</h2>
                        <input
                            type="text"
                        />
                    </Input>
                </div>
                : null
                }
                <Linha>
                    <h3>valor Final {'$qntdingressos'}</h3>
                </Linha>
                {/* <ButtonAdd onClick={e => setOpen(true)}>
                    Pagar
                </ButtonAdd> */}
                <Linha>
                    <ButtonAdd style={{width:'250px', marginRight:'0px', marginLeft:'-80px'}}onClick={e => setOpen(true)}>
                        Voltar
                    </ButtonAdd>
                    <ButtonAdd style={{width:'250px'}} onClick={e => setOpen(true)}>
                        Pagar
                    </ButtonAdd>
                </Linha>

            <WrapModal
                customStyles={customStyles}
                openModal={openModal}
                //data={data}
                setOpen={setOpen}
            />
        </Form>
    );
}

const WrapModal = ({ customStyles, openModal, setOpen, data }) => {

    const [date, setDate] = useState('')

    // const HandleSubmit = (e) => {

    // const body = {
    //     data: date,
    //     userID: getId(),
    //     eventoID: data._id,
    // }
    // const config = {
    //     headers: { Authorization: `Bearer ${getToken()}` }
    // };


    //     console.log(body)
    //     e.preventDefault();
    //     if (body.date !== '') {
    //         http
    //             .put("/updateevento", body, config)
    //             .then((result) => {
    //                 setOpen(false)
    //                 window.location.reload()
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     } else {
    //         swal("Preencha todos os dados!");
    //     }
    // };

    const WrapModal = ({ customStyles, openModal, setOpen, data }) => {
        return (
            <Modal
                style={customStyles}
                isOpen={openModal}
                onRequestClose={() => setOpen(false)}
            >
                <ModalInfo>
                    <h1> Altere o dia do jogo </h1>

                    <button >
                        Salvar
                    </button>
                </ModalInfo>

            </Modal>
        );
    };
};

export default Pagaringresso;