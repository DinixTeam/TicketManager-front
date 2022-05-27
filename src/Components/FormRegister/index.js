import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Image, Input } from "./style";
import logo from "../../Assets/logo.png";
import http from "../../Services/httpRequest";
import { getId, idUser, login } from "../../Services/auth";
import { useHistory } from "react-router-dom";
//import { useHistory } from "react-router-dom";

const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tipoUser, setTipoUser] = useState(0);
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nomeOrg, setNomeOrg] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [user, setUser] = useState('');


 
    console.log(tipoUser)

   // var { loga, auth, desloga }   = useContext(Context);

   const history = useHistory();

    const linkCadastro = () => {
        history.push('/');
    }
    
    
    const RegisterUser = () => {
        const body = {
            username: user,
            email: email,
            password: password,
            cpf: cpf,
            primeiroNome: nome,
            sobrenome: sobrenome,
            nomeOrganizador: nomeOrg,
            cnpj: cnpj,
            func: tipoUser,
        }
        console.log(body)
        if( body.username !== "" && body.email !== '' && body.password !== '' && body.func !== 0){
            http
            .post('/user', body)
            .then((res) => {
                console.log(res)
                console.log('go')
                history.push('/');
            })
            .catch((err) => {
                console.log(err.response)
                //swal(err.response.data.message);

            })
        } else {
            console.log('erro')
           // swal('Preencha todos os dados!');
        }
    }
    return(
        <div>
            <Form>
                <h1 style={{marginBottom: '10px'}}>Login</h1>
                    <Input>
                        <h2>Email </h2>
                        <input 
                           onChange={e => setEmail(e.target.value)}
                           placeholder="Email"
                           type="email"
                           required
                           value={email}
                        />
                    </Input>
                    <Input>
                        <h2>Usuário </h2>
                        <input 
                           onChange={e => setUser(e.target.value)}
                           placeholder="Usuário"
                           type="text"
                           required
                           value={user}
                        />
                    </Input>
                    <Input>
                        <h2>Tipo de Usuário</h2>
                        <select 
                           value={tipoUser}
                           onChange={e => setTipoUser(e.target.value)}
                        >
                            <option value={0}>Selecione</option>
                            <option value={1}>Cliente</option>
                            <option value={2}>Oeganizador de Eventos</option>
                        </select>
                    </Input>
                    {tipoUser === '1' ? 
                    <div>
                        <Input>
                        <h2>Nome</h2>
                        <input 
                           onChange={e => setNome(e.target.value)}
                           placeholder="Nome"
                           type="text"
                           required
                           value={nome}
                        />
                    </Input>
                    <Input>
                        <h2>Sobrenome</h2>
                        <input 
                           onChange={e => setSobrenome(e.target.value)}
                           placeholder="Sobrenome"
                           type="text"
                           required
                           value={sobrenome}
                        />
                    </Input>
                    <Input>
                        <h2>CPF</h2>
                        <input 
                           onChange={e => setCpf(e.target.value)}
                           placeholder="CPF"
                           type="text"
                           required
                           value={cpf}
                        />
                    </Input>
                    </div>
                     : tipoUser === '2' ? <div>
                        <Input>
                            <h2>Nome</h2>
                            <input 
                            onChange={e => setNomeOrg(e.target.value)}
                            placeholder="Nome"
                            type="text"
                            required
                            value={nomeOrg}
                            />
                        </Input>
                        <Input>
                        <h2>CNPJ</h2>
                        <input 
                           onChange={e => setCnpj(e.target.value)}
                           placeholder="CNPJ"
                           type="text"
                           required
                           value={cnpj}
                        />
                    </Input>
                     </div> : null }
                    <Input>
                        <h2>Senha</h2>
                        <input 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                        required
                        value={password}
                        />
                    </Input>
                    <div 
                    style={{fontSize: '15px', marginBottom: '10px', cursor: 'pointer', fontWeight: 'bold'}} 
                    onClick={linkCadastro}
                    >
                        Não tenho Cadastro
                    </div>
                    <Button 
                   onClick={RegisterUser}
                    >Entrar</Button>
            </Form>
        </div>
    );
}

export default FormRegister;