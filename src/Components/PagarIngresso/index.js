import React, { useState } from "react";
import { Form, Linha, ButtonAdd } from "./style";



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

export default Pagaringresso;