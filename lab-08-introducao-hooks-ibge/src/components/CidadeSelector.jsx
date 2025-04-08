import React from 'react';

const CidadeSelector = ({ cidades, selectedCidade, onCidadeChange, disabled }) => {
    return (
        <select
            value={selectedCidade || ''}
            onChange={(e) => onCidadeChange(e.target.value)}
            disabled={disabled}
        >
            <option value="">Selecione uma cidade</option>
            {cidades.map(cidade => (
                <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
            ))}
        </select>
    );
};

export default CidadeSelector;