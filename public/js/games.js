// funcoes jogo sunny ---------------------------
const div_res_sunny = document.querySelector(".resultados_jogo")
const sunny_player = document.getElementById('sunny_player')
const menu_jogo = document.querySelector(".menu_jogo")
const resultado_mensagem = document.querySelector(".resultados_jogo")
const s_sunny = document.getElementById("section_sunny")
let temp_cronometro = 20
let intervalo_cronometro
let i_sunny = 0
let nivel_jogo_sunny = '';

function resultado_mensagem_fuc(titulo, descricao, score) {
    const m_titulo = resultado_mensagem.querySelector("h2")
    const m_descricao = resultado_mensagem.querySelector("h4")
    const m_score = resultado_mensagem.querySelector("span")
    m_titulo.innerHTML = titulo
    m_descricao.innerHTML = descricao
    m_score.innerHTML = score
}
function parar_jogo_sunny() {
    sunny_player.style.display = "none"
    div_res_sunny.style.display = "flex"
    resultado_mensagem.style.background = "radial-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.808)),  url('./assets/img/fundo_game_sunny.png')"
    s_sunny.classList.add("section_preta")
    s_sunny.classList.remove("section_jogo_dificil")
    sunny_player.classList.remove("sunny_player_dificil")
    if (i_sunny >= 15) {
        resultado_mensagem_fuc(
            'Ascensão Sombria',
            'Você dominou as sombras e se tornou uma lenda entre os despertos.',
            `${i_sunny}`
        )
    } else if (i_sunny >= 10) {
        resultado_mensagem_fuc(
            'Desperto em Treinamento',
            'Você lutou bravamente, mas ainda precisa dominar seus medos.',
            `${i_sunny}`
        )
    } else {
        resultado_mensagem_fuc(
            'Perdido nas Sombras',
            'As trevas o consumiram... Tente novamente e descubra sua força.',
            `${i_sunny}`
        )
    }
}

function comecar_cronometro() {
    let cronometro = document.getElementById("cronometro_sunny")
    cronometro.innerHTML = `0:${temp_cronometro}`
    if (temp_cronometro == 20) {
        cronometro.style.color = "white"

    }
    intervalo_cronometro = setInterval(() => {
        temp_cronometro--
        if (temp_cronometro == 0) {
            parar_jogo_sunny()
        }
        if (temp_cronometro >= 10) {
            cronometro.innerHTML = `0:${temp_cronometro}`
        } else {
            if (temp_cronometro < 10 && temp_cronometro >= 0) {
                cronometro.innerHTML = `0:0${temp_cronometro}`
            } else {
                clearInterval(intervalo_cronometro)
                cronometro.style.color = "red"
            }
        }
    }, 1000)

}
function iniciar_jogo_sunny() {
    const resultados_jogo = document.querySelector(".resultados_jogo")
    const menu_jogo = document.querySelector(".menu_jogo")
    sunny_player.style.display = "flex"
    temp_cronometro = 20
    menu_jogo.style.display = "none"
    resultados_jogo.style.display = "none"
    s_sunny.classList.remove("section_preta")
    i_sunny = 0
    comecar_cronometro()
    if (nivel_jogo_sunny == 'dificil') {
        s_sunny.classList.add("section_jogo_dificil")
        sunny_player.classList.add("sunny_player_dificil")
    }


}

function ir_para_menu() {
    menu_jogo.style.display = "flex"
    div_res_sunny.style.display = "none"
}

function aleatorio() {
    return (Math.random() * 96 + 2).toFixed(2)
}

function mudar_posicao() {
    let contador_sunny = document.getElementById("contador_sunny")
    let imagem_sunny = document.getElementById("sunny_player")
    let left = aleatorio()
    let top = aleatorio()
    i_sunny++
    if (i_sunny > 20) {
        contador_sunny.style.color = "#7aa7a4"
    }
    if (i_sunny > 30) {
        contador_sunny.style.color = "#4b2a58"
    }
    contador_sunny.classList.add("clique")
    imagem_sunny.classList.remove("aparicao")
    imagem_sunny.classList.add("clique")
    setTimeout(() => {
        contador_sunny.innerHTML = i_sunny
        imagem_sunny.style.top = top + '%'
        imagem_sunny.style.left = left + '%'
        imagem_sunny.classList.remove("clique")
        imagem_sunny.classList.add("aparicao")
        contador_sunny.classList.remove("clique")
        imagem_sunny.style.transform = "rotate(0deg)"
        if (left <= 3 && top <= 3) {
            imagem_sunny.style.transform = "rotate(130deg)"
        } else if (left >= 93 && top <= 3) {
            imagem_sunny.style.transform = "rotate(220deg)"
        } else if (left >= 93 && top >= 93) {
            imagem_sunny.style.transform = "rotate(300deg)"
        } else if (left <= 3 && top >= 93) {
            imagem_sunny.style.transform = "rotate(40deg)"
        } else if (top <= 3) {
            imagem_sunny.style.transform = "rotate(180deg)"
        } else if (left >= 93) {
            imagem_sunny.style.transform = "rotate(275deg)"
        } else if (left <= 3) {
            imagem_sunny.style.transform = "rotate(90deg)"
        }
    }, 500
    )

}

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

        seccao.style.animation = "tela_cheia_saida 2s"
    } else {
        seccao.style.animation = "tela_cheia_entrada 2s "

    }
    setTimeout(() => {
        if (tela_cheia_ativo) {
            seccao.classList.remove("jogo_tela_cheia")
            tela_cheia_ativo = false
        } else {

            seccao.classList.add("jogo_tela_cheia")
            tela_cheia_ativo = true
        }
    }, 1900)
}
function ir_para_menu_geral() {
    const sunny_carregando = document.getElementById("sunny-carregando")
    const seccao_menu = document.getElementById("section_games") 
    const seccao = document.getElementById("section_sunny") 
    sunny_carregando.style.display = "flex"
    bolinha()
    setTimeout(() => {
        seccao.style.display = "none"
        seccao_menu.style.display = "flex"
    }, 3000);

}