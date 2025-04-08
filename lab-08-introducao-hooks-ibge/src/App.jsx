import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import EstadoSelector from './components/EstadoSelector';
import CidadeSelector from './components/CidadeSelector';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoBox from './components/InfoBox';
import BotaoCarregarCidades from './components/BotaoCarregarCidades';
import BotaoBuscarInformacoes from './components/BotaoBuscarInformacoes';

const App = () => {
    const [estados, setEstados] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState('');
    const [cidades, setCidades] = useState([]);
    const [selectedCidade, setSelectedCidade] = useState(null);
    const [info, setInfo] = useState(null);
    const [contadorCarregarCidades, setContadorCarregarCidades] = useState(0);
    const [contadorBuscarInformacoes, setContadorBuscarInformacoes] = useState(0);

    // Carrega os estados ao montar o componente
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setEstados(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar estados:", error);
            });
    }, []);

    // Carrega as cidades quando o botão "Carregar Cidades" é clicado
    const carregarCidades = () => {
        if (selectedEstado) {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`)
                .then(response => {
                    setCidades(response.data);
                    setSelectedCidade(null); // Reseta a cidade selecionada
                    setInfo(null); // Reseta as informações
                    setContadorCarregarCidades(contadorCarregarCidades + 1); // Incrementa o contador
                })
                .catch(error => {
                    console.error("Erro ao carregar cidades:", error);
                });
        }
    };

    // Busca informações da cidade quando o botão "Buscar Informações" é clicado
    const buscarInformacoesCidade = () => {
        if (selectedCidade) {
            const cidadeInfo = cidades.find(cidade => cidade.id === selectedCidade);
            if (cidadeInfo) {
                setInfo({
                    nome: cidadeInfo.nome,
                    estado: cidadeInfo.microrregiao.mesorregiao.UF.nome,
                    regiao: cidadeInfo.microrregiao.mesorregiao.UF.regiao.nome
                });
                setContadorBuscarInformacoes(contadorBuscarInformacoes + 1); // Incrementa o contador
            }
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="container">
                <h1>Selecione um Estado e uma Cidade</h1>
                <div className="selectors">
                    <EstadoSelector
                        estados={estados}
                        selectedEstado={selectedEstado}
                        onEstadoChange={setSelectedEstado}
                    />
                    <BotaoCarregarCidades
                        onClick={carregarCidades}
                        disabled={!selectedEstado}
                        contador={contadorCarregarCidades}
                    />
                </div>
                <div className="selectors">
                    <CidadeSelector
                        cidades={cidades}
                        selectedCidade={selectedCidade}
                        onCidadeChange={setSelectedCidade}
                        disabled={!selectedEstado}
                    />
                    <BotaoBuscarInformacoes
                        onClick={buscarInformacoesCidade}
                        disabled={!selectedCidade}
                        contador={contadorBuscarInformacoes}
                    />
                </div>
                {info && <InfoBox info={info} />}
            </div>
            <Footer />
        </div>
    );
};

export default App;