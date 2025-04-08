import React, { useState } from 'react';
import CaixaDeTexto from './CaixaDeTexto';
import Senha from './Senha';
import Botao from './Botao';
import './Formulario.css';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEnviar = () => {
        alert('Dados enviados!');
    };

    const handleCancelar = () => {
        alert('Envio cancelado!');
    };

    return (
        <div className="formulario">
            <h1>Cadastre-se</h1>
            <CaixaDeTexto
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
            />
            <CaixaDeTexto
                placeholder="Sobrenome"
                onChange={(e) => setSobrenome(e.target.value)}
            />
            <CaixaDeTexto
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Senha onChange={(e) => setSenha(e.target.value)} />
            <div className="botoes">
                <Botao texto="Enviar" onClick={handleEnviar} />
                <Botao texto="Cancelar" onClick={handleCancelar} />
            </div>
        </div>
    );
};

export default Formulario;