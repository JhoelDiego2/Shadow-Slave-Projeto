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
    imagem_de_fundo.style.background = "url('./assets/img/fundo_nephis.png')"
    imagem_de_fundo.style.transform = "translateX(100%)"
    imagem_de_fundo.style.backgroundSize = "cover"
  }
  function trocar_cadastro() {
    let imagem_de_fundo = document.getElementById("imagem_de_fundo");
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













function login() {
    var senhalogin = ipt_senhaLogin.value;
    var emaillogin = ipt_emailLogin.value;

    var storedEmail = localStorage.getItem('usuario_email');
    var storedPassword = localStorage.getItem('usuario_password');

    console.log("Tentando logar com:");
    console.log("Email digitado:", emaillogin);
    console.log("Senha digitada:", senhalogin);
    console.log("Email armazenado:", storedEmail);
    console.log("Senha armazenada:", storedPassword);




    if (!storedEmail || !storedPassword) {
        alert('Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.');
    }


    if (senhalogin != storedPassword) {
        alert('Senha incorreta');
    } else if (emaillogin != storedEmail) {
        alert('Email incorreto');
    } else {
        alert('login feito')
        //window.location.href = 'game.html';
    }
}

