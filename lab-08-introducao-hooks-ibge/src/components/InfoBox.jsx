import React from 'react';

const InfoBox = ({ info }) => {
    return (
        <div className="info-box">
            <h2>Informações da Cidade</h2>
            <p><strong>Nome:</strong> {info.nome}</p>
            <p><strong>Estado:</strong> {info.estado}</p>
            <p><strong>Região:</strong> {info.regiao}</p>
        </div>
    );
};

export default InfoBox;