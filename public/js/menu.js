function digitando_atualizar(x) {
    var texto_x = document.getElementById(`texto_${x}`);
    var ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "white";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -4vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 2px white";
}
let senha_atual_visivel = false
let senha_nova_visivel = false
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
const main = document.getElementById("div_main")
const configuracao = document.getElementById("configuracao")
function mostrarConfiguracao() {
    configuracao.style.display = "flex"
    main.style.display = "flex"
    main.classList.add("main_embassado")
}
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
}




///areaconfiguracoes
const conf_avatar = document.getElementById("conf_avatar")
const conf_conta = document.getElementById("conf_conta")
const conf_seguranca = document.getElementById("conf_seguranca")
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
}

//senha----------------------
function atualizar_senha() {
    // variaveis das input do cadastro
    let senha_atual = document.getElementById("ipt_senha_atual").value
    let senha = document.getElementById("ipt_senha_nova").value
    let conf_senha = document.getElementById("ipt_senha_conf").value
    console.log(senha_atual)
    console.log(senha)
    console.log(conf_senha)
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
    for (i; i < senha.length; i++) {
        caracter = senha[i];

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
    //verificar um email valido ou seja nao pode ter dois @ e tem que ter 1 ponto depois do @

    div_alerta.style.display = "flex"

    while (valido == false) {

        if (senha_atual == '' && senha == '' && conf_senha == '') {
            titulo_erro.innerHTML = "Campos vazios"
            mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
            break
        }
        if (senha_atual == '') {
            titulo_erro.innerHTML = "Campo de senha atual vazio"
            mensagem_erro.innerHTML = "Sem defesa, você não poderá modificar-la. Me diga a sua proteção."
            break
        }
        if (senha == '') {
            titulo_erro.innerHTML = "Campo de senha nova vazio"
            mensagem_erro.innerHTML = "Sem defesa, você não sobreviverá na névoa. Crie sua proteção."
            break
        }
        if (senha.length < 8) {
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
        if (senha != conf_senha) {
            titulo_erro.innerHTML = "As senhas não coincidem"
            mensagem_erro.innerHTML = "As duas forças estão desalinhadas. A senha e sua confirmação devem ser como espelhos — idênticas."
            break
        }
        if (contem_Maiuscula && contem_Especial && contem_Minuscula && contem_Numero && (senha == conf_senha)) {
            valido = true
            div_alerta.style.display = "none"
        }
    }
    //verifica se os inputs estao vazios

    /* aqui modificar depois
    
            if (valido) {
                // Enviando o valor da nova input
                fetch("/usuarios/cadastrar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        // crie um atributo que recebe o valor recuperado aqui
                        // Agora vá para o arquivo routes/usuario.js
                        nomeServer: nome_usuario,
                        emailServer: email,
                        senhaServer: senha,
                        //  idEmpresaVincularServer: idEmpresaVincular
                    }),
                })
                    .then(function (resposta) {
                        console.log("resposta: ", resposta);
        
                        if (resposta.ok) {
                            let cad_sucesso = document.getElementById("div_cad_sucesso")
                            let main = document.querySelector(" main")
                            let text_nome = document.getElementById(`texto_nome_usuario`);
                            let text_senha = document.getElementById(`texto_senha`);
                            let nome_login = document.getElementById(`ipt_nome_usuario`);
                            let senha_login = document.getElementById(`ipt_senha`);
                            cad_sucesso.style.display="flex" 
                            main.style.filter="blur(2px)"
                            ipt_nome_usuario.value = nome_usuario;
                            ipt_senha.value = senha;
        
                            text_nome.style.color = "black";
                            text_nome.style.position = "relative";
                            text_nome.style.transform = "translate(-2.4vw, -6vh)";
                            text_nome.style.transition = "0.7s ease-in-out";
                            nome_login.style.borderBottom = "solid 4px black";
                
                            text_senha.style.color = "black";
                            text_senha.style.position = "relative";
                            text_senha.style.transform = "translate(-2.4vw, -6vh)";
                            text_senha.style.transition = "0.7s ease-in-out";
                            senha_login.style.borderBottom = "solid 4px black";
        
                            /*  setTimeout(() => {
                                  window.location = "login.html";
                              }, "2000");
          
                              limparFormulario();
                              finalizarAguardar();*/
    //             } else {
    //                throw "Houve um erro ao tentar realizar o cadastro!";
    //             }
    //         })
    //        .catch(function (resposta) {
    //             console.log(`#ERRO: ${resposta}`);
    //finalizarAguardar();
    //          });
    //      return false;
    //   }


}
function atualizar_conta() {
    // variaveis das input do cadastro
    let nome_usuario = document.getElementById("ipt_nome_atualizar").value
    let email = document.getElementById("ipt_email_atualizar").value
    let nome_real = document.getElementById("ipt_nome_real").value
    var valido = false;

    //verificar um email valido ou seja nao pode ter dois @ e tem que ter 1 ponto depois do @
    var umarroba = false
    var arroba_invalido = false

    for (let i = 1; i <= email.lenght; i++) {
        if (email[i] == '@' && umarroba == false) {
            umarroba = true
            break
        }
        if (email[i] == '@' && umarroba == true) {
            arroba_invalido = true
        }
    }

    div_alerta.style.display = "flex"
    while (valido == false) {

        if (nome_usuario == '' && email == '' && nome_real == '') {
            titulo_erro.innerHTML = "Campos vazios"
            mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
            break
        }
        if (nome_usuario == '') {
            titulo_erro.innerHTML = "Campo de usuário vazio"
            mensagem_erro.innerHTML = "Nem um nome novo? Até as sombras têm identidade nova."
            break
        }
        if (nome_usuario < 3) {
            titulo_erro.innerHTML = "Nome curto"
            mensagem_erro.innerHTML = "Nomes fracos desaparecem sem deixar vestígios. Escolha com mais poder"
            break
        }
        if (email == '') {
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
        alert("aeeporra")
        if (valido == true) {
            div_alerta.style.display = "none"
            
        }

    }
    //verifica se os inputs estao vazios
    /*      if (valido) {
              // Enviando o valor da nova input
              fetch("/usuarios/cadastrar", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      // crie um atributo que recebe o valor recuperado aqui
                      // Agora vá para o arquivo routes/usuario.js
                      nomeServer: nome_usuario,
                      emailServer: email,
                      senhaServer: senha,
                      //  idEmpresaVincularServer: idEmpresaVincular
                  }),
              })
                  .then(function (resposta) {
                      console.log("resposta: ", resposta);
      
                      if (resposta.ok) {
                          let cad_sucesso = document.getElementById("div_cad_sucesso")
                          let main = document.querySelector(" main")
                          let text_nome = document.getElementById(`texto_nome_usuario`);
                          let text_senha = document.getElementById(`texto_senha`);
                          let nome_login = document.getElementById(`ipt_nome_usuario`);
                          let senha_login = document.getElementById(`ipt_senha`);
                          cad_sucesso.style.display="flex" 
                          main.style.filter="blur(2px)"
                          ipt_nome_usuario.value = nome_usuario;
                          ipt_senha.value = senha;
      
                          text_nome.style.color = "black";
                          text_nome.style.position = "relative";
                          text_nome.style.transform = "translate(-2.4vw, -6vh)";
                          text_nome.style.transition = "0.7s ease-in-out";
                          nome_login.style.borderBottom = "solid 4px black";
              
                          text_senha.style.color = "black";
                          text_senha.style.position = "relative";
                          text_senha.style.transform = "translate(-2.4vw, -6vh)";
                          text_senha.style.transition = "0.7s ease-in-out";
                          senha_login.style.borderBottom = "solid 4px black";
      
                          /*  setTimeout(() => {
                                window.location = "login.html";
                            }, "2000");
        
                            limparFormulario();
                            finalizarAguardar();*/
    //                  } else {
    //                        throw "Houve um erro ao tentar realizar o cadastro!";
    //                   }
    //               })
    //              .catch(function (resposta) {
    //                  console.log(`#ERRO: ${resposta}`);
    //finalizarAguardar();
    //             });
    //           return false;
    //    }
}


/*avatar comeca aqui -----------*/
const avatar_atual = document.getElementById("avatar_atual")
const sunny= 'assets/img/sunny_xom_fundo.webp'
const nephis = 'assets/img/nephis_aba_imagem.png'
const cassie = 'assets/img/nephis_aba_imagem.png'
const effie = 'assets/img/sunny_xom_fundo.webp'
const kai = 'assets/img/nephis_aba_imagem.png'
const jet = 'assets/img/sunny_xom_fundo.webp'
const modret = 'assets/img/nephis_aba_imagem.png'
const noctis = 'assets/img/sunny_xom_fundo.webp'
function trocar_avatar(x) {
    avatar_atual.src= x
}























/*avatar comeca aqui -----------*/