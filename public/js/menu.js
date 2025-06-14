const seccoes = ['section_games', 'estatisticas', 'section_sunny', 'section_nephis', 'forum'];
const avatar_bd = document.querySelectorAll(".b_avatar")
const sunny = "assets/img/sunny-chibi-2.png"
const nephis = "assets/img/nephis-chibi.png"
const cassie = "assets/img/cassie-chibi.png"
const effie = "assets/img/effie-chibi.png"
const kai = "assets/img/kai-chibi.png"
const jet = "assets/img/jet-chibi.png"
const modret = "assets/img/modret-chibi.png"
const mongrel = "assets/img/mongrel-chibi.png"
const main = document.getElementById("div_main")
const configuracao = document.getElementById("configuracao");
const conf_avatar = document.getElementById("conf_avatar")
const conf_conta = document.getElementById("conf_conta")
const conf_deletar = document.getElementById("conf_deletar")
const conf_seguranca = document.getElementById("conf_seguranca")
const alerta_suceso = document.getElementById("div_cad_sucesso")
const fundo_alertas = document.querySelector(".fundo_alertas")
const total_mensagens_chat = document.getElementById('total_mensagens')
const feed = document.getElementById("feed_container");
const caracteresEspeciais = "!@#$%^&*()_+-=[]{};':|,.<>/?";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const avatar = sessionStorage.AVATAR_USUARIO
const idUsuario = sessionStorage.ID_USUARIO;
let senha_atual_visivel = false
let senha_nova_visivel = false
let configuracao_visivel = false
let secaoAtiva = null;
window.addEventListener('load', atualizarFeed);
window.addEventListener('load', prencherAvatar);


function prencherAvatar() {
    for (let i = 0; i < avatar_bd.length; i++) {
        avatar_bd[i].src = avatares[avatar]
    }
}
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
    const senha_atual = document.getElementById("ipt_senha_atual")
    const icone = document.getElementById("icone_senha_atual")
    if (senha_atual_visivel == false) {
        senha_atual.type = "text"
        icone.src = "assets/svg/visible-password-icon.svg"
        senha_atual_visivel = true
    } else {
        senha_atual.type = "password"
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
function ocultar_conf_direito() {
    conf_avatar.style.display = "none"
    conf_conta.style.display = "none"
    conf_seguranca.style.display = "none"
    conf_deletar.style.display = "none"
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
function mostrarDeletarConta() {
    ocultar_conf_direito()
    conf_deletar.style.display = "flex"

}
function tirar_alerta() {
    div_alerta.style = "display:none"
    fundo_alertas.style.display = "none"
}
function atualizar_senha() {
    let senha_atual = document.getElementById("ipt_senha_atual").value
    let senha_nova = document.getElementById("ipt_senha_nova").value
    let conf_senha = document.getElementById("ipt_senha_conf").value
    var valido = false;
    var contem_Maiuscula = false;
    var contem_Minuscula = false;
    var contem_Numero = false;
    var contem_Especial = false;
    var i = 0
    var caracter = 0
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
                        return fetch("/usuarios/atualizar_senha", {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                senhaNovaServer: senha_nova,
                                idUsuarioServer: idUsuario
                            }),
                        });
                    } else {
                        const div_alerta = document.getElementById("div_alerta")
                        const titulo = document.getElementById("titulo_erro")
                        const mensagem = document.getElementById("mensagem_erro")
                        div_alerta.style.display = "flex"
                        titulo.innerHTML = "Senha Atual Incorreta"
                        mensagem.innerHTML = "enha atual não coincide com a senha do banco de dados"
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
var b_usuario = document.getElementById("b_usuario");
var b_nome_real = document.getElementById("b_nome_real");
const cad_sucesso = document.getElementById("div_cad_sucesso")

function atualizar_conta() {
    let nome_usuario_atualizar = document.getElementById("ipt_nome_atualizar").value
    let email_atualizar = document.getElementById("ipt_email_atualizar").value
    let nome_real = document.getElementById("ipt_nome_real").value
    var valido = false;
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
        fetch("/usuarios/atualizar_conta", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeServer: nome_usuario_atualizar,
                emailServer: email_atualizar,
                nomeRealServer: nome_real,
                idUsuarioServer: idUsuario
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
                    b_nome_real.innerHTML = nome_real
                    b_usuario.innerHTML = nome_usuario_atualizar
                } else {
                    throw "Houve um erro ao tentar atualizar a conta!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        return false;
    }
}
function trocar_avatar(x, y) {
    avatar_atual.src = x
    ultimo_avatar = x
    ultimo_avatar_nome = y
}
function atualizar_avatar() {
    avatar_bd[0].src = ultimo_avatar
    avatar_bd[1].src = ultimo_avatar
    avatar_bd[2].src = ultimo_avatar
    fetch("/usuarios/atualizar_avatar", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            avatarServer: ultimo_avatar_nome,
            idUsuarioServer: idUsuario
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                cad_sucesso.style.display = "flex"
                fundo_alertas.style.display = "flex"
                sessionStorage.setItem('AVATAR_USUARIO', ultimo_avatar_nome);
                sessionStorage.AVATAR_USUARIO = json.avatar;
            } else {
                throw "Houve um erro ao tentar atualizarO AVATAR!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    return false;
}
function abrir_descricao(nome) {
    const nome_card = document.getElementById(`jogo_${nome}`)
    const descricao = nome_card.querySelector(".descricao_jogo")
    descricao.style.display = "flex"
}
function fechar_descricao(nome) {
    const nome_card = document.getElementById(`jogo_${nome}`)
    const descricao = nome_card.querySelector(".descricao_jogo")
    descricao.classList.add("descricao_jogo_primeiro")
    setTimeout(() => {
        descricao.classList.remove("descricao_jogo_primeiro")
        descricao.style.display = 'none'
    }, 2000)
}


function bolinha(nome) {
    let index = 0;
    const seccao = document.getElementById(`section_${nome}`)
    const carregamento = seccao.querySelector(".carregamento_menu");
    const bolinhas = carregamento.querySelectorAll("span");
    for (let index = 0; index < bolinhas.length; index++) {
        bolinhas[index].classList.remove("pula")
    }
    function animar() {
        if (index < bolinhas.length) {
            bolinhas[index].classList.add("pula");
            index++;
            setTimeout(animar, 100);
        }
    }
    animar();
}
const seccao_menu = document.getElementById("section_games")
const grafico_um = document.getElementById('grafico_dificuldade')
const grafico_dois = document.getElementById('grafico_dificuldade_dois')
function abrir_jogo_sunny() {
    const seccao = document.getElementById("section_sunny")
    const menu_carregando = document.getElementById("sunny-carregando")
    seccao_menu.style.display = "none"
    seccao.style.display = "flex"

    bolinha('sunny')
    setTimeout(
        () => menu_carregando.style.display = "none", 3000
    )
}
function abrir_jogo_nephis() {
    const seccao = document.getElementById("section_nephis")
    const menu_carregando = document.getElementById("nephis-carregando")
    seccao_menu.style.display = "none"
    seccao.style.display = "flex"
    bolinha('nephis')
    setTimeout(
        () => menu_carregando.style.display = "none", 3000
    )
}

function mudar_grafico() {
    var grafico_atual = document.getElementById('select_dificuldade').value
    if (grafico_atual == 'Sunny_Game') {
        grafico_um.style.display = 'flex'
        grafico_dois.style.display = 'none'
    }
    if (grafico_atual == 'Nephis_Game') {
        grafico_um.style.display = 'none'
        grafico_dois.style.display = 'flex'

    }
}
function limparFormulario() {
    document.getElementById("form_postagem").reset();
}
const fkUsuario = sessionStorage.ID_USUARIO;
function publicar() {
    var corpo = {
        mensagem: form_postagem.descricao.value
    }
    fetch(`/game/publicar/${fkUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            atualizarFeed();
            limparFormulario();
        } else if (resposta.status == 404) {
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}
function atualizarFeed() {
    var fkUsuario = sessionStorage.ID_USUARIO;
    fetch("/game/listar_mensagens").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                throw "Nenhum resultado encontrado!!";
            }
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                total_mensagens_chat.innerHTML = resposta.length
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var resultado = resposta[i];
                    if (fkUsuario == resultado.fkUsuario) {
                        feed.innerHTML += `
                            <div class="div_feed div_feed_usuario">
                                <img src="${avatares[resultado.avatar]}" alt="" class="avatar_mensagem">
                                <div class="div_mensagem">
                                    <p class="nome_mensagem">${resultado.nome}</p>
                                    <p class="mensagem_counteudo">
                                        ${resultado.mensagem}
                                    </p>
                                    <p class="data_mensagem">${resultado.horario}</p>
                                </div>
                            </div>
                            `
                    } else {
                        feed.innerHTML += `
                            <div class="div_feed">
                                <img src="${avatares[resultado.avatar]}" alt="" class="avatar_mensagem">
                                <div class="div_mensagem">
                                    <p class="nome_mensagem">${resultado.nome}</p>
                                    <p class="mensagem_counteudo">
                                        ${resultado.mensagem}
                                    </p>
                                    <p class="data_mensagem">${resultado.horario}</p>
                                </div>
                            </div>
                            `
                    }
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}
function fechar_alertas_geral() {
    fechar_alerta_atualizacao()
    tirar_alerta()
}
function fechar_tudo() {
    fechar_configuracao()
}
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
function fechar_alerta_atualizacao() {
    alerta_suceso.style.display = "none"
    fundo_alertas.style.display = "none"
}

function fecharTodasSecoes() {
    for (let i = 0; i < seccoes.length; i++) {
        const secao = document.getElementById(seccoes[i]);
        if (secao.style.display != "none") {
            secao.classList.remove("section-games-entrada");
            secao.classList.add("section-games-saida");
            setTimeout(() => {
                secao.style.display = "none";
            }, 2000);
        }
    }
    secaoAtiva = null;
}

function trocar_modulo(nome_section) {
    const novaSecao = document.getElementById(nome_section);
    if (secaoAtiva === nome_section) {
        fecharTodasSecoes();
        return;
    }
    fecharTodasSecoes();

    novaSecao.classList.remove("section-games-saida");
    novaSecao.style.display = "flex";
    novaSecao.classList.add("section-games-entrada");
    if (nome_section == 'estatisticas') {
        obter_dado_linha()
    } else if (nome_section == 'forum') {
        atualizarFeed()
    }
    secaoAtiva = nome_section;

}
function deletar_conta() {
    let email = ipt_email_deletar.value
    let senha = ipt_senha_deletar.value
    let conf_senha = document.getElementById('ipt_conf_deletar').value
    div_alerta.style.display = "flex"
    fundo_alertas.style.display = "flex"
    console.log(senha + conf_senha)
    if (email == '' || senha == '' || conf_senha == '') {
        titulo_erro.innerHTML = "Campos vazios"
        mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
    } else if (!email.includes('@')) {
        titulo_erro.innerHTML = "E-mail invalido"
        mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."

    } else if (senha != conf_senha) {
        titulo_erro.innerHTML = "Confirmação de senha errada"
        mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."

    } else {
        console.log(fkUsuario)
        fetch(`/usuarios/deletar/${fkUsuario}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "emailserver": email,
                "senhaserver": senha
            }
        }).then(function (resposta) {

            if (resposta.ok) {
                titulo_erro.innerHTML = "Deletação de conta com sucesso"
                mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
}