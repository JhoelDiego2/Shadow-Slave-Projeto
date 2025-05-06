// procedimento para quando ele digitar mudar a cor mas sera mudado
function digitando_cad(x) {
    var texto_x = document.getElementById(`texto_${x}`);
    var ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "#7aa7a4";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -6vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 4px #7aa7a4";
}
function digitando_login(x) {
    var texto_x = document.getElementById(`texto_${x}`);
    var ipt_x = document.getElementById(`ipt_${x}`);
    texto_x.style.color = "black";
    texto_x.style.position = "relative";
    texto_x.style.transform = "translate(-2.4vw, -6vh)";
    texto_x.style.transition = "0.7s ease-in-out";
    ipt_x.style.borderBottom = "solid 4px black";
}

function trocar_login() {
    let imagem_de_fundo = document.getElementById("imagem_de_fundo");
    let sair_icone = document.getElementById("sair_icone")
    imagem_de_fundo.style.background = "url('./assets/img/fundo_nephis.png')"
    imagem_de_fundo.style.transform = "translateX(100%)"
    imagem_de_fundo.style.backgroundSize = "cover"
    sair_icone.src="assets/svg/sair.svg"
  }
  function trocar_cadastro() {
    let imagem_de_fundo = document.getElementById("imagem_de_fundo");
    let sair_icone = document.getElementById("sair_icone")
    sair_icone.src="assets/svg/sair_branco.svg"

    imagem_de_fundo.style.background = "url('./assets/img/imagem_inicial.png')"
    imagem_de_fundo.style.transform = "translateX(0%)"
    imagem_de_fundo.style.backgroundSize = "cover"

  }



  function tirar_alerta() {
    div_alerta.style = "display:none"
    main.style = "filter: blur(0px);  "
  }


  //jvoltar aqui arrumar error criar dois alertas um especial para o casdastro da erro 

  function trocar_login_alerta() {
    let cad_sucesso = document.getElementById("div_cad_sucesso")
    let imagem_de_fundo = document.getElementById("imagem_de_fundo");
    let main = document.querySelector(" main")
    imagem_de_fundo.style.background = "url('./assets/img/fundo_nephis.png')"
    imagem_de_fundo.style.transform = "translateX(100%)"
    imagem_de_fundo.style.backgroundSize = "cover"
    cad_sucesso.style.display="none" 
    main.style = "filter: blur(0px);  "


  }


// funções do cadastro

function cadastrar() {
    // variaveis das input do cadastro
    var nome_usuario = ipt_nome_usuario_cad.value
    var email = ipt_email.value
    var senha = ipt_senha_cad.value
    var conf_senha = ipt_conf_senha.value
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

    div_alerta.style = "display:1"
    main.style = "filter: blur(2.4px); "
    while (valido == false) {

        if (senha == '' && nome_usuario == '' && conf_senha == '' && email == '') {
            titulo_erro.innerHTML = "Campos vazios"
            mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
            break
        }
        if (nome_usuario == '') {
            titulo_erro.innerHTML = "Campo de usuário vazio"
            mensagem_erro.innerHTML = "Nem um nome? Até as sombras têm identidade."
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
        if (arroba_invalido == true) {
            titulo_erro.innerHTML = "E-mail invalido"
            mensagem_erro.innerHTML = "A mensagem se perdeu no vazio. Verifique seu e-mail."
            break
        }
        if (senha == '') {
            titulo_erro.innerHTML = "Campo de senha vazio"
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
            div_alerta.style.display="none"
        }
    }
    //verifica se os inputs estao vazios
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
                } else {
                    div_alerta.style.display="flex"
                    titulo_erro.innerHTML = "Opa, algo deu errado no cadastro "
                      mensagem_erro.innerHTML = "Houve um erro ao tentar realizar o cadastro!"
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                
                console.log(`#ERRO: ${resposta}`);
                //finalizarAguardar();
            });
        return false;
    }
}



// Login

function esqueci() {
    placeholder.style = "color: #7aa7a4;top: 0vh;"
    ipt_esqueci_senha.style.borderBottom = "solid 4px #7aa7a4";


  }
  function activar_esqueci() {
    cartao_esqueci_senha.style = "display:1"
    main.style = "filter: blur(2.4px);  "
    provando.style = "display:none"

  }
  function verificar() {
    const titulo_erro = document.getElementById("titulo_erro")
    const mensagem_erro = document.getElementById("mensagem_erro")
    const div_alerta = document.getElementById("div_alerta")
    var usuario = ipt_nome_usuario.value
    var senha = ipt_senha.value
    var verificar = true

    while (verificar == true) {
      div_alerta.style = "display:1"
      main.style = "filter: blur(2.4px); "
      if (usuario == '' && senha == '') {
        titulo_erro.innerHTML = "Campos vazios"
        mensagem_erro.innerHTML = "Nem ao menos tentou. O vazio responde com silêncio."
        break
      }
      if (usuario == '') {
        titulo_erro.innerHTML = "Campo de usuário vazio"
        mensagem_erro.innerHTML = "Nem um nome? Até as sombras têm identidade."
        break
      }
      if (senha == '') {
        titulo_erro.innerHTML = "Campo de senha vazio"
        mensagem_erro.innerHTML = "Sem uma chave, não há porta que se abra. Nem mesmo as escondidas na escuridão."
        break
      }
      // voltar para colocar o certo
      /*
      if (usuario == 'nao_existe') {
        titulo_erro.innerHTML = "Usuário não existe"
        mensagem_erro.innerHTML = "Procure onde você se perdeu. Porque aqui, você não está."
        break
      }*/
     div_alerta.style.display="none"
      verificar = false
      }
      if (verificar == false) {
        
        console.log("FORM LOGIN: ", usuario);
        console.log("FORM SENHA: ", senha);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: usuario,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.AVATAR_USUARIO = json.avatar;
                    sessionStorage.NOME_REAL_USUARIO= json.nomeReal;

                    setTimeout(function () {
                        window.location = "game.html";
                    }, 2000); // apenas para exibir o loading
                    let div_alerta = document.getElementById("div_alerta")
                    let div_cad = document.getElementById("div_cad_sucesso")
                    let titulo_cad = document.getElementById("titulo_cad")
                    let mensagem_cad = document.getElementById("mensagem_cad")
                    let bottom_mensagem_cad= document.getElementById("bottom_mensagem_cad")
                    div_alerta.style.display="none"
                    div_cad.style.display="flex"
                    titulo_cad.innerHTML= "Login com Sucesso"
                    mensagem_cad.innerHTML = `As sombras reconheceram sua presença. Bem-vindo de volta, ${usuario}.`
                    bottom_mensagem_cad.innerHTML = `ENTRANDO...`
                });

            } else {
                div_alerta.style.display="flex"
               titulo_erro.innerHTML = "Opa, usuario ou senha errados "
                 mensagem_erro.innerHTML = "Procure onde você se perdeu. Porque aqui, você não está."
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
      }
    }
