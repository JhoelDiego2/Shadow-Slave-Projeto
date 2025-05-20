var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function pontuar_nephis(fkGame, fkUsuario,resultado,  score, tempo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuar_nephis():", fkGame,fkUsuario, resultado,  score, tempo);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO score (fkGame, fkUsuario, resultado,  score, tempo) VALUES
            ('${fkGame}','${fkUsuario}', '${resultado}', '${score}', '${tempo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function pontuar_sunny(fkGame, fkUsuario,resultado,  score, tempo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuar_sunny():", fkGame,fkUsuario,resultado, score, tempo);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO score (fkGame, fkUsuario, resultado, score, tempo) VALUES
            ('${fkGame}','${fkUsuario}', '${resultado}', '${score}', '${tempo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_score(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_score(): ", fkUsuario)
    var instrucaoSql = `
        SELECT fkGame, COUNT(idScore) AS total_partidas, SUM(score) AS total_cliques,
                SUM(tempo) AS tempo_total_segundos, SUM(score) / SUM(tempo) AS media_cliques_por_segundo,
                MIN(tempo) AS menor_tempo
        FROM score  WHERE fkUsuario = '${fkUsuario}'  GROUP BY fkGame  ORDER BY fkGame;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_linha(fkUsuario) {
console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_linha(): ", fkUsuario)

    var instrucaoSql = ` SELECT score, DATE_FORMAT(horario,'%d/%m %H:%i:%s') as horario  FROM score  WHERE fkUsuario = ${fkUsuario}
                    ORDER BY horario DESC  LIMIT 15`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasEmTempoReal(fkUsuario) {
console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar_medidas_tempo_real_linha(): ", fkUsuario)

    var instrucaoSql = ` SELECT score, DATE_FORMAT(horario,'%d/%m %H:%i:%s') as horario  FROM score  WHERE fkUsuario = ${fkUsuario}
                    ORDER BY horario DESC         LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizar_grafico_pizza(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar_grafico_pizza(): ", fkUsuario)
    var instrucaoSql = `
        SELECT fkGame, COUNT(idScore) AS total_partidas, SUM(score) AS total_cliques,
                SUM(tempo) AS tempo_total_segundos, SUM(score) / SUM(tempo) AS media_cliques_por_segundo,
                MIN(tempo) AS menor_tempo
        FROM score WHERE fkUsuario = '${fkUsuario}'   GROUP BY fkGame  ORDER BY fkGame;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_ranking() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_ranking(): ", )
    var instrucaoSql = `
        SELECT u.avatar, u.nome, ROUND(SUM(s.score),2) AS score_total FROM score s
            JOIN usuario u ON s.fkUsuario = u.idUsuario
        GROUP BY fkUsuario ORDER BY score_total DESC LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar_records() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_records(): ", )
    var instrucaoSql = `
        select * from ranking;
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
        FROM ( SELECT  s.fkUsuario, SUM(s.score) AS score_total
            FROM  score s GROUP BY  s.fkUsuario
            HAVING  score_total > ${pontos_atual}
        ) as subConsulta;
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
};