module.exports = {
    "up": "CREATE TABLE funcionarios (id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, primeiro_nome varchar(255) NOT NULL, ultimo_nome varchar(255) NOT NULL, email varchar(255) NOT NULL, telefone varchar(50) NOT NULL, organizacao varchar(255) NOT NULL, designacao varchar(100) NOT NULL, salario decimal(11,2) UNSIGNED DEFAULT 0.00, criado datetime NOT NULL DEFAULT current_timestamp(), atualizado datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(), PRIMARY KEY (id))",

    "down": "DROP TABLE funcionarios"
}