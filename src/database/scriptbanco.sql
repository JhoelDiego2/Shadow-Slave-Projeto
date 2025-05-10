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
    avatar varchar(7) DEFAULT 'sunny', 
    nomeReal VARCHAR(45) DEFAULT 'Lost from light'
);
desc usuario;
alter table usuario drop column avatar;
alter table usuario add column avatar varchar(7) default 'sunny';
alter table usuario add constraint ckAvatar check (avatar in ('sunny', 'nephis', 'cassie', 'effie', 'kai', 'jet', 'modret', 'mongrel'));
select * from usuario;
CREATE TABLE game (
    idGame INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45), 
    dificuldade VARCHAR(20)
);
INSERT INTO game(nome, dificuldade) values
	('sunnyGame','facil'),
	('sunnyGame','medio'),
	('sunnyGame','dificil'),
	('nephisGame','facil'),
	('nephisGame','medio'),
	('nephisGame','dificil');
select * from game;

CREATE TABLE score(
	idScore INT AUTO_INCREMENT, 
    fkGame INT, 
    fkUsuario INT, 
    score FLOAT, 
    tempo FLOAT, 
	CONSTRAINT pkCompostaScore PRIMARY KEY (idScore, fkGame, fkUsuario), 
    CONSTRAINT fkGameScore FOREIGN KEY (fkGame) REFERENCES game(idGame), 
	CONSTRAINT fkUsuarioScore FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
); 

CREATE TABLE feedback (
	idFeedback INT AUTO_INCREMENT,
    stars INT ,
    dtFeedback DATE DEFAULT (CURRENT_DATE), 
    fkUsuario INT NOT NULL,
    CONSTRAINT pkComposta PRIMARY KEY (idFeedback, fkUsuario),
    CONSTRAINT fkFeedbackUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE forum(
    idForum INT PRIMARY KEY AUTO_INCREMENT,
    mensagem VARCHAR (250),
    data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    CONSTRAINT fkUsuarioForum FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from score;
