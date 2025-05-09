//icones url 
const avatar_bd = document.getElementById("b_avatar")
const sunny = "assets/img/sunny-chibi-2.png"
const nephis = "assets/img/nephis-chibi.png"
const cassie = "assets/img/cassie-chibi.png"
const effie = "assets/img/effie-chibi.png"
const kai = "assets/img/kai-chibi.png"
const jet = "assets/img/jet-chibi.png"
const modret = "assets/img/modret-chibi.png"
const mongrel = "assets/img/mongrel-chibi.png"
const main = document.getElementById("div_main")
const configuracao = document.getElementById("configuracao")
const conf_avatar = document.getElementById("conf_avatar")
const conf_conta = document.getElementById("conf_conta")
const conf_seguranca = document.getElementById("conf_seguranca")
const alerta_suceso = document.getElementById("div_cad_sucesso")
const fundo_alertas = document.querySelector(".fundo_alertas")
let senha_atual_visivel = false
let senha_nova_visivel = false
// para colocar o avatar 
function prencherAvatar() {
    avatar = sessionStorage.AVATAR_USUARIO
    if (avatar == "sunny") {
        avatar_bd.src = sunny
    }
    if (avatar == "nephis") {
        avatar_bd.src = nephis
    }
    if (avatar == "cassie") {
        avatar_bd.src = cassie
    }
    if (avatar == "effie") {
        avatar_bd.src = effie
    }
    if (avatar == "kai") {
        avatar_bd.src = kai
    }
    if (avatar == "jet") {
        avatar_bd.src = jet
    }
    if (avatar == "modret") {
        avatar_bd.src = modret
    }
    if (avatar == "mongrel") {
        avatar_bd.src = mongrel
    }
}

window.addEventListener('load', prencherAvatar);

function digitando_atualizar(x) {
    var texto_x = document.getElementById(`texto_${x}`);
    var ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "white";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -4vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 2px white";
}

function mostrarSenhaAtual() {
    const atual = document.getElementById("ipt_senha_atual")
    const icone = document.getElementById("icone_senha_atual")
    if (senha_atual_visivel == false) {
        atual.type = "text"
        icone.src = "assets/svg/visible-password-icon.svg"
        senha_atual_visivel = true
    } else {
        atual.type = "password"
        icone.src = "assets/svg/invisible-password-icon.svg"
        senha_atual_visivel = false

    }
}
function mostrarSenhaNova() {
    const nova = document.getElementById("ipt_senha_nova")
    const nova_conf = document.getElementById("ipt_senha_conf")
    const icone = document.getElementById("icone_senha_nova")
    const icone_conf = document.getElementById("icone_senha_conf")
    if (senha_nova_visivel == false) {
        nova.type = "text"
        nova_conf.type = "text"
        icone.src = "assets/svg/visible-password-icon.svg"
        icone_conf.src = "assets/svg/visible-password-icon.svg"
        senha_nova_visivel = true

    } else {
        nova.type = "password"
        nova_conf.type = "password"
        icone.src = "assets/svg/invisible-password-icon.svg"
        icone_conf.src = "assets/svg/invisible-password-icon.svg"
        senha_nova_visivel = false

    }
}
let configuracao_visivel = false

function fechar_tudo() {
    fechar_configuracao()
}
// area geral
function fechar_configuracao() {
    configuracao.style.animation = "pop_up_saida 1s ease-out"

    setTimeout(() => {
        configuracao.style.display = "none"
        main.style.display = "none"

        main.classList.remove("main_embassado");
        configuracao.style.animation = "pop_up_animacao 1s ease-out "
    }, 1000);
    configuracao_visivel = false
}
function mostrarConfiguracao() {
    if (configuracao_visivel) {
        fechar_configuracao()
        configuracao_visivel = false
    } else {
        configuracao.style.display = "flex"
        main.style.display = "flex"
        main.classList.add("main_embassado")
        configuracao_visivel = true

    }

}
///areaconfiguracoes

function ocultar_conf_direito() {
    conf_avatar.style.display = "none"
    conf_conta.style.display = "none"
    conf_seguranca.style.display = "none"
}
function mostrarAvatares() {
    ocultar_conf_direito()
    conf_avatar.style.display = "flex"

}
function mostrarConta() {
    ocultar_conf_direito()
    conf_conta.style.display = "flex"

}
function mostrarAlterSenha() {
    ocultar_conf_direito()
    conf_seguranca.style.display = "flex"

}
function tirar_alerta() {
    div_alerta.style = "display:none"
    fundo_alertas.style.display = "none"
}

//senha----------------------
function atualizar_senha() {
    // variaveis das input do cadastro
    let senha_atual = document.getElementById("ipt_senha_atual").value
    let senha_nova = document.getElementById("ipt_senha_nova").value
    let conf_senha = document.getElementById("ipt_senha_conf").value
    let idUsuario = sessionStorage.ID_USUARIO;
    // Variaveis booleanas para  validar a senha
    var valido = false;
    var contem_Maiuscula = false;
    var contem_Minuscula = false;
    var contem_Numero = false;
    var contem_Especial = false;

    // regras para a senha 
    var caracteresEspeciais = "!@#$%^&*()_+-=[]{};':|,.<>/?";
    var numeros = "0123456789";
    var letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // variaveis para o for
    var i = 0
    var caracter = 0

    // varre a string 'senha' aplicando a verificação de todas as regras da senha 
    for (i; i < senha_nova.length; i++) {
        caracter = senha_nova[i];

        if (letrasMaiusculas.includes(caracter)) {
            contem_Maiuscula = true;

        }
        if (letrasMinusculas.includes(caracter)) {
            contem_Minuscula = true;

        }
        if (numeros.includes(caracter)) {
            contem_Numero = true;

        }
        if (caracteresEspeciais.includes(caracter)) {
            contem_Especial = true;

        }
    }
    //verificar um email_atualizarvalido ou seja nao pode ter dois @ e tem que ter 1 ponto depois do @

    div_alerta.style.display = "flex"
    fundo_alertas.style.display = "flex"


    while (valido == false) {

        if (senha_atual == '' && senha_nova == '' && conf_senha == '') {
            titulo_erro.innerHTML = "Campos vazios"
            mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
            break
        }
        if (senha_atual == '') {
            titulo_erro.innerHTML = "Campo de senha atual vazio"
            mensagem_erro.innerHTML = "Sem defesa, você não poderá modificar-la. Me diga a sua proteção."
            break
        }
        if (senha_nova == '') {
            titulo_erro.innerHTML = "Campo de senha nova vazio"
            mensagem_erro.innerHTML = "Sem defesa, você não sobreviverá na névoa. Crie sua proteção."
            break
        }
        if (senha_nova.length < 8) {
            titulo_erro.innerHTML = "Senha Curta"
            mensagem_erro.innerHTML = "Uma proteção tão frágil não resistirá à escuridão. Sua senha precisa de ao menos 8 carateres"
            break
        }
        if (!contem_Maiuscula) {
            titulo_erro.innerHTML = "Senha sem maiuscula"
            mensagem_erro.innerHTML = "Onde está sua presença dominante? A senha precisa conter ao menos uma letra que comande — uma letra maiúscula."
            break
        }
        if (!contem_Minuscula) {
            titulo_erro.innerHTML = "Senha sem minuscula"
            mensagem_erro.innerHTML = "A essência sutil da sombra está ausente. Adicione uma letra minúscula à sua senha."
            break
        }
        if (!contem_Numero) {
            titulo_erro.innerHTML = "Senha sem número"
            mensagem_erro.innerHTML = "Sem números, você vagueia sem rumo na névoa. Invoque ao menos um dígito para seguir adiante."
            break
        }
        if (!contem_Especial) {
            titulo_erro.innerHTML = "Senha sem caratere especial"
            mensagem_erro.innerHTML = "Sua senha carece de caos. Adicione um símbolo do abismo: ! @ # $ % ..."
            break
        }
        if (senha_nova != conf_senha) {
            titulo_erro.innerHTML = "As senhas não coincidem"
            mensagem_erro.innerHTML = "As duas forças estão desalinhadas. A senha e sua confirmação devem ser como espelhos — idênticas."
            break
        }
        if (contem_Maiuscula && contem_Especial && contem_Minuscula && contem_Numero && (senha_nova == conf_senha)) {
            valido = true
            div_alerta.style.display = "none"
            fundo_alertas.style.display = "none"

        }
    }
    //verifica se os inputs estao vazios
    if (valido) {
        function procurar_senha_atualizar(idUsuario, senha_atual, senha_nova) {
            fetch("/usuarios/procurar_senha_atualizar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idUsuarioServer: idUsuario
                }),
            })
                .then(function (resposta) {
                    console.log("ESTOU NO THEN DO procurar_senha_atualizar()!");

                    if (resposta.ok) {
                        return resposta.json();
                    } else {
                        throw "Houve um erro ao tentar realizar a busca da senha!";
                    }
                })
                .then(function (json) {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    console.log("procura_de_senha_deu_certo");

                    let senha_atual_bd = json.senha;

                    if (senha_atual_bd == senha_atual) {
                        // Se a senha atual confere, faz a atualização
                        return fetch("/usuarios/atualizar_senha", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                senhaNovaServer: senha_nova,
                                idUsuarioServer: idUsuario
                            }),
                        });
                    } else {
                        const div_alerta =document.getElementById("div_alerta")
                        const titulo =document.getElementById("titulo_erro")
                        const mensagem =document.getElementById("mensagem_erro")
                        div_alerta.style.display="flex"
                        titulo.innerHTML="Senha Atual Incorreta"
                        mensagem.innerHTML="enha atual não coincide com a senha do banco de dados"

                        throw "Senha atual não coincide com a senha do banco de dados";
                    }
                })
                .then(function (resposta) {
                    if (resposta.ok) {
                        let cad_sucesso = document.getElementById("div_cad_sucesso");
                        cad_sucesso.style.display = "flex";
                        fundo_alertas.style.display = "flex";
                    } else {
                        throw "Houve um erro ao tentar realizar a atualização da senha!";
                    }
                })
                .catch(function (erro) {
                    console.log(`#ERRO: ${erro}`);
                    alert(erro);
                });
        }

        procurar_senha_atualizar(idUsuario, senha_atual, senha_nova);
    }
}

function atualizar_conta() {
    // variaveis das input do cadastro
    let nome_usuario_atualizar = document.getElementById("ipt_nome_atualizar").value
    let email_atualizar = document.getElementById("ipt_email_atualizar").value
    let nome_real = document.getElementById("ipt_nome_real").value
    let idUsuario = sessionStorage.ID_USUARIO;
    var valido = false;
    var b_usuario = document.getElementById("b_usuario");
    var b_nome_real = document.getElementById("b_nome_real");

    //verificar um email_atualizarvalido ou seja nao pode ter dois @ e tem que ter 1 ponto depois do @
    var umarroba = false
    var arroba_invalido = false

    for (let i = 1; i <= email_atualizar.lenght; i++) {
        if (email[i] == '@' && umarroba == false) {
            umarroba = true
            break
        }
        if (email[i] == '@' && umarroba == true) {
            arroba_invalido = true
        }
    }

    div_alerta.style.display = "flex"
    fundo_alertas.style.display = "flex"

    while (valido == false) {

        if (nome_usuario_atualizar == '' && email_atualizar == '' && nome_real == '') {
            titulo_erro.innerHTML = "Campos vazios"
            mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
            break
        }
        if (nome_usuario_atualizar == '') {
            titulo_erro.innerHTML = "Campo de usuário vazio"
            mensagem_erro.innerHTML = "Nem um nome novo? Até as sombras têm identidade nova."
            break
        }
        if (nome_usuario_atualizar < 3) {
            titulo_erro.innerHTML = "Nome curto"
            mensagem_erro.innerHTML = "Nomes fracos desaparecem sem deixar vestígios. Escolha com mais poder"
            break
        }
        if (email_atualizar == '') {
            titulo_erro.innerHTML = "E-mail vazio"
            mensagem_erro.innerHTML = "Nem mesmo os ecos do além conseguem te alcançar sem um destino definido."
            break
        }
        if (nome_real == '') {
            titulo_erro.innerHTML = "Nome realvazio"
            mensagem_erro.innerHTML = "Nem ao menos tem um nome real digno? até os mendigos tem."
            break
        }
        if (arroba_invalido == true) {
            titulo_erro.innerHTML = "E-mail invalido"
            mensagem_erro.innerHTML = "A mensagem se perdeu no vazio. Verifique seu e-mail."
            break
        }
        valido = true

        if (valido == true) {
            div_alerta.style.display = "none"
            fundo_alertas.style.display = "none"

        }

    }
    if (valido) {
        // Enviando o valor da nova input
        fetch("/usuarios/atualizar_conta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome_usuario_atualizar,
                emailServer: email_atualizar,
                nomeRealServer: nome_real,
                idUsuarioServer: idUsuario
                //  idEmpresaVincularServer: idEmpresaVincular
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    let cad_sucesso = document.getElementById("div_cad_sucesso")
                    cad_sucesso.style.display = "flex"
                    fundo_alertas.style.display = "flex"
                    sessionStorage.setItem('NOME_USUARIO', nome_usuario_atualizar);
                    sessionStorage.setItem('NOME_REAL_USUARIO', nome_real);
                    b_nome_real.innerHTML=nome_real
                    b_usuario.innerHTML=nome_usuario_atualizar
                    /*  setTimeout(() => {
                          window.location = "login.html";
                      }, "2000");
  
                      limparFormulario();
                      finalizarAguardar();*/
                } else {
                    throw "Houve um erro ao tentar atualizar a conta!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                //finalizarAguardar();
            });
        return false;
    }
}


/*avatar comeca aqui -----------*/

function trocar_avatar(x, y) {
    avatar_atual.src = x
    ultimo_avatar = x
    ultimo_avatar_nome = y
}

function atualizar_avatar() {
    let idUsuario = sessionStorage.ID_USUARIO;
    avatar_bd.src = ultimo_avatar
    fetch("/usuarios/atualizar_avatar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            avatarServer: ultimo_avatar_nome,
            idUsuarioServer: idUsuario
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                let cad_sucesso = document.getElementById("div_cad_sucesso")
                cad_sucesso.style.display = "flex"
                fundo_alertas.style.display = "flex"
                sessionStorage.setItem('AVATAR_USUARIO', ultimo_avatar_nome);

                sessionStorage.AVATAR_USUARIO = json.avatar;

                /*  setTimeout(() => {
                      window.location = "login.html";
                  }, "2000");

                  limparFormulario();
                  finalizarAguardar();*/
            } else {
                throw "Houve um erro ao tentar atualizarO AVATAR!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            //finalizarAguardar();
        });
    return false;
}

function fechar_alerta_atualizacao() {
    alerta_suceso.style.display = "none"
    fundo_alertas.style.display = "none"
}

function fechar_alertas_geral() {
    fechar_alerta_atualizacao()
    tirar_alerta()
}
let section_jogos_visivel = false
const section_games = document.getElementById("section_games")
function mostrarjogos() {
    const primeiro = document.querySelector(".primeiro")
    const primeiro_desc = primeiro.querySelector(".descricao_jogo")

    if (section_jogos_visivel == false) {
        section_games.classList.remove("section-games-saida")
        section_games.style.display = "flex"
        section_games.classList.add("section-games-entrada")
        section_jogos_visivel = true
    } else {
        section_games.classList.remove("section-games-entrada")
        section_games.classList.add("section-games-saida")
        setTimeout(() => {
            section_games.style.display = "none"
            section_jogos_visivel = false
        }, 2000)
    }
}
function seguinte_jogo() {
    const primeiro = document.querySelector(".primeiro")
    const segundo = document.querySelector(".segundo")
    const terceiro = document.querySelector(".terceiro")
    const quarto = document.querySelector(".quarto")
    const quinto = document.querySelector(".quinto")
    const segundo_desc = segundo.querySelector(".descricao_jogo")
    const primeiro_desc = primeiro.querySelector(".descricao_jogo")
    const quinto_desc = quinto.querySelector(".descricao_jogo")

    segundo_desc.style.display = "flex"
    quinto_desc.style.display = "none"
    primeiro_desc.classList.add("descricao_jogo_primeiro")
    primeiro.classList.add("card-segundo")
    segundo.classList.add("card-segundo")
    terceiro.classList.add("card-segundo")
    quarto.classList.add("card-segundo")
    quinto.classList.add("card-segundo")

    setTimeout(() => {
        primeiro.classList.replace("primeiro", "quinto")
        segundo.classList.replace("segundo", "primeiro")
        terceiro.classList.replace("terceiro", "segundo")
        quarto.classList.replace("quarto", "terceiro")
        quinto.classList.replace("quinto", "quarto")
        primeiro.classList.remove("card-segundo")
        segundo.classList.remove("card-segundo")
        terceiro.classList.remove("card-segundo")
        quarto.classList.remove("card-segundo")
        quinto.classList.remove("card-segundo")
        primeiro_desc.classList.remove("descricao_jogo_primeiro")
    }, 2000)
}

let estatisticas_visivel = false
function mostrardeshbord() {
    const estatisticas = document.getElementById("estatisticas")
    if (estatisticas_visivel) {
        estatisticas.classList.remove("section-games-entrada")
        estatisticas.classList.add("section-games-saida")
        setTimeout(() => {
            estatisticas.style.display = "none"
            estatisticas_visivel = false
        }, 2000)
    } else {
        estatisticas.classList.remove("section-games-saida")
        estatisticas.style.display = "flex"
        estatisticas.classList.add("section-games-entrada")
        estatisticas_visivel = true
    }
}
function bolinha() {
    let index = 0; // Começa do 0, já que os arrays começam do índice 0
    const carregamento = document.querySelector(".carregamento_menu");
    const bolinhas = carregamento.querySelectorAll("span");
    //for para q depois eu condiga ativar novamente a função
    for (let index = 0; index < bolinhas.length; index++) {
        bolinhas[index].classList.remove("pula")
    }
    function animar() {
        if (index < bolinhas.length) {
            bolinhas[index].classList.add("pula"); // Corrigido: "pula" com aspas corretas
            index++;
            setTimeout(animar, 100); // Chama a si mesmo a cada 600ms
        }
    }
    animar();
}

function abrir_jogo_sunny() {
    const seccao_menu = document.getElementById("section_games") 
    const seccao = document.getElementById("section_sunny") 
    const menu_carregando = document.getElementById("sunny-carregando")
    seccao_menu.style.display="none"
    seccao.style.display="flex"
    
    bolinha()
    setTimeout(
        ()=>  menu_carregando.style.display="none", 3000
    )
}
function abrir_jogo_nephis() {
    const seccao_menu = document.getElementById("section_games") 
    const seccao = document.getElementById("section_nephis") 
    const menu_carregando = document.getElementById("nephis-carregando")
    seccao_menu.style.display="none"
    seccao.style.display="flex"
    
    bolinha()
    setTimeout(
        ()=>  menu_carregando.style.display="none", 3000
    )
}



/*
function ativar_pop_u(x, y, z) {
    const div_alerta = document.getElementById("div_alerta")
    const titulo =document.getElementById("titulo_erro")
    const mensagem =document.getElementById("mensagem_erro")
    const botom = document.getElementById("bottom_mensagem")
    div_alerta.style.display = "flex"
    fundo_alertas.style.display = "flex"
    titulo.innerHTML= x
    mensagem.innerHTML= y
    buttom.innerHTML=z

}*/
