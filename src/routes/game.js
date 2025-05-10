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


module.exports = router;