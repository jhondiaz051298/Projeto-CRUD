const sql = require("../../database");

// Constructor
const Funcionarios = function(funcionarios) {
    this.id = funcionarios.id;
    this.primeiro_nome = funcionarios.primeiro_nome;
    this.ultimo_nome = funcionarios.ultimo_nome;
    this.email = funcionarios.email;
    this.telefone = funcionarios.telefone;
    this.organizacao = funcionarios.organizacao;
    this.designacao = funcionarios.designacao;
    this.salario = funcionarios.salario;
    this.criado = funcionarios.criado;
    this.atualizado = funcionarios.atualizado;
};
  
Funcionarios.getAll = (title, result) => {
    let query = "SELECT * FROM funcionarios";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("Funcionários: ", res);
        result(null, res);
    });
};
  
Funcionarios.findById = (id, result) => {
    sql.query(`SELECT * FROM funcionarios WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Funcionário encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "Não encontrado" }, null);
    });
};

Funcionarios.create = (novoFuncionario, result) => {
    sql.query("INSERT INTO funcionarios SET ?", novoFuncionario, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
            return;
        }

        console.log("Funcionário criado: ", { id: res.insertId, ...novoFuncionario });
        result(null, { id: res.insertId, ...novoFuncionario });
    });
};
    
Funcionarios.updateById = (id, funcionarios, result) => {
    sql.query(
        "UPDATE funcionarios SET primeiro_nome = ?, ultimo_nome = ?, email = ?, telefone = ?, organizacao = ?, designacao = ?, salario = ?, atualizado = CURRENT_TIMESTAMP WHERE id = ?",
        [
            funcionarios.primeiro_nome, 
            funcionarios.ultimo_nome,
            funcionarios.email, 
            funcionarios.telefone,
            funcionarios.organizacao,
            funcionarios.designacao,
            funcionarios.salario,
            id
        ],
        (err, res) => {
            console.log(err, res);
            if (err) {
                console.log("erro: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "Não encontrado" }, null);
                return;
            }

            console.log("Funcionário atualizado com sucesso: ", { id: id, ...funcionarios });
            result(null, { id: id, ...funcionarios });
        }
    );
};
  
Funcionarios.remove = (id, result) => {
    sql.query("DELETE FROM funcionarios WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "Não encontrado" }, null);
            return;
        }

        console.log("Funcionário deletado com ID: ", id);
        result(null, res);
    });
};
  
Funcionarios.removeAll = result => {
    sql.query("DELETE FROM funcionarios", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log(`Deletado ${res.affectedRows} funcionarios`);
        result(null, res);
    });
};
  
  module.exports = Funcionarios;
  