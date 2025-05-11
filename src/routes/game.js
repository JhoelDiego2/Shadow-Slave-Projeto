var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/pontuar_nephis", function (req, res) {
    gameController.pontuar_nephis(req, res);
});
router.post("/pontuar_sunny", function (req, res) {
    gameController.pontuar_sunny(req, res);
});
router.get("/listar_score", function (req, res) {
    gameController.listar_score(req, res);
});
router.get("/listar_linha", function (req, res) {
    gameController.listar_linha(req, res);
});
router.get("/listar_linha/:fkUsuario", function (req, res) {
    gameController.listar_linha(req, res);
})
router.get("/tempo-real/:fkUsuario", function (req, res) {
    gameController.buscarMedidasEmTempoReal(req, res);
})
module.exports = router;