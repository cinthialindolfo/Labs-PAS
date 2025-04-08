// Crie um componente chamado CaixaDeTexto que recebe como propriedade um placeholder
// padrão para aparecer como dica de preenchimento

import React from 'react';
import './CaixaDeTexto.css';

const CaixaDeTexto = (props) => {
    return (
        <input
            type="text"
            className="caixa-de-texto"
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
};
export default CaixaDeTexto;