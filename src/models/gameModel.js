var database = require("../database/config")

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function comecar_jogo(fkGame, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuar_nephis():", );
    var instrucaoSql = `
        INSERT INTO pontuacao (fkJogo, fkUsuario, horarioInicio) VALUES
            ('${fkGame}','${fkUsuario}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function pontuar_nephis(fkGame, fkUsuario,resultado,  score, idPontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuar_nephis():", fkGame, fkUsuario,resultado,  score, idPontuacao);
    var instrucaoSql = `
        UPDATE pontuacao set resultado = '${resultado}' , 
                    pontuacao = ${score}, 
                    horarioFinal = NOW(), 
                    cliques = ${score}
                    where fkUsuario = ${fkUsuario} and fkJogo = ${fkGame} and idPontuacao = ${idPontuacao}

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function pontuar_sunny(fkGame, fkUsuario,resultado,  score,idPontuacao ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuar_sunny():", fkGame,fkUsuario,resultado, score, idPontuacao);
    var instrucaoSql = `

                UPDATE pontuacao set resultado = '${resultado}' , 
                    pontuacao = ${score}, 
                    horarioFinal = NOW(), 
                    cliques = null
                    where fkUsuario = ${fkUsuario} and fkJogo = ${fkGame} and idPontuacao = ${idPontuacao}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_score(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_score(): ", fkUsuario)
    var instrucaoSql = `
            SELECT 
                fkJogo,
                COUNT(idPontuacao) AS total_partidas,
                SUM(pontuacao) as total_pontos,
                SUM(cliques) AS total_cliques,
                SUM(TIMESTAMPDIFF(SECOND, horarioInicio, horarioFinal)) AS tempo_total_segundos,
                MIN(TIMESTAMPDIFF(SECOND, horarioInicio, horarioFinal)) AS menor_tempo
            FROM    pontuacao   WHERE  fkUsuario = '${fkUsuario}'   GROUP BY   fkJogo  ORDER BY   fkJogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_linha(fkUsuario) {
console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_linha(): ", fkUsuario)

    var instrucaoSql = ` SELECT pontuacao as score, DATE_FORMAT(horarioFinal,'%d/%m %H:%i:%s') as horario  FROM pontuacao  WHERE fkUsuario = ${fkUsuario}
                    ORDER BY horarioFinal DESC  LIMIT 15`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoReal(fkUsuario) {
console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar_medidas_tempo_real_linha(): ", fkUsuario)

    var instrucaoSql = ` SELECT pontuacao, DATE_FORMAT(horarioFinal,'%d/%m %H:%i:%s') as horario  FROM pontuacao  WHERE fkUsuario = ${fkUsuario}
                    ORDER BY horarioFinal DESC         LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizar_grafico_pizza(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar_grafico_pizza(): ", fkUsuario)
    var instrucaoSql = `
            SELECT 
                fkJogo,
                COUNT(idPontuacao) AS total_partidas,
                SUM(pontuacao) as total_pontos,
                SUM(cliques) AS total_cliques,
                SUM(TIMESTAMPDIFF(SECOND, horarioInicio, horarioFinal)) AS tempo_total_segundos,
                MIN(TIMESTAMPDIFF(SECOND, horarioInicio, horarioFinal)) AS menor_tempo
            FROM    pontuacao   WHERE  fkUsuario = '${fkUsuario}'   GROUP BY   fkJogo  ORDER BY   fkJogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_ranking() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_ranking(): ", )
    var instrucaoSql = `
        SELECT u.avatar, u.nome, ROUND(SUM(s.pontuacao),2) AS score_total FROM pontuacao s
            JOIN usuario u ON s.fkUsuario = u.idUsuario
        GROUP BY fkUsuario ORDER BY score_total DESC LIMIT 10;
    `;
    console.log("Executando a instrução SQL------------------------------------: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_records(fkJogo) {
    console.log("----------------------------------------------------------ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_records(): ", )
    var instrucaoSql = `
    select * from records where fkJogo =${fkJogo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_todos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_todos(): ", )
    var instrucaoSql = `
        select COUNT(*) as total_usuarios from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_ranking_usuario(pontos_atual) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_ranking_usuario(): ", pontos_atual )
    var instrucaoSql = `
        SELECT  COUNT(*) AS posicoes_acima
        FROM ( SELECT  s.fkUsuario, SUM(s.pontuacao) AS score_total
            FROM  pontuacao s GROUP BY  s.fkUsuario
            HAVING  score_total > ${pontos_atual}
        ) as subConsulta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function publicar(mensagem, fkUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", mensagem, fkUsuario);
    var instrucaoSql = `
        insert into mensagem (mensagem, fkUsuario) values
            ('${mensagem}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_mensagens() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT u.nome, u.avatar, u.rankUsuario, f.mensagem, DATE_FORMAT(f.horario,'%d/%m %H:%i:%s') as horario, f.fkUsuario
            from usuario u join mensagem f on u.idUsuario = f.fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizar_ranking(rankUsuario, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", rankUsuario, idUsuario);
    var instrucaoSql = `
        UPDATE usuario SET rankUsuario = '${rankUsuario}' WHERE idUsuario = ${idUsuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    pontuar_nephis,
    pontuar_sunny,
    listar_score,
    listar_linha,
    cadastrar, 
    buscarMedidasEmTempoReal, 
    atualizar_grafico_pizza,
    listar_ranking,
    listar_records,
    listar_todos,
    listar_ranking_usuario,
    publicar, 
    listar_mensagens,
    atualizar_ranking, 
    comecar_jogo
};