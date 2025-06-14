/* Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
 Você precisa executar os comandos no banco de dados para criar as tabelas,
-ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo! então bom jogo !!
---------------------------------------------------------------------------------------------------
comandos para executar no mysql
*/
CREATE DATABASE shadowSlave;
USE shadowSlave;
CREATE USER 'apiShadowSlave'@'%' IDENTIFIED BY 'Urubu100$';
GRANT INSERT, UPDATE, SELECT, DELETE ON shadowSlave.* TO 'apiShadowSlave'@'%';
FLUSH PRIVILEGES;
CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) UNIQUE,
    email VARCHAR(45) UNIQUE,
    senha VARCHAR (45) NOT NULL,
    dtCadastro DATE DEFAULT (CURRENT_DATE) NOT NULL,
    avatar VARCHAR(7) DEFAULT 'sunny'NOT NULL,
    nomeReal VARCHAR(45) DEFAULT 'Lost from light' NOT NULL,
    rankUsuario VARCHAR(45) default 'Adormecido' NOT NULL,
    CONSTRAINT ckRank CHECK(rankusuario IN ('Adormecido', 'Desperto', 'Transcendente','Ascendido', 'Santo', 'Tirano', 'Devorador')), 
    CONSTRAINT ckAvatar CHECK (avatar IN ('sunny', 'nephis', 'cassie', 'effie', 'kai', 'jet', 'modret', 'mongrel'))
);
CREATE TABLE jogo(
    idJogo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
    dificuldade VARCHAR(20)NOT NULL
);
CREATE TABLE pontuacao(
	idPontuacao  INT AUTO_INCREMENT, 
    pontuacao INT, 
    resultado VARCHAR(45), 
    horarioInicio DATETIME NOT NULL,
    horarioFinal DATETIME, 
	fkUsuario INT, 
    fkJogo INT, 
    cliques INT,
	CONSTRAINT pkCompostaPontuacao PRIMARY KEY (idPontuacao, fkJogo, fkUsuario), 
    CONSTRAINT fkJogoPontuacao FOREIGN KEY (fkJogo) REFERENCES jogo(idJogo), 
	CONSTRAINT fkUsuarioPontuacao FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
); 
CREATE TABLE mensagem(
    idMensagem INT PRIMARY KEY AUTO_INCREMENT,
    mensagem VARCHAR (250),
    horario DATETIME,
    fkUsuario INT,
    CONSTRAINT fkUsuarioMensagem FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);
INSERT INTO jogo(nome, dificuldade) values
	('sunnyGame','facil'),
	('sunnyGame','medio'),
	('sunnyGame','dificil'),
	('sunnyGame','hardcore'),
	('nephisGame','facil'),
	('nephisGame','medio'),
	('nephisGame','dificil'),
	('nephisGame','hardcore');
CREATE OR REPLACE VIEW records AS
SELECT 
    j.nome AS nomeJogo,
    j.idJogo AS fkJogo,
    u.nome AS nomeJogador,
    TIMESTAMPDIFF(SECOND, p.horarioInicio, p.horarioFinal) AS tempo
FROM pontuacao p
JOIN usuario u ON p.fkUsuario = u.idUsuario
JOIN jogo j ON p.fkJogo = j.idJogo
WHERE p.horarioFinal IS NOT NULL
AND (
    SELECT COUNT(*) 
    FROM pontuacao p2
    WHERE p2.fkJogo = p.fkJogo
      AND p2.horarioFinal IS NOT NULL
      AND TIMESTAMPDIFF(SECOND, p2.horarioInicio, p2.horarioFinal) <= TIMESTAMPDIFF(SECOND, p.horarioInicio, p.horarioFinal)
) <= 10
ORDER BY j.idJogo, tempo;