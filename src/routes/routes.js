module.exports = app => {
    const functionarios = require("../controllers/funcionariosController.js");
  
    var router = require("express").Router();

    // Busca todos os Funcionários
    router.get("/", functionarios.findAll);

    // Busca um Funcionário por ID
    router.get("/:id", functionarios.findOne);
    
    // Cria um novo Funcionário
    router.post("/", functionarios.create);
  
    // Atualiza um Funcionário por ID
    router.put("/:id", functionarios.update);
  
    // Deleta um Funcionário por ID
    router.delete("/:id", functionarios.delete);
  
    // Deleta todos os Funcionários
    router.delete("/", functionarios.deleteAll);

    app.use('/api/funcionarios', router);
};