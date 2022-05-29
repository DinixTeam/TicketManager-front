import React, { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../Services/httpRequest";
import { Form, Linha, ButtonAdd, ModalInfo, Input } from "./style";
import qrimg from '../../Assets/qrcode.jpg';
import lineBoleto from '../../Assets/lineBoleto.jpg';
import { getId, getToken } from "../../Services/auth";
import moment from 'moment';
const Pagaringresso = () => {
    const [tiposingressos, setEstado] = useState('3');
    const [qntdingressos, setQuantidade] = useState(0);
    const { idingresso, idevento } = useParams();
    const [ingresso, setIngress] = useState([])
    const [evento, setEvento] = useState([]);
    const [numero, setNumero] = useState('');
    const [titular, setTitular] = useState('');
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState('');
    const [boleto, setBoleto] = useState('false');
    const [qrcode, setQrCode] = useState('false');
    const [parcelas, setParcelas] = useState(1)

    useEffect(() => {
        (async () => {
          const response = await http.get(`/readoneevento/${idevento}`);
          console.log(response.data);
          setEvento(response.data);
        })();
      }, []);
    

    const navigate = useNavigate();

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/readoneingresso/${idingresso}`);
          console.log(response.data);
          setIngress(response.data);
        })();
      }, []);

      const RegisterUser = () => {
         
        var body;
        const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };

        if(tiposingressos === '2'){
            body = {
                tipoPagamentoNumber: 2,
                boleto:boleto,
                userID: getId(),
                ingressoID: idingresso,
                parcelas: 1,
            }
        }
        if(tiposingressos === '1'){
            body = {
                tipoPagamentoNumber: 1,
                numero: numero,
                titular: titular,
                cpf: cpf,
               // data: data,
                userID: getId(),
                ingressoID: idingresso,
                parcelas: 4,
            }
        }
        if(tiposingressos === '3'){
            body = {
                tipoPagamentoNumber: 3,
                qrCode: qrcode,
                userID: getId(),
                ingressoID: idingresso,
                parcelas: 1,
            }
        }
        console.log(body)
            http
                .put('/ingressopagamento', body, config)
                .then((res) => {
                    console.log(res)
                    console.log('go')
                    //history('/');
                    window.location.reload()
                })
                .catch((err) => {
                    console.log(err.response)
                    //swal(err.response.data.message);

                })
        } 
   


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
            <h1>{evento.titulo}</h1>
            <h3 style={{ marginBottom: '5px', marginLeft: '-100px' }}>tipo de Pagamento</h3>
            <select style={{ width: '20vw', backgroundColor: '#929490', borderRadius: '15px', height: '30px', border: 'none', paddingLeft: '8px' }}
                name='sexos' value={tiposingressos} onChange={texto => setEstado(texto.target.value)
                }>
                <option value="">Selecione</option>
                <option value={2}>Boleto</option>
                <option value={1}>Cartão de Crédito</option>
                <option value={3}>Pix</option>
            </select>
            {tiposingressos === '1' ?
            
                <div style={{ marginTop: '50px' }}>
                    <Input>
                        <h2>Numero de cartão</h2>
                        <input
                            type="text"
                            onChange={e => setNumero(e.target.value)}
                            placeholder="Numero de cartão"
                            value={numero}
                        />
                    </Input>
                    <Input>
                        <h2>Nome do titular</h2>
                        <input
                            type="text"
                            onChange={e => setTitular(e.target.value)}
                            placeholder="Nome do titular"
                            value={titular}
                        />
                    </Input>
                    <Input>
                        <h2>Cpf</h2>
                        <input
                            type="text"
                            onChange={e => setCpf(e.target.value)}
                            placeholder="Cpf"
                            value={cpf}
                        />
                    </Input>
                    <Input>
                        <h2>Data vencimento</h2>
                        <input
                         onChange={e => setData(e.target.value)}
                            placeholder="Data"
                            type='date'
                            value={data}
                             max={moment().format("YYYY-MM-DD")}
                        />
                    </Input>
                    <Input>
                        <h2>Número de parcelas</h2>
                        <select style={{ width: '20vw', backgroundColor: '#929490', borderRadius: '15px', height: '30px', border: 'none', paddingLeft: '8px' }}
                            name='sexos' value={parcelas} onChange={texto => setParcelas(texto.target.value)
                            }>
                            <option value={0}>Selecione</option>
                            <option value={1}>1x {ingresso.valorFinal/1}</option>
                            <option value={2}>2x {ingresso.valorFinal/2}</option>
                            <option value={3}>3x {ingresso.valorFinal/3}</option>
                            <option value={4}>4x {ingresso.valorFinal/4}</option>
                        </select>
                    </Input>
                </div>
                : tiposingressos === '3' ?
                    <div style={{ marginTop: '50px' }}>
                        <img src={qrimg}></img>
                    </div>
                : tiposingressos === '2' ?
                        <div style={{ marginTop: '50px'}}>
                            <img style={{width:'600px'}} src={lineBoleto}></img>
                        </div>
                : null
            }
            <Linha>
                <h3>valor Final {'$qntdingressos'}</h3>
            </Linha>
            <h2 style={{marginTop: '10px'}}>Quantidade de Ingressos: {ingresso.quantidade}</h2>
                <h2>valor Final: {ingresso.valorFinal}</h2>
            {/* <ButtonAdd onClick={e => setOpen(true)}>
                    Pagar
                </ButtonAdd> */}
            <Linha>
                <ButtonAdd style={{ width: '250px', marginRight: '0px', marginLeft: '-80px' }} onClick={() => navigate(-1)}>
                    Voltar
                </ButtonAdd>
                <ButtonAdd style={{ width: '250px' }} onClick={RegisterUser}>
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