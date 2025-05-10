// funcoes jogo sunny ---------------------------
const div_res_sunny = document.querySelector(".resultados_jogo")
const sunny_player = document.getElementById('sunny_player')
const menu_jogo = document.querySelector(".menu_jogo")
const resultados_jogo = document.querySelector(".resultados_jogo")
const s_sunny = document.getElementById("section_sunny")
let temp_cronometro = 20
let intervalo_cronometro
let i_sunny = 0
let nivel_jogo_sunny = '';
let tela_cheia_ativo = false
let nivel_jogo_nephis = ''
const column_1 = document.querySelector(".column-1")
const column_2 = document.querySelector(".column-2")
const botom_nephis_game = document.querySelectorAll(".botao_jogo_nephis")
let tempo_int_maquina = 0

function resultados_jogo_fuc(nome, titulo, descricao, score) {
    console.log("Chamou resultados_jogo_fuc") // para testar
    const resultados_jogo = document.querySelector(`.resultados_${nome}`)
    const m_titulo = resultados_jogo.querySelector("h2")
    const m_descricao = resultados_jogo.querySelector("h4")
    const m_score = resultados_jogo.querySelector("span")
    const s_nome = document.getElementById(`section_${nome}`)
    botom_nephis_game[0].classList.add("section_preta")
    botom_nephis_game[0].onclick = null;
    botom_nephis_game[1].classList.add("section_preta")
    column_1.classList.add("section_preta")
    column_2.classList.add("section_preta")
    resultados_jogo.style.display = "flex"
    s_nome.classList.add("section_preta")
    m_titulo.innerHTML = titulo
    m_descricao.innerHTML = descricao
    m_score.innerHTML = score
}


function parar_jogo_sunny() {

    sunny_player.style.display = "none"
    div_res_sunny.style.display = "flex"
    resultados_jogo.style.background = "radial-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.808)),  url('./assets/img/fundo_game_sunny.png')"
    s_sunny.classList.add("section_preta")
    s_sunny.classList.remove("section_jogo_dificil")
    s_sunny.classList.remove("section_jogo_dificil_cheia")
    sunny_player.classList.remove("sunny_player_dificil")

    if (i_sunny >= 15) {
        resultados_jogo_fuc('sunny',
            'Ascensão Sombria',
            'Você dominou as sombras e se tornou uma lenda entre os despertos.',
            `${i_sunny}`
        )
    } else if (i_sunny >= 10) {
        resultados_jogo_fuc('sunny',
            'Desperto em Treinamento',
            'Você lutou bravamente, mas ainda precisa dominar seus medos.',
            `${i_sunny}`
        )
    } else {
        resultados_jogo_fuc('sunny',
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

function aleatorio() {
    return (Math.random() * 96 + 2).toFixed(2)
}
let exp
function iniciar_jogo_sunny() {
    const resultados_jogo = s_sunny.querySelector(".resultados_jogo")
    const menu_jogo = s_sunny.querySelector(".menu_jogo")
    const botao_tela = s_sunny.querySelector(".botao_tela_cheia")
    let contador_sunny = document.getElementById("contador_sunny")
    let score_atual = 0
    botao_tela.style.display = "none"
    i_sunny = 0
    contador_sunny.innerHTML = i_sunny
    sunny_player.style.display = "flex"
    temp_cronometro = 20
    menu_jogo.style.display = "none"
    resultados_jogo.style.display = "none"
    s_sunny.classList.remove("section_preta")
    comecar_cronometro()
    if (nivel_jogo_sunny == 'dificil') {
        alert("dfsaf")
        exp = setInterval(() => {
            score_atual = i_sunny
            mudar_posicao()
            i_sunny = score_atual
            if (temp_cronometro == 0) {
                clearInterval(exp)
            }


        }

            , 1000)
    }
    if (nivel_jogo_sunny == 'dificil' && tela_cheia_ativo == false) {
        s_sunny.classList.add("section_jogo_dificil")
        //   sunny_player.classList.add("sunny_player_dificil")
    }
    if (nivel_jogo_sunny == 'dificil' && tela_cheia_ativo == true) {
        s_sunny.classList.add("section_jogo_dificil_cheia")
        //  sunny_player.classList.add("sunny_player_dificil")
    }

}

function ir_para_menu(nome) {
    const seccao = document.getElementById(`section_${nome}`)
    const menu_jogo = seccao.querySelector('.menu_jogo')
    const botao_tela = seccao.querySelector(".botao_tela_cheia")
    const resultado_nephis = seccao.querySelector(`.resultados_${nome}`)
    resultado_nephis.style.display = "none"
    botao_tela.style.display = "flex"
    menu_jogo.style.display = "flex"
    div_res_sunny.style.display = "none"
    seccao.classList.remove("section_preta")
    column_1.classList.remove("section_preta")
    column_2.classList.remove("section_preta")

}
function mudar_posicao() {
    let contador_sunny = document.getElementById("contador_sunny")
    let imagem_sunny = document.getElementById("sunny_player")
    let left = aleatorio()
    let top = aleatorio()
    i_sunny++
    if (nivel_jogo_sunny == 'dificil') {
        i_sunny++
    }
    if (i_sunny > 20) {
        contador_sunny.style.color = "#7aa7a4"
    }
    if (i_sunny > 30) {
        contador_sunny.style.color = "#4b2a58"
    }
    if (nivel_jogo_sunny == 'facil') {
        contador_sunny.classList.add("clique")
        imagem_sunny.classList.remove("aparicao")
        imagem_sunny.classList.add("clique")
    }
    if (nivel_jogo_sunny == 'dificil') {
        contador_sunny.classList.add("clique_dificl")
        imagem_sunny.classList.remove("aparicao_dificil")
        imagem_sunny.classList.add("clique_dificl")
        console.log(imagem_sunny)
    }

    setTimeout(() => {
        contador_sunny.innerHTML = i_sunny
        imagem_sunny.style.top = top + '%'
        imagem_sunny.style.left = left + '%'
        if (nivel_jogo_sunny == 'facil') {
            imagem_sunny.classList.remove("clique")
            imagem_sunny.classList.add("aparicao")
            contador_sunny.classList.remove("clique")
        }
        if (nivel_jogo_sunny == 'dificil') {
            imagem_sunny.classList.remove("clique_dificil")
            imagem_sunny.classList.add("aparicao_dificil")
            contador_sunny.classList.remove("clique_dificil")
        }

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
    //  const s_medio = document.getElementById("s_medio");
    const s_dificil = document.getElementById("s_dificil");
    s_facil.classList.remove("opcao_atual_jogo");
    //s_medio.classList.remove("opcao_atual_jogo");
    s_dificil.classList.remove("opcao_atual_jogo");
    const selecionado = document.getElementById(`s_${x}`);
    selecionado.classList.add("opcao_atual_jogo");
    nivel_jogo_sunny = x;

}
function tela_cheia(x) {
    const seccao = document.getElementById(`section_${x}`)
    seccao.classList.remove("section_jogo_dificil")
    if (tela_cheia_ativo) {
        seccao.style.animation = "tela_cheia_saida 2s"
        // seccao.classList.add("tela_cheia_saida")
    } else {
        seccao.style.animation = "tela_cheia_entrada 2s "
        // seccao.classList.add("tela_cheia_entrada")//
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

function ir_para_menu_geral(x) {
    const x_carregando = document.getElementById(`${x}-carregando`)
    const seccao_menu = document.getElementById("section_games")
    const seccao = document.getElementById(`section_${x}`)
    x_carregando.style.display = "flex"
    seccao.classList.remove("section_jogo_dificil")
    seccao.classList.remove("section_jogo_dificil_cheia")
    if (tela_cheia_ativo) {

        tela_cheia(x)
    }
    bolinha(x)
    setTimeout(() => {
        seccao.style.display = "none"
        seccao_menu.style.display = "flex"
    }, 3000);

}

// acabou sunny -----------------------------

let jogo_nephis_ativo = true
let i_nephis = 0
let vida_maquina_largura = 100
function ataque_nephis() {
    const cont_nephis = document.getElementById("contador_nephis")
    const vida_maquina = document.getElementById("vida_maquina")
    botom_nephis_game[0].style.transform="scale(0.9)"
    setTimeout(() => botom_nephis_game[0].style.transform="scale(1)",20)
    vida_maquina_largura--
    i_nephis++
    if (vida_maquina_largura > 20 && vida_maquina_largura < 50) {
        vida_maquina.style.backgroundColor = "yellow"
    }
    if (vida_maquina_largura <= 20) {
        vida_maquina.style.backgroundColor = "red"
    }
    cont_nephis.innerHTML = i_nephis
    vida_maquina.style.width = `${vida_maquina_largura}%`

    if (vida_maquina_largura == 0) {
        jogo_nephis_ativo = false
        clearInterval(intervalo_maquina)
        clearInterval(cronometro_nephis)
        if ((i_nephis > score_nephis_maq) && nivel_jogo_nephis == 'dificil') {
            resultados_jogo_fuc('nephis',
                'Corte Impecável',
                'Você atacou com precisão cirúrgica. Nephis reconheceria sua disciplina.',
                `${i_nephis}`
            )
        } else if ((i_nephis > score_nephis_maq) && score_nephis_maq > 90) {
            resultados_jogo_fuc('nephis',
                'Triunfo por Um Fio',
                'O último golpe foi seu. Nephis permaneceu firme enquanto a escuridão vacilava.',
                `${i_nephis}`
            )
        } else if (i_nephis > score_nephis_maq) {
            resultados_jogo_fuc('nephis',
                'Vitória Silenciosa',
                'Com 100 cortes precisos, Nephis não hesitou. A sombra foi vencida antes mesmo de perceber.',
                `${i_nephis}`
            )
        }
    }
}

let cronometro_nephis
let nephis_tempo = 0
function iniciar_cronometro() {
    let cronometro = document.getElementById("cronometro_nephis")

    cronometro_nephis = setInterval(() => {
        nephis_tempo++
        if (nephis_tempo < 10) {
            cronometro.innerHTML = `0:0${nephis_tempo}`
        } else {
            cronometro.innerHTML = `0:${nephis_tempo}`
        }
        if (nephis_tempo == 20) {
            clearInterval(cronometro_nephis)
        }
    }, 1000)
}


let intervalo_maquina
let score_nephis_maq = 0
let vida_usuario_largura = 100
function ataque_maquina() {
    iniciar_cronometro()
    const contador_maq = document.querySelector(".contador_maquina")
    const vida_usuario = document.getElementById("vida_usuario")
    intervalo_maquina = setInterval(() => {
        botom_nephis_game[1].style.animation= `clique ${tempo_int_maquina}ms infinite`;
        score_nephis_maq++
        vida_usuario_largura--
        if (vida_usuario_largura > 20 && vida_usuario_largura < 50) {
            vida_usuario.style.backgroundColor = "yellow"
        }
        if (vida_usuario_largura <= 20) {
            vida_usuario.style.backgroundColor = "red"
        }
        vida_usuario.style.width = `${vida_usuario_largura}%`
        contador_maq.innerHTML = score_nephis_maq

        if (vida_usuario_largura == 0) {
            jogo_nephis_ativo = false
            botom_nephis_game[1].style.animation="none"
            if ((score_nephis_maq > i_nephis) && (nivel_jogo_nephis == 'dificil' && i_nephis > 90)) {
                resultados_jogo_fuc('nephis',
                    'Foi quase desta vez ',
                    'O inimigo venceu por um instante. Nephis reconhece que você realmente tentou',
                    `${i_nephis}`
                )
            } else if ((score_nephis_maq > i_nephis) && i_nephis > 90) {
                resultados_jogo_fuc('nephis',
                    'O enemigo foi mais rápido',
                    'O inimigo venceu por um instante. Nephis analisará. Aprenderá. E não falhará de novo.',
                    `${i_nephis}`
                )
            } else if (score_nephis_maq > i_nephis) {
                resultados_jogo_fuc('nephis',
                    'Silêncio Derrotado',
                    'Mesmo a mais disciplinada pode cair. Mas Nephis sempre retorna — mais forte.',
                    `${i_nephis}`
                )
            }
            clearInterval(intervalo_maquina)
            clearInterval(cronometro_nephis)
        }
    }, tempo_int_maquina)
}
function nephis_nivel_jogo(x) {
    const n_facil = document.getElementById("n_facil");
    const n_medio = document.getElementById("n_medio");
    const n_dificil = document.getElementById("n_dificil");
    const selecionado = document.getElementById(`n_${x}`);
    n_facil.classList.remove("opcao_atual_jogo");
    n_medio.classList.remove("opcao_atual_jogo");
    n_dificil.classList.remove("opcao_atual_jogo");
    selecionado.classList.add("opcao_atual_jogo");
    nivel_jogo_nephis = x
}

function iniciar_jogo_nephis() {
    const seccao = document.getElementById(`section_nephis`)
    const resultados_nephis = seccao.querySelector(".resultados_nephis")
    const menu_jogo = seccao.querySelector(".menu_jogo")
    const botao_tela = seccao.querySelector(".botao_tela_cheia")
    const contador_nephis = document.getElementById("contador_nephis")
    const contador_maquina = seccao.querySelector(".contador_maquina")
    const vida_maquina = document.getElementById('vida_maquina')
    const vida_usuario = document.getElementById('vida_usuario')
    let cronometro = document.getElementById("cronometro_nephis")
    nephis_tempo = 0
    cronometro.innerHTML="0:00"
    botao_tela.style.display = "none"
    vida_maquina_largura = 100
    vida_usuario_largura = 100
    vida_maquina.style.width=vida_maquina_largura + "vw"
    vida_usuario.style.width=vida_usuario_largura + "vw"
    i_nephis = 0
    score_nephis_maq = 0
    contador_nephis.innerHTML = i_nephis
    contador_maquina.innerHTML = score_nephis_maq
    menu_jogo.style.display = "none"
    resultados_nephis.style.display = "none"
    seccao.classList.remove("section_preta")
        column_2.classList.remove("column-2-dificil")
        column_2.classList.remove("column-2-medio")

    if (nivel_jogo_nephis == 'facil') {
        enemigo_nome.innerHTML = 'Cassie'
        enemigo_nomeReal.innerHTML = 'Song of the Fallen'
        avatar_enemigo.src = "assets/img/cassie-chibi.png"
        tempo_int_maquina = 200
    } else if (nivel_jogo_nephis == 'medio') {
        enemigo_nome.innerHTML = 'Sunny'
        enemigo_nomeReal.innerHTML = 'Lost from light'
        avatar_enemigo.src = "assets/img/sunny_chibi.png"
        column_2.classList.add("column-2-medio")
        tempo_int_maquina = 180
    } else {
        enemigo_nome.innerHTML = 'Mongrel'
        enemigo_nomeReal.innerHTML = 'Lost From Fate'
        avatar_enemigo.src = "assets/img/mongrel-chibi.png"
        column_2.classList.add("column-2-dificil")
        tempo_int_maquina = 160
    }
    vida_usuario.style.backgroundColor = "green"
    vida_maquina.style.backgroundColor = "green"

    column_1.classList.remove("section_preta")
    column_2.classList.remove("section_preta")
    botom_nephis_game[0].classList.remove("section_preta")
    botom_nephis_game[0].onclick = ataque_nephis;
    botom_nephis_game[1].classList.remove("section_preta")
        ataque_maquina()
}







