let temp_cronometro = 20
let intervalo_cronometro

function comecar_cronometro() {
    let cronometro = document.getElementById("cronometro_sunny")
    cronometro.innerHTML = `0:${temp_cronometro}`

    intervalo_cronometro = setInterval(() => {
        temp_cronometro--
        if (temp_cronometro >= 0) {
            cronometro.innerHTML=`0:${temp_cronometro}`
        } else {
            clearInterval(intervalo_cronometro)
            cronometro.style.color="red"
        }
    }, 1000)
}
function iniciar_jogo_sunny() {
    const menu_jogo = document.querySelector(".menu_jogo")
    menu_jogo.style.display="none"
    comecar_cronometro()
}

function aleatorio() {
    return Math.floor(Math.random() * (96 - 1))
}
let i_sunny = 0
function mudar_posicao() {
    let contador_sunny = document.getElementById("contador_sunny")
    let imagem_sunny = document.getElementById("sunny_player")
    let left = aleatorio()
    let rigth = aleatorio()
    let top = aleatorio()
    let botoom = aleatorio()
    i_sunny++
    if (i_sunny >20) {
        contador_sunny.style.color="#7aa7a4"
    }
    if (i_sunny >30) {
        contador_sunny.style.color="#4b2a58"
    }
    contador_sunny.classList.add("clique")
    imagem_sunny.classList.remove("aparicao")
    imagem_sunny.classList.add("clique")
    setTimeout(() => {
        contador_sunny.innerHTML= i_sunny
    imagem_sunny.style.top = top + '%'
    imagem_sunny.style.bottom = botoom + '%'
    imagem_sunny.style.left = left + '%'
    imagem_sunny.style.right = rigth + '%'
    imagem_sunny.classList.remove("clique")
    imagem_sunny.classList.add("aparicao")
    contador_sunny.classList.remove("clique")

},500
)

}
let nivel_jogo_sunny = '';

function sunny_nivel_jogo(x) {
    const s_facil = document.getElementById("s_facil");
    const s_medio = document.getElementById("s_medio");
    const s_dificil = document.getElementById("s_dificil");
    s_facil.classList.remove("opcao_atual_jogo");
    s_medio.classList.remove("opcao_atual_jogo");
    s_dificil.classList.remove("opcao_atual_jogo");

    const selecionado = document.getElementById(`s_${x}`);
    selecionado.classList.add("opcao_atual_jogo");

    nivel_jogo_sunny = x;

}
let tela_cheia_ativo = false
function tela_cheia(x) {
    const seccao = document.getElementById(`section_${x}`)
    if (tela_cheia_ativo) {
    seccao.classList.remove("jogo_tela_cheia")
        tela_cheia_ativo = false
    } else {
        
        seccao.classList.add("jogo_tela_cheia")
        tela_cheia_ativo = true

    }

}