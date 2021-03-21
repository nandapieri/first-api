const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

//middleware to make sure that body parser is used in every request
app.use(bodyParser.json());

//import routes
const testeRoutes = require('./routes/teste');
const cadastroRoutes = require('./routes/cadastro');
app.use('/teste',testeRoutes);
app.use('/cadastro',cadastroRoutes);

app.get('/',(req,res) => {
  res.send('hello!')
})

//db conection
mongoose
 .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

//start the server at port 5000

app.listen(PORT, ()=>{
  console.log('Server running on port: http://localhost:'+PORT);
});
