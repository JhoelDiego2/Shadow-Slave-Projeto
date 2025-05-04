var usuarioModel = require("../models/usuarioModel");
//////
function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;
    if (nome == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nome, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            avatar: resultadoAutenticar[0].avatar,
                            nomeReal: resultadoAutenticar[0].nomeReal, 
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("usuario e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

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
function atualizar_senha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var senha_atual = req.body.senha_atualServer;
    var senha_nova = req.body.senha_novaServer;
    var conf_senha = req.body.conf_senhaServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (senha_atual == undefined) {
        res.status(400).send("Sua senha atual está undefined!");
    } else if (senha_nova == undefined) {
        res.status(400).send("Sua senha nova está undefined!");
    } else if (conf_senha == undefined) {
        res.status(400).send("Sua confirmação de senha está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id usuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizar_senha(senha, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atualização da senha! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function atualizar_conta(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var nomeReal = req.body.nomeRealServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome de usuario novo está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu novo email está undefined!");
    } else if (nomeReal == undefined) {
        res.status(400).send("Seu novo nome real  está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id usuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizar_conta( nome, email, nomeReal, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atualização da conta! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function atualizar_avatar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var avatar= req.body.avatarServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (avatar == undefined) {
        res.status(400).send("Seu novo avatar está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id usuario está undefined!");
    }else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizar_avatar( avatar, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atualização da conta! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    atualizar_senha,
    atualizar_conta,
    atualizar_avatar
}