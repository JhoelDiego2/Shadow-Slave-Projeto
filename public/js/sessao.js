
// sessão
function validarSessao() {
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;
    var nomeReal = sessionStorage.NOME_REAL_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_nome_real = document.getElementById("b_nome_real");

    if (idUsuario != null && nome != null && nomeReal != null) {
        b_usuario.innerHTML = nome;
        b_nome_real.innerHTML = nomeReal;
    } else {
        console.log("usuario nao cadastrado ou elemenetos nao encontrados ")
        // window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login-cadastro.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

