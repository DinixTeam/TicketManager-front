import React from "react";
import { Container, Input } from "./style";

const FormAddEvento = () => {


    return(
        <Container>
            <h1>
                Cadastrar evento
            </h1>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '10px'}}>
             <h2>Time Casa</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Time Casa"
                    type="email"
                    required
                    //value={email}
                        />
                    </Input>
                    <Input>
             <h2>Time Fora</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Time Fora"
                    type="email"
                    required
                    //value={email}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '10px'}}>
             <h2>Local</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Local"
                    type="email"
                    required
                    //value={email}
                        />
                    </Input>
                    <Input>
             <h2>Data</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Data"
                    type="email"
                    required
                    //value={email}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <Input style={{marginRight: '10px'}}>
             <h2>Horario</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Horario"
                    type="email"
                    required
                    //value={email}
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
                <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '20px', color: 'white' }} > Assentos Norte</h3>
            <Input style={{marginRight: '20px'}}>
             <h2>Capacidade</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
             <h2>Valor</h2>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '20px', color: 'white' }} > Assentos Sul</h3>
            <Input style={{marginRight: '20px'}}>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '20px', color: 'white' }} > Assentos Leste</h3>
            <Input style={{marginRight: '20px'}}>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '20px', color: 'white' }} > Assentos Oeste</h3>
            <Input style={{marginRight: '20px'}}>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <h3 style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '20px', color: 'white' }} > Assentos Camarote</h3>
            <Input style={{marginRight: '20px'}}>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Capacidade"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
                    <Input>
                <input 
                    //onChange={e => setEmail(e.target.value)}
                    placeholder="Valor"
                    type="email"
                    required
                    //value={email}
                    style={{width: '100px'}}
                        />
                    </Input>
            </div>
            
        </Container>
    )
}

export default FormAddEvento;