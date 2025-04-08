import React from 'react';

const BotaoBuscarInformacoes = ({ onClick, disabled, contador }) => {
    return (
        <div className="botao-container">
            <button onClick={onClick} disabled={disabled} className="botao">
                Buscar Informações
            </button>
            <p>Vezes que as informações foram buscadas: {contador}</p>
        </div>
    );
};

export default BotaoBuscarInformacoes;