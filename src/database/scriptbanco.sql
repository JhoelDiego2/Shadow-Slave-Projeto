-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo! então bom jogo !!

/*
comandos para executar no mysql
*/
CREATE DATABASE shadowSlave;
USE shadowSlave;


/*CREATE USER 'apiShadowSlave'@'localhost' IDENTIFIED BY '69791845';
GRANT INSERT, UPDATE, SELECT ON shadowSlave.* TO 'apiShadowSlave'@'localhost';
FLUSH PRIVILEGES;*/

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) UNIQUE,
    email VARCHAR(45) UNIQUE,
    senha VARCHAR (45),
    dtCadastro DATE DEFAULT (CURRENT_DATE), 
    avatar char(1) DEFAULT '1', 
    nomeReal VARCHAR(45) DEFAULT 'Lost from light'
);
CREATE TABLE games (
    idGames INT PRIMARY KEY AUTO_INCREMENT,
    sunnyGame INT,
    nephisGame INT,
    kaiGame INT, 
    fkUsuario INT,
    CONSTRAINT fkUsuarioGames FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE feedback (
	idFeedback INT AUTO_INCREMENT,
    stars INT ,
    feedbackDate DATE DEFAULT (CURRENT_DATE), 
    fkUsuario INT NOT NULL,
    CONSTRAINT pkComposta PRIMARY KEY (idFeedback, fkUsuario),
    CONSTRAINT fkFeedbackUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE forum(
    idForum INT PRIMARY KEY AUTO_INCREMENT,
    mensagem VARCHAR (250),
    data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    CONSTRAINT fkUsuarioForum FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


