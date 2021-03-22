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
    res.status(404).json({ message: err });
  }
  res.status(200).send('get do cadastro')
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
    res.status(200).json(saved);
    sendMail(req.body.email,req.body.nomeCompleto);
  } catch(err) {
    res.status(404).json({ message: err });
  }

function sendMail(destMail,name) {
  var nodemailer = require('nodemailer');
  require('dotenv/config');

  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
    }
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: destMail,
    subject: 'Bem vindo a Geek Week!',
    text: 'Olá, '+name+'!\n'+'Você está recebendo esse email para confirmar seu cadastro na geek week!\n'+
      'Estamos muito felizes em ter você conosco!\nEm breve enviaremos mais novidades!\n\n Geek Store Team'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  }

});

module.exports = router;
