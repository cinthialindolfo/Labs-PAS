const API_ESTADOS = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const selectEstados = document.getElementById('select-estados');
const selectCidades = document.getElementById('select-cidades');
const tituloCidades = document.getElementById('titulo-cidades');
const botaoVerMais = document.getElementById('botao-ver-mais');
const infoCidade = document.getElementById('informacoes-cidade');

window.addEventListener('load', carregarEstados);
selectEstados.addEventListener('change', carregarCidades);
botaoVerMais.addEventListener('click', mostrarInformacoesCidade);

async function carregarEstados() {
    const resposta = await fetch(API_ESTADOS);
    const estados = await resposta.json();
    selectEstados.innerHTML = '<option value="default">Selecione um estado...</option>';
    estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.textContent = estado.nome;
        selectEstados.appendChild(option);
    });
}

async function carregarCidades() {
    const uf = selectEstados.value;
    if (uf === 'default') return;

    tituloCidades.style.display = 'block';
    selectCidades.style.display = 'block';
    selectCidades.innerHTML = '<option value="default">Carregando cidades...</option>';

    const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    const cidades = await resposta.json();
    selectCidades.innerHTML = '<option value="default">Selecione uma cidade...</option>';
    cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = cidade.id;
        option.textContent = cidade.nome;
        selectCidades.appendChild(option);
    });
    botaoVerMais.style.display = 'block';
}

async function mostrarInformacoesCidade() {
    const cidadeId = selectCidades.value;
    if (cidadeId === 'default') return;

    const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidadeId}`);
    const cidade = await resposta.json();

    infoCidade.style.display = 'block';
    infoCidade.textContent = `Microrregião: ${cidade.microrregiao.nome}\nMesorregião: ${cidade.microrregiao.mesorregiao.nome}\nRegião: ${cidade.microrregiao.mesorregiao.UF.regiao.nome}`;
}
