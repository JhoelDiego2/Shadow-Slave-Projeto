
var gameModel = require("../models/gameModel");
//////
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function pontuar_nephis(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkGame= req.body.fkGameServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var score = req.body.scoreServer;
    var tempo = req.body.tempoServer;


    // Faça as validações dos valores
    if (fkGame == undefined) {
        res.status(400).send("Seu fkGame está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Sua score está undefined!");
    } else if (tempo == undefined) {
        res.status(400).send("Sua score está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gameModel.pontuar_nephis(fkGame, fkUsuario, score, tempo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function pontuar_sunny(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkGame= req.body.fkGameServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var score = req.body.scoreServer;
    var tempo = req.body.tempoServer;


    // Faça as validações dos valores
    if (fkGame == undefined) {
        res.status(400).send("Seu fkGame está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Sua score está undefined!");
    } else if (tempo == undefined) {
        res.status(400).send("Sua score está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gameModel.pontuar_sunny(fkGame, fkUsuario, score, tempo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar_score(req, res) {
  var fkUsuario = req.params.idUsuario;

  gameModel.listar_score(fkUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao listar o score: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function listar_linha(req, res) {

    var fkUsuario = req.params.fkUsuario;

    console.log(`Recuperando medidas em tempo real`);

    gameModel.listar_linha(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarMedidasEmTempoReal(req, res) {

    var fkUsuario = req.params.fkUsuario;

    console.log(`Recuperando medidas em tempo real`);

    gameModel.buscarMedidasEmTempoReal(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    pontuar_nephis,
    pontuar_sunny,
    listar_score,
    listar_linha,
    cadastrar,
    buscarMedidasEmTempoReal,
}