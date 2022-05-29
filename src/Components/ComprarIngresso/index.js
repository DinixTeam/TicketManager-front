import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getId, getToken } from "../../Services/auth";
import http from "../../Services/httpRequest";
import { Form, Linha, ButtonAdd } from "./style";


const Compraringresso = () => {
  const [tiposingressos, setEstado] = useState(0);
  const [qntdingressos, setQuantidade] = useState(0);
  const [evento, setEvento] = useState([])
  const { idevento } = useParams();
  var saberQuant;

  const history = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await http.get(`/readoneevento/${idevento}`);
      console.log(response.data);
      setEvento(response.data);
    })();
  }, []);


  var valorFinal;



  if (tiposingressos === '1') {
    valorFinal = qntdingressos * evento.assentoNorte.valorN;
    saberQuant = evento.assentoNorte.capacidadeN;
  }
  if (tiposingressos === '2') {
    valorFinal = qntdingressos * evento.assentoSul.valorS;
    saberQuant = evento.assentoSul.capacidadeS;
  }
  if (tiposingressos === '3') {
    valorFinal = qntdingressos * evento.assentoLeste.valorL;
    saberQuant = evento.assentoLeste.capacidadeL;
  }
  if (tiposingressos === '4') {
    valorFinal = qntdingressos * evento.assentoOeste.valorO;
    saberQuant = evento.assentoOeste.capacidadeO;
  }
  if (tiposingressos === '5') {
    valorFinal = qntdingressos * evento.assentoCamarote.valorC;
    saberQuant = evento.assentoCamarote.capacidadeC;
  }

  const RegisterIngresso = () => {

        const config = {
            headers: { Authorization: `Bearer ${getToken()}` }
          };
        const body = {
            tipoIngressoNumber: tiposingressos,
            quantidade: qntdingressos,
            valorFinal: valorFinal,
            userID: getId(),
            eventoID: evento._id,
        }
        console.log(body)
            http
            .post('/ingresso', body, config)
            .then((res) => {
                console.log(res.data.idIngresso);
                console.log('go')
                history(`/pay/${evento._id}/${res.data.idIngresso}`);
            })
            .catch((err) => {
                console.log(err.response)
                //swal(err.response.data.message);

            })
        
    }
  

  console.log(valorFinal, tiposingressos)

  return (
    <div>
      <Form>
        <h1>{evento.titulo}</h1>
        <h2 >{evento.descricao}</h2>
        <h3 style={{ marginBottom: '-45px', marginLeft: '-80px' }}>tipo de ingresso</h3>
        <select style={{ width: '15vw', backgroundColor: '#929490', borderRadius: '15px', height: '30px', border: 'none', paddingLeft: '8px' }}
          name='sexos' value={tiposingressos} onChange={texto => setEstado(texto.target.value)
          }>
          <option value={0}>Selecione</option>
          <option value={1}>Setor Norte</option>
          <option value={2}>Setor Sul</option>
          <option value={3}>Setor Leste</option>
          <option value={4}>Setor Oeste</option>
          <option value={5}>Setor Camarote</option>
        </select>
        <Linha>
          <h3>Quantidade</h3>
          <input type="number" value={qntdingressos} min="0" max="10" style={{ marginTop: '1px', height: '30px', width: '15vw', marginLeft: '50px', borderRadius: '15px', backgroundColor: '#929490', border: 'none', paddingLeft: '8px', paddingRight: '8px' }}
            onChange={(e) => setQuantidade((v) => (e.target.validity.valid ? e.target.value : v))}>
          </input>
        </Linha>
        <Linha>
          <h3>valor Final {valorFinal}</h3>
        </Linha>

        <Linha>
          <ButtonAdd style={{marginLeft:'-110px', width:'25vh'}} onClick={RegisterIngresso}>
            Voltar
          </ButtonAdd>
          {qntdingressos > saberQuant ? <div> Sem Ingressos</div> : <ButtonAdd style={{width:'20vh'}} onClick={RegisterIngresso}>
            Comprar
          </ButtonAdd>}
        </Linha>
      </Form>
    </div>
  );
}

export default Compraringresso;