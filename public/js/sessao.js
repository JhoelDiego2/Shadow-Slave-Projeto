
function validarSessao() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var nomeReal = sessionStorage.NOME_REAL_USUARIO;
    var rankUsuario = sessionStorage.RANK_USUARIO

    var b_usuario = document.querySelectorAll(".b_usuario");
    var b_nome_real = document.querySelectorAll(".b_nome_real");
    var b_rank_atual = document.querySelectorAll(".b_rank_atual")
    if (idUsuario != null && nome != null && nomeReal != null) {
        b_usuario[0].innerHTML = nome;
        b_usuario[1].innerHTML = nome;
        b_nome_real[0].innerHTML = nomeReal;
        b_nome_real[1].innerHTML = nomeReal;
        b_rank_atual[0].innerHTML = rankUsuario
        b_rank_atual[1].innerHTML = rankUsuario
    } else {
        console.log("usuario nao cadastrado ou elemenetos nao encontrados ")
    }
}
function limparSessao() {
    sessionStorage.clear();
    window.location = "cadastrologin.html";
}

