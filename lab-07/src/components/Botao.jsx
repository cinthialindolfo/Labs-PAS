// Crie um componente chamado Botão que recebe
// como propriedade o texto a aparecer no botão

import React from "react";
import "./Botao.css";

const Botao = (props) => {
    return (
        <button className="botao" onClick={props.onClick}>
            {props.texto}
        </button>
    );
};
export default Botao;