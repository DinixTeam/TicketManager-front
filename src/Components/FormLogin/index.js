import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Image, Input } from "./style";
import logo from "../../Assets/logo.png";
import { useHistory } from "react-router-dom";
import http from "../../Services/httpRequest";
import { getId, idUser, login } from "../../Services/auth";
//import { useHistory } from "react-router-dom";

const FormLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
   // var { loga, auth, desloga }   = useContext(Context);

   const history = useHistory();

    const linkCadastro = () => {
        history.push('/register');
    }
    
    
    const loginUser = () => {
        const body = {
            username: userName,
            password: password
        }
        console.log(body)
        if( body.username !== "" && body.password !== ''){
            http
            .post('/login', body)
            .then((res) => {
               // logout()
                console.log(res)
                console.log('go')
                login(res.data.token);
                idUser(res.data._id);
                console.log(res.data._id);
                console.log(getId())
                //loga();
                history.push('/home');
            })
            .catch((err) => {
                console.log(err.response)
               // swal(err.response.data.message);

            })
        } else {
            console.log('erro')
          //  swal('Preencha todos os dados!');
        }
    }
    return(
        <div>
            <Form>
                <h1 style={{marginBottom: '10px'}}>Login</h1>
                    <Input>
                        <h2>Email ou Nome de Usuario </h2>
                        <input 
                           onChange={e => setUserName(e.target.value)}
                           placeholder="Email ou Nome de Usuario"
                           type="email"
                           required
                           value={userName}
                        />
                    </Input>
                 
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
                   onClick={loginUser}
                    >Entrar</Button>
            </Form>
        </div>
    );
}

export default FormLogin;