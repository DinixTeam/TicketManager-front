import React, { useState } from "react";
import { Form, Linha, ButtonAdd, ModalInfo, Input } from "./style";
import moment from "moment";
import Modal from "react-modal/lib/components/Modal";


const Pagaringresso = () => {
    const [tiposingressos, setEstado] = useState('');
    const [qntdingressos, setQuantidade] = useState(0);

    return (
        <div>
            <Form>
                <h1>Miauuuuuu</h1>
                <h1>Time1 x Time2</h1>
                <h3 style={{ marginBottom: '-45px', marginLeft: '-80px' }}>tipo de Pagamento</h3>
                <select style={{ width: '15vw', backgroundColor: '#929490', borderRadius: '15px', height: '30px', border: 'none', paddingLeft: '8px' }}
                    name='sexos' value={tiposingressos} onChange={texto => setEstado(texto.target.value)
                    }>
                    <option value="">Selecione</option>
                    <option value="Boleto">Boleto</option>
                    <option value="Cc">Cartão de Crédito</option>
                    <option value="Pix">Pix</option>
                </select>
                <Linha>
                    <h3>valor Final {'$qntdingressos'}</h3>
                </Linha>
                <ButtonAdd>
                    Pagar
                </ButtonAdd>
            </Form>
        </div>
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

    return (
        <Modal
            style={customStyles}
            isOpen={openModal}
            onRequestClose={() => setOpen(false)}
        >
            <ModalInfo>
                <h1> Detalhes do Pagamento </h1>
                <Input>
                    <h2>Data</h2>
                    <h2>Forma de pagamento</h2>
                </Input>
                <button>
                    Ok
                </button>
            </ModalInfo>

        </Modal>
    );
};

export default Pagaringresso;