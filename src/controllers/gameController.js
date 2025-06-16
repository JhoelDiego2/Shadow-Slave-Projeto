
var gameModel = require("../models/gameModel");
function pontuar_nephis(req, res) {
    var fkGame = req.body.fkGameServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var resultado = req.body.resultadoServer;
    var score = req.body.scoreServer;
    var idPontuacao = req.body.idPontuacaoServer;
    if (fkGame == undefined) {
        res.status(400).send("Seu fkGame está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Sua score está undefined!");
    } else if (idPontuacao == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else if (resultado == undefined) {
        res.status(400).send("Sua resultado está undefined!");
    } else{
        gameModel.pontuar_nephis(fkGame, fkUsuario, resultado, score, idPontuacao)
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
    var fkGame = req.body.fkGameServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var resultado = req.body.resultadoServer;
    var score = req.body.scoreServer;
    var idPontuacao = req.body.idPontuacaoServer;
    if (fkGame == undefined) {
        res.status(400).send("Seu fkGame está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Sua score está undefined!");
    } else if (idPontuacao == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else if (resultado == undefined) {
        res.status(400).send("Sua resultado está undefined!");
    } else{
        gameModel.pontuar_sunny(fkGame, fkUsuario, resultado, score, idPontuacao)
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
    var fkUsuario = req.params.fkUsuario;
    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkusuario está undefined!");
    } else {
        gameModel.listar_score(fkUsuario)
            .then(function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);

                if (resultado.length > 0) {
                    console.log(resultado);
                    res.json({
                        scores: resultado
                    });
                } else {
                    res.status(204).json({ scores: [] });
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a busca das linhas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function listar_linha(req, res) {
    var fkUsuario = req.params.fkUsuario;
    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkusuario está undefined!");
    } else {
        gameModel.listar_linha(fkUsuario)
            .then(function (resultado_linha) {
                console.log(`\nResultados encontrados: ${resultado_linha.length}`);

                if (resultado_linha.length > 0) {
                    console.log(resultado_linha);
                    res.json({
                        linhas: resultado_linha
                    });
                } else {
                    res.status(204).json({ linhas: [] });
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a busca das linhas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
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
function atualizar_grafico_pizza(req, res) {
    var fkUsuario = req.params.fkUsuario;
    console.log(`Recuperando kpis em tempo real`);
    gameModel.atualizar_grafico_pizza(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas kpis pízza.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listar_ranking(req, res) {
    console.log(`Recuperando ranking em tempo real`);
    gameModel.listar_ranking().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas ranking.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listar_records(req, res) {
    var fkJogo = req.params.fkJogo;
    console.log(`Recuperando ranking em tempo real`);
    gameModel.listar_records(fkJogo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas ranking.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listar_todos(req, res) {
    console.log(`Recuperando ranking em tempo real`);
    gameModel.listar_todos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas ranking.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listar_ranking_usuario(req, res) {
    var pontos_atual = req.params.pontos_atual;
    console.log(`Recuperando ranking em tempo real`);
    gameModel.listar_ranking_usuario(pontos_atual).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas ranking.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function publicar(req, res) {
    var mensagem = req.body.mensagem;
    var fkUsuario = req.params.fkUsuario;
    if (mensagem == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else {
        gameModel.publicar(mensagem, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function listar_mensagens(req, res) {
    gameModel.listar_mensagens().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function melhor_media(req, res) {
    gameModel.melhor_media().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function atualizar_ranking(req, res) {
    var rankUsuario = req.body.rank;
    var idUsuario = req.params.idUsuario;

    gameModel.atualizar_ranking(rankUsuario, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}
function comecar_jogo(req, res) {
    var fkGame = req.body.fkGameServer;
    var fkUsuario = req.body.fkUsuarioServer;
    if (fkGame === undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (fkUsuario === undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else {
        gameModel.comecar_jogo(fkGame, fkUsuario)
            .then(function (resultado) {
                var idPontuacao = resultado.insertId;
                res.json({ id: idPontuacao });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    pontuar_nephis,
    pontuar_sunny,
    listar_score,
    listar_linha,
    buscarMedidasEmTempoReal,
    atualizar_grafico_pizza,
    listar_ranking_usuario,
    listar_todos,
    listar_records,
    listar_ranking,
    publicar,
    listar_mensagens,
    atualizar_ranking,
    comecar_jogo, 
    melhor_media,
}