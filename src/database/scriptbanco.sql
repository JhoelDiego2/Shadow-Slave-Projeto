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
alter table usuario  add column rankUsuario varchar(45) default 'Adormecido';
alter table usuario add constraint ckRank check(rankusuario in ('Adormecido', 'Desperto', 'Transcendente' 'Ascendido', 'Santo', 'Tirano', 'Devorador')); 
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
alter table score add column horario datetime default current_timestamp;
select * from score; 
insert into score values
	(default, 6, 19, 72, 17, '2025-05-10 23:12:59'),
    (default, 6, 19, 72, 17, '2025-05-10 23:13:00'),
    (default, 6, 19, 72, 17, '2025-05-10 23:13:02'),
    (default, 6, 19, 72, 17, '2025-05-10 23:13:20'),
    (default, 6, 19, 72, 17, '2025-05-10 23:13:40'),
    (default, 6, 19, 72, 17, '2025-05-10 23:13:50'),
    (default, 6, 19, 72, 17, '2025-05-10 23:14:01'),
    (default, 6, 19, 72, 17, '2025-05-10 23:14:10');
    

update score set horario = '2025-05-10 18:10:23' where idScore = 8;
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
insert into score values
	(default, 3, 19, 18, 18,  default);
desc score;

SELECT fkGame, score, DATE_FORMAT(horario,'%H:%i:%s') as horario FROM score WHERE fkUsuario = 19;
select fkGame, count(idScore) as soma_jogo from score group by fkGame order by fkGame;
SELECT fkGame, SUM(score) AS total_cliques, SUM(tempo) AS tempo_total_segundos, SUM(score) /SUM(tempo) AS media_cliques_por_segundo
	FROM score GROUP BY fkGame ORDER BY fkGame;
SELECT fkGame, min(tempo) as menor_sunny from score  group by fkGame order by fkGame;
--  select com os tres 
SELECT 
  fkGame,
  COUNT(idScore) AS total_partidas,
  SUM(score) AS total_cliques,
  SUM(tempo) AS tempo_total_segundos,
  SUM(score) / SUM(tempo) AS media_cliques_por_segundo,
  MIN(tempo) AS menor_tempo
FROM score
GROUP BY fkGame
ORDER BY fkGame;

SELECT score, DATE_FORMAT(horario,'%H:%i:%s') as horario  FROM score  WHERE fkUsuario = 19
                    ORDER BY horario asc  LIMIT 15;


        SELECT fkGame, COUNT(idScore) AS total_partidas, SUM(score) AS total_cliques,
                SUM(tempo) AS tempo_total_segundos, SUM(score) / SUM(tempo) AS media_cliques_por_segundo,
                MIN(tempo) AS menor_tempo
        FROM score where fkUsuario = 19 
        GROUP BY fkGame   ORDER BY fkGame;
        
        select * from usuario;
                select * from score;