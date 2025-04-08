import React from 'react';

const BotaoCarregarCidades = ({ onClick, disabled, contador }) => {
    return (
        <div className="botao-container">
            <button onClick={onClick} disabled={disabled} className="botao">
                Carregar Cidades
            </button>
            <p>Vezes que as cidades foram carregadas: {contador}</p>
        </div>
    );
};

export default BotaoCarregarCidades;