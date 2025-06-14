var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/comecar_jogo", function (req, res) {
    gameController.comecar_jogo(req, res);
});
router.put("/pontuar_nephis", function (req, res) {
    gameController.pontuar_nephis(req, res);
});
router.put("/pontuar_sunny", function (req, res) {
    gameController.pontuar_sunny(req, res);
});
router.get("/listar_score/:fkUsuario", function (req, res) {
    gameController.listar_score(req, res);
});
router.get("/listar_linha/:fkUsuario", function (req, res) {
    gameController.listar_linha(req, res);
});
router.get("/tempo-real/:fkUsuario", function (req, res) {
    gameController.buscarMedidasEmTempoReal(req, res);
})
router.get("/tempo-real-pizza/:fkUsuario", function (req, res) {
    gameController.atualizar_grafico_pizza(req, res);
})
router.get("/listar_ranking", function (req, res) {
    gameController.listar_ranking(req, res);
})
router.get("/listar_records/:fkJogo", function (req, res) {
    gameController.listar_records(req, res);
})
router.get("/listar_todos", function (req, res) {
    gameController.listar_todos(req, res);
})
router.get("/listar_ranking_usuario/:pontos_atual", function (req, res) {
    gameController.listar_ranking_usuario(req, res);
})
router.post("/publicar/:fkUsuario", function (req, res) {
    gameController.publicar(req, res);
});
router.get("/listar_mensagens", function (req, res) {
    gameController.listar_mensagens(req, res);
});
router.put("/editar/:idUsuario", function (req, res) {
    gameController.atualizar_ranking(req, res);
});
module.exports = router;