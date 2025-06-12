history.scrollRestoration = 'manual'
let menu_visivel = false;
var ativo = true
const abas_container = {
    abas: ['sunny_aba', 'nephis_aba', 'cassie_aba', 'effie_aba', 'kai_aba', 'jet_aba', 'modret_aba'],
    container: ['aba-sunny', 'aba-nephis', 'aba-cassie', 'aba-effie', 'aba-kai', 'aba-jet', 'aba-modret'],
}


const imagem_fundo = document.querySelector('.imagem_fundo')
const texto_1 = document.getElementById('texto_1')
const vt_imagens = ['assets/img/fundo _principal_inicio.png', 'assets/img/fundo_1.png', 'assets/img/fundo_2.png', 'assets/img/fundo_3.png', 'assets/img/fundo_4.png', 'assets/img/fundo_5.png',
    'assets/img/fundo_6.png', 'assets/img/fundo_7.png', 'assets/img/fundo_8.png', 'assets/img/fundo_9.png', 'assets/img/fundo_10.png', 'assets/img/fundo_11.png', 'assets/img/fundo_12.png',
    'assets/img/footenshore 1 1.png', 'assets/img/imagem_valor.webp']
const vt_cores = ['red', 'green', 'orange', 'purple', 'red', '#658a87', 'red', 'orange', 'white', 'blue', 'blue', 'orange', 'orange', 'red', 'brown',]
let i_imagem = 1;

setInterval(() => {
    imagem_fundo.style.opacity = 0;

    setTimeout(() => {
        if (i_imagem >= vt_imagens.length) {
            i_imagem = 0;
        }
        imagem_fundo.style.background = `
  linear-gradient(to bottom, #000000 4%, #000000c9 15%, #00000000 40%),
  url('${vt_imagens[i_imagem]}') center/cover no-repeat
`;
        texto_1.style.color = `${vt_cores[i_imagem]}`
        imagem_fundo.style.opacity = 1;
        i_imagem++;
    }, 1000);
}, 4000);

const jogo_1 = document.getElementById('jogo_1')
const jogo_2 = document.getElementById('jogo_2')

let jogo_1_visivel = true
function voltar_jogo() {
    const jogo_1_imagem = document.querySelector('.jogo1')
    const jogo_2_imagem = document.querySelector('.jogo2')
    jogo_1_imagem.classList.replace('jogo1', 'jogo2')
    jogo_2_imagem.classList.replace('jogo2', 'jogo1')
    if (jogo_1_visivel) {
        jogo_1.style.display = 'none'
        jogo_2.style.display = 'flex'
        jogo_1_visivel = false
    } else {
        jogo_1.style.display = 'flex'
        jogo_2.style.display = 'none'
        jogo_1_visivel = true
    }
}

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav_principal');
    const navbar_burguer = document.querySelector('.menu_hamburger');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar_burguer.classList.add('scrolled');

    } else {
        navbar.classList.remove('scrolled');
        navbar_burguer.classList.remove('scrolled');
    }
});
const musica = document.getElementById("ost");
const elemento = document.querySelector(".carregamento_pagina")

elemento.addEventListener('animationend', () => {
    elemento.style.display = 'none';
});


function tirar_inicio() {
    const pagina_mongrel = document.getElementById("pagina_mongrel")
    const logo_encima = document.querySelector(".logo_normal")
    const inicio = document.getElementById("inicio")
    const header = document.getElementById("header")
    const body = document.getElementById("body")
    inicio.style.display = "flex"
    header.style.display = "flex"
    pagina_mongrel.style.display = "none"
    logo_encima.classList.add("logo_animacao")
    body.classList.add("body_after")

}
function tocar() {
    const icone_musica = document.getElementById("icone_musica")
    const icone_inicial = document.getElementById("icone_inicial")
    if (ativo == false) {
        musica.loop = true
        musica.play();
        ativo = true
        musica
        icone_musica.src = "assets/svg/volume-high-sharp.svg"
        icone_inicial.src = "assets/svg/volume-high-sharp.svg"
    } else {
        musica.pause();
        ativo = false
        icone_musica.src = "assets/svg/volume-mute-sharp.svg"
        icone_inicial.src = "assets/svg/volume-mute-sharp.svg"
    }

}

function sobre_seguinte() {
    const primeira = document.querySelector(".primeira");
    const segunda = document.querySelector(".segunda");
    const terceiro = document.querySelector(".terceiro");
    const quarto = document.querySelector(".quarto");
    //efeito

    primeira.classList.replace("primeira", "quarto")
    segunda.classList.replace("segunda", "primeira")
    terceiro.classList.replace("terceiro", "segunda")
    quarto.classList.replace("quarto", "terceiro")

    mudar_caixinhas()
}

function sobre_voltar() {
    const primeira = document.querySelector(".primeira");
    const segunda = document.querySelector(".segunda");
    const terceiro = document.querySelector(".terceiro");
    const quarto = document.querySelector(".quarto");
    primeira.classList.replace("primeira", "segunda")
    segunda.classList.replace("segunda", "terceiro")
    terceiro.classList.replace("terceiro", "quarto")
    quarto.classList.replace("quarto", "primeira")
    mudar_caixinhas()
}
function mudar_caixinhas() {

    // divs pequenas
    const primeira_sobre = document.getElementById("primeiro_sobre")
    const segunda_sobre = document.getElementById("segunda_sobre")
    const terceiro_sobre = document.getElementById("terceira_sobre")
    const quarto_sobre = document.getElementById("quarto_sobre")

    const primeira_apos = document.getElementById("primeira");
    const segunda_apos = document.getElementById("segunda");
    const terceiro_apos = document.getElementById("terceiro");
    const quarto_apos = document.getElementById("quarto");

    primeira_sobre.style = "background-color: background-color: #00000000;"
    segunda_sobre.style = "background-color: background-color: #00000000;"
    quarto_sobre.style = "background-color: background-color: #00000000;"
    terceiro_sobre.style = "background-color: background-color: #00000000;"

    //
    if (primeira_apos.classList.contains("primeira")) {
        primeira_sobre.style = "background-color: white"
    }
    if (segunda_apos.classList.contains("primeira")) {
        segunda_sobre.style = "background-color: white"

    }
    if (terceiro_apos.classList.contains("primeira")) {
        terceiro_sobre.style = "background-color: white"
    }
    if (quarto_apos.classList.contains("primeira")) {
        quarto_sobre.style = "background-color: white"
    }

}
function tirar_tudo() {
    for (let i = 0; i < abas_container.abas.length; i++) {
        let aba = document.getElementById(`${abas_container.abas[i]}`)
        let container = document.querySelector(`.${abas_container.container[i]}`)
        aba.classList.remove('atual')
        container.style.display = 'none'
    }
}
function trocar_tudo(indice) {
    tirar_tudo()
    console.log(abas_container.abas[indice])
    let aba = document.getElementById(`${abas_container.abas[indice]}`)
    let container = document.querySelector(`.${abas_container.container[indice]}`)
    aba.classList.add("atual")
    container.style.display = "flex"
}

function mostrar_menu() {
    const nav = document.getElementById('nav_oculta');
    const barras = document.querySelectorAll('.barra_hamburger')
    if (menu_visivel) {
        nav.classList.remove('nav-entrada');
        nav.classList.add('nav-saida');
        barras[0].classList.remove('barra1')
        barras[1].classList.remove('barra2')
        barras[2].classList.remove('barra3')

        setTimeout(() => {
            nav.style.display = 'none';
            menu_visivel = false;
        }, 500);

    } else {
        nav.style.display = 'flex';
        nav.classList.remove('nav-saida');
        nav.classList.add('nav-entrada');
        menu_visivel = true;
        barras[0].classList.add('barra1')
        barras[1].classList.add('barra2')
        barras[2].classList.add('barra3')
    }
}