var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.post("/atualizar_senha", function (req, res) {
    usuarioController.atualizar_senha(req, res);
});
router.post("/atualizar_conta", function (req, res) {
    usuarioController.atualizar_conta(req, res);
});
router.post("/atualizar_avatar", function (req, res) {
    usuarioController.atualizar_avatar(req, res);
});

module.exports = router;