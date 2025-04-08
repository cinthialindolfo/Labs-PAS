// api-formulario/server.js
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); // Importe o CORS

const app = express();
const port = 3001;

// Configura o CORS para permitir requisições de qualquer origem
app.use(cors());


// Conecta ao MongoDB
mongoose.connect('mongodb://localhost:27017/formulario', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define o schema (estrutura) dos dados do formulário
const FormularioSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  email: String,
  senha: String,
});

// Cria o modelo (coleção) no MongoDB
const FormularioModel = mongoose.model('Formulario', FormularioSchema);

// Middleware para permitir requisições JSON e CORS
app.use(express.json());
app.use(cors());

// Rota para receber os dados do formulário
app.post('/enviar-formulario', async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  // Validação dos campos
  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Salva os dados no MongoDB
    const novoFormulario = new FormularioModel({ nome, sobrenome, email, senha });
    await novoFormulario.save();

    // Resposta de sucesso
    res.status(200).json({ mensagem: 'Dados salvos com sucesso!' });
  } catch (erro) {
    console.error('Erro ao salvar dados:', erro);
    res.status(500).json({ mensagem: 'Erro ao salvar dados.' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});