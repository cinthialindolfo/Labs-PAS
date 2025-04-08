// Crie um componente chamado Senha que deve ter por
// padrão as características de um input de senha (**** quando a senha for digitada)

import React from "react";
import './Senha.css';

const Senha = (props) => {
    return (
        <input
            type="password"
            className="senha"
            placeholder="Senha"
            onChange={props.onChange}
        />
    );
};
export default Senha;