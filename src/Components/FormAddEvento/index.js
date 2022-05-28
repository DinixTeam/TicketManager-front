import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { getId, getToken } from "../../Services/auth";
import http from "../../Services/httpRequest";
import { Container, Input } from "./style";
import moment from 'moment';
import swal from 'sweetalert';

const FormAddEvento = () => {

    const history = useNavigate();

    const [timeCasa, setTimeCasa] = useState('');
    const [timeFora, setTimeFora] = useState('');
    const [date, setDate] = useState();
    const [descricao, setDescricao] = useState('');
    const [localName, setLocalName] = useState('');
    const [localNumber, setLocalNumber] = useState(0);
    const [localComplement, setLocalComplement] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [capacidadeN, setCapacidadeN] = useState(0);
    const [valorN, setValorN] = useState(0);
    const [capacidadeS, setCapacidadeS] = useState(0);
    const [valorS, setValorS] = useState(0);
    const [capacidadeL, setCapacidadeL] = useState(0);
    const [valorL, setValorL] = useState(0);
    const [capacidadeO, setCapacidadeO] = useState(0);
    const [valorO, setValorO] = useState(0);
    const [capacidadeC, setCapacidadeC] = useState(0);
    const [valorC, setValorC] = useState(0);



    const RegisterEvento = () => {

        const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };
        const body = {
            time1: timeCasa,
            time2: timeFora,
            data: date,
            descricao: descricao,
            localName: localName,
            localNumber: localNumber,
            localComplement: localComplement,
            cep: cep,
            rua: rua,
            bairro: bairro,
            estado: estado,
            pais: pais,
            capacidadeN: capacidadeN,
            valorN: valorN,
            capacidadeS: capacidadeS,
            valorS: valorS,
            capacidadeL: capacidadeL,
            valorL: valorL,
            capacidadeO: capacidadeO,
            valorO: valorO,
            capacidadeC: capacidadeC,
            valorC: valorC,
            userID: getId(),
        }
        console.log(body)
            http
            .post('/evento', body, config)
            .then((res) => {
                console.log(res)
                console.log('go')
                history('/home');
                window.location.reload()
            })
            .catch((err) => {
                console.log(err.response)
                //swal(err.response.data.message);

            })
        
    }

    return(
        <Container>
            <h1>
                Cadastrar evento
            </h1>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '10px'}}>
             <h2>Time Casa</h2>
                <input 
                    onChange={e => setTimeCasa(e.target.value)}
                    placeholder="Time Casa"
                    type="text"
                    required
                    value={timeCasa}
                        />
                    </Input>
                    <Input>
             <h2>Time Fora</h2>
                <input 
                    onChange={e => setTimeFora(e.target.value)}
                    placeholder="Time Fora"
                    type="text"
                    required
                    value={timeFora}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '10px'}}>
             <h2>Local</h2>
                <input 
                    onChange={e => setLocalName(e.target.value)}
                    placeholder="Local"
                    type="text"
                    required
                    value={localName}
                        />
                    </Input>
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
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '10px'}}>
             <h2>Horario</h2>
                <input 
                    onChange={e => setDescricao(e.target.value)}
                    placeholder="Horario"
                    type="text"
                    required
                    value={descricao}
                        />
                    </Input>
                    <Input>
             <h2>Endereço</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Endereço"
                    type="email"
                    required
                    //value={email}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '20px'}}>
             <h2>Capacidade</h2>
                <input 
                    onChange={e => setCapacidadeN(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    value={capacidadeN}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
             <h2>Valor</h2>
                <input 
                    onChange={e => setValorN(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    value={valorN}
                    style={{width: '100px'}}
                        />
                    </Input>
                <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', color: 'white' }} > Assentos Norte</h3>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
               
            <Input style={{marginRight: '20px'}}>
                <input 
                    onChange={e => setCapacidadeS(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    value={capacidadeS}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    onChange={e => setValorS(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    value={valorS}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', color: 'white' }} > Assentos Sul</h3>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '20px'}}>
                <input 
                    onChange={e => setCapacidadeL(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    value={capacidadeL}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    onChange={e => setValorL(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    value={valorL}
                    style={{width: '100px'}}
                        />
                    </Input>
                    
                <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', color: 'white' }} > Assentos Leste</h3>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
              
            <Input style={{marginRight: '20px'}}>
                <input 
                    onChange={e => setCapacidadeO(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    value={capacidadeO}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    onChange={e => setValorO(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    value={valorO}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', color: 'white' }} > Assentos Oeste</h3>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '20px'}}>
                <input 
                    onChange={e => setCapacidadeC(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    value={capacidadeC}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    onChange={e => setValorC(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    value={valorC}
                    style={{width: '100px'}}
                        />
                    </Input>
                    
                <h3 style={{display: 'flex', flexDirection: 'column',
                 justifyContent: 'center', marginLeft: '20px', color: 'white' }} > Assentos Camarote</h3>
            </div>

            <button onClick={RegisterEvento}>
                Adicionar Evento
            </button>
            
        </Container>
    )
}

export default FormAddEvento;