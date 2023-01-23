const { DATETIME } = require("mysql/lib/protocol/constants/types");
const Funcionarios = require("../models/funcionarios");

// Busca todos os Funcionários do banco de dados (com condição).
exports.findAll = (req, res) => {
    const title = req.query.title;
  
    Funcionarios.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro ao buscar os Funcionários."
        });
      else res.send(data);
    });
};

// Busca um Funcionário por ID
exports.findOne = (req, res) => {
    Funcionarios.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: "Funcionário não encontrado com ID: " + req.params.id
          });
        } else {
          res.status(500).send({
            message: "Erro ao buscar Funcionário com ID: " + req.params.id
          });
        }
      } else res.send(data);
    });
};

exports.create = (req, res) => {
    // Validação de requisição
    if (!req.body) {
        res.status(400).send({
            message: "O Body não pode ser vazio!"
        });
    }

    // Constructor
    const funcionarios = new Funcionarios({
        id: req.body.id,
        primeiro_nome: req.body.primeiro_nome,
        ultimo_nome: req.body.ultimo_nome,
        email: req.body.email,
        telefone: req.body.telefone,
        organizacao: req.body.organizacao,
        designacao: req.body.designacao,
        salario: req.body.salario,
        criado: new Date()
    });

    Funcionarios.create(funcionarios, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Ocorreu algum erro durante a criação de Funcionário."
            });
        else res.send(data);
    });
};

// Atualiza um Funcionário pelo ID na solicitação
exports.update = (req, res) => {
    // Validação de requisição
    if (!req.body) {
      res.status(400).send({
        message: "O Body não pode ser vazio!"
      });
    }
  
    Funcionarios.updateById(req.params.id, new Funcionarios(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: "Funcionário não encontrado com ID: " + req.params.id
          });
        } else {
          res.status(500).send({
            message: "Erro ao atualizar o Funcionário com ID: " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Exclui um Funcionário com o ID especificado na solicitação
exports.delete = (req, res) => {
    Funcionarios.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: "Funcionário não encontrado com ID: " + req.params.id
          });
        } else {
          res.status(500).send({
            message: "Não foi possível excluir o Funcionário com ID " + req.params.id
          });
        }
      } else res.send({ message: "O Funcionário foi deletado com sucesso!" });
    });
};
  
  // Exclua todos os Funcionários do banco de dados.
exports.deleteAll = (req, res) => {
    Funcionarios.removeAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Ocorreu algum erro ao remover todos os Funcionários."
        });
        else res.send({ message: "Todos os Funcionários foram excluídos com sucesso!" });
    });
};