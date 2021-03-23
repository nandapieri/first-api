var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
//url base da api
var urlBase = "https://bot-api-fernanda.herokuapp.com";

// Criamos nosso primeiro caso de teste e fornecemos uma descricao utilizando describe
describe("Teste API",function(){
  // a funcao it eh o que vamos testar realmente, neste caso o endpoint /cadastro
  it("Deve receber a lista de cadastros", function(done){

    request.get(
      {
        //url : urlBase + "/cadastro"
        url: "https://bot-api-fernanda.herokuapp.com/cadastro"
      },
      function(error, response, body){

        // precisamos converter o retorno para um objeto json
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        // utilizando a funcao expect do chai, vamos verificar se o resultado da chamada foi sucesso (200)
        expect(response.statusCode).to.equal(200);

        done(); // avisamos o test runner que acabamos a validacao e ja pode proseeguir
      }
    );
  });
});
