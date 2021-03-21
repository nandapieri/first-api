const express = require('express');
const router = express.Router();
const Cadastro = require('../models/Cadastro');

//todas as rotas estão senco acessadas através de /cadastro
//retorna todos os cadastros
router.get('/',async (req,res) => {
  try {
    const c = await Cadastro.find();
    res.json(c);
  } catch(err) {
    res.json({ message: err });
  }
  res.send('get do cadastro')
})

//faz um cadastro 
router.post('/', async (req,res) => {
  const c = new Cadastro({
    nomeCompleto: req.body.nomeCompleto,
    email: req.body.email,
    cpf: req.body.cpf,
    telefone: req.body.telefone
  });

  try {
    //salva no banco
    const saved = await c.save();
    res.json(saved);
  } catch(err) {
    res.json({ message: err });
  }


});

module.exports = router;
