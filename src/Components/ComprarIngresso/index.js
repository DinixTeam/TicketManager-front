import React, { useState } from "react";
import { Form, Linha, ButtonAdd } from "./style";



const Compraringresso = () => {
    const [tiposingressos, setEstado] = useState('');
    const [qntdingressos, setQuantidade] = useState(0);

    return (
        <div>
            <Form>
                <h1>Miauuuuuu</h1>
                <h1>Time1 x Time2</h1>
                <h3 style={{ marginBottom: '-45px', marginLeft: '-80px' }}>tipo de ingresso</h3>
                <select style={{ width: '15vw', backgroundColor: '#929490', borderRadius: '15px', height: '30px', border: 'none', paddingLeft: '8px' }}
                    name='sexos' value={tiposingressos} onChange={texto => setEstado(texto.target.value)
                    }>
                    <option value="">Selecione</option>
                    <option value="Norte">Setor Norte</option>
                    <option value="Sul">Setor Sul</option>
                    <option value="Leste">Setor Leste</option>
                    <option value="Camarote">Setor Camarote</option>

                </select>
                <Linha>
                    <h3>Quantidade</h3>
                    <input type="number" value={qntdingressos} min="0" max="10" style={{ marginTop: '1px', height: '30px', width: '15vw', marginLeft: '50px', borderRadius: '15px', backgroundColor: '#929490', border: 'none', paddingLeft: '8px' }}
                        onChange={(e) => setQuantidade((v) => (e.target.validity.valid ? e.target.value : v))}>
                    </input>
                </Linha>
                <Linha>
                    <h3>valor Final {'$qntdingressos'}</h3>
                </Linha>
                <ButtonAdd>
                    Comprar
                </ButtonAdd>
            </Form>
        </div>
    );
}

export default Compraringresso;