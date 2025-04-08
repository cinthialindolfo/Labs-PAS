// Faz requisição para a API de planetas, converte a resposta para JSON
// e imprime a lista de plantas que se pedi
fetch("https://swapi.dev/api/planets/")
    .then(resposta => resposta.json())
    .then(dados => {
        console.log("Lista de Planetas:", dados.results);

        // Filtra planetas que têm, frozen no clima
        const planetasCongelados = dados.results.filter(planeta => 
            planeta.climate && planeta.climate.includes("frozen")
        );
        console.log("Planetas com clima congelado:", planetasCongelados);

        // Cria um array para identificar se o clima é temperate (true ou false)
        const climaTemperadoArray = dados.results.map(planeta => 
            planeta.climate.includes("temperate")
        );
        console.log("Array indicando se o clima é temperato:", climaTemperadoArray);

        // Conta quantos planetas têm clima temperate e tendo erro no console ele exibe a mensagem no .catch
        const quantidadeTemperados = dados.results.reduce((contador, planeta) => 
            planeta.climate.includes("temperate") ? contador + 1 : contador
        , 0);
        console.log("Número de planetas com clima temperado:", quantidadeTemperados);
    })
    .catch(erro => console.error("Erro ao buscar os planetas:", erro));


// Função assíncrona que busca os personagens, ele espera a resposta da API
// converte para JSON e imprime a lista dos personagens
async function buscarPersonagens() {
    try {
        const resposta = await fetch("https://swapi.dev/api/people/?page=1");
        const dados = await resposta.json();
        console.log("Lista de Personagens:", dados.results);

        // Filtra personagens com pele verde
        const personagensPeleVerde = dados.results.filter(personagem => 
            personagem.skin_color.includes("green")
        );
        console.log("Personagens com pele verde:", personagensPeleVerde);

        // Busca um personagem com massa maior que 100
        const personagemPesado = dados.results.find(personagem => 
            parseFloat(personagem.mass) > 100
        );
        console.log("Personagem com massa maior que 100:", personagemPesado);

        // Conta os personagens com altura >= 177
        const quantidadeAltos = dados.results.reduce((contador, personagem) => 
            parseInt(personagem.height) >= 177 ? contador + 1 : contador
        , 0);
        console.log("Número de personagens com altura >= 177:", quantidadeAltos);

        // Criando um array com os nomes dos personagens
        const nomesPersonagens = dados.results.map(personagem => personagem.name);
        console.log("Nomes dos personagens:", nomesPersonagens);

    } catch (erro) {
        console.error("Erro ao buscar os personagens:", erro);
    }
}

// Chamando a função para buscar personagens
buscarPersonagens();