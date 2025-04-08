import React from 'react';

const EstadoSelector = ({ estados, selectedEstado, onEstadoChange }) => {
    return (
        <select
            value={selectedEstado}
            onChange={(e) => onEstadoChange(e.target.value)}
        >
            <option value="">Selecione um estado</option>
            {estados.map(estado => (
                <option key={estado.id} value={estado.id}>{estado.nome}</option>
            ))}
        </select>
    );
};

export default EstadoSelector;