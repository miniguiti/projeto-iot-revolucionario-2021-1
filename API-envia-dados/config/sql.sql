-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

CREATE TABLE leitura (
	id INT IDENTITY,
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fkcaminhao INT
);

CREATE TABLE usuario (
	id INT IDENTITY,
	nome VARCHAR(50),
	login VARCHAR(50),
	senha VARCHAR(50)
);

/* para workbench - local - desenvolvimento */

create database enviaDados;

use enviaDados;

CREATE TABLE leitura (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fkcaminhao INT
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	login VARCHAR(50),
	senha VARCHAR(50)
);