const express = require('express');
const router = express.Router();

//todas as rotas estão senco acessadas através de /teste

router.get('/',(req,res) => {
  res.send('hello world')
})

router.get('/outro', (req,res) => {
  res.send('hello world 2')
})

module.exports = router;
