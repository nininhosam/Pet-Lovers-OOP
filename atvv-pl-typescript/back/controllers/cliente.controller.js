const { Cliente } = require("../models");
class requestHandler {
  // POST
  createCliente = (req, res) => {
    let { body } = req;
    let cliente = {
      nome: body.nome,
      nomeSocial: body.nomeSocial,
      cpf: body.cpf,
    }
    
    Cliente.create(cliente).then((response)=>{
      res.status(201).send();
    }).catch((err) => {
      console.log(err);
      res.status(400).send();
    });
  };
}

module.exports = new requestHandler();
