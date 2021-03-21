const mongoose = require('mongoose');

const CadastroSchema = mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Cadastro',CadastroSchema);
