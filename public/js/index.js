history.scrollRestoration = 'manual'
function mostrar_console() {
    console.log("Largura: " + window.innerWidth + "px");
    console.log("Altura: " + window.innerHeight + "px");

}


window.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav_principal');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');

    } else {
        navbar.classList.remove('scrolled');
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
    inicio.style.display="flex"
    header.style.display="flex"
    pagina_mongrel.style.display = "none"
    logo_encima.classList.add("logo_animacao")
    body.classList.add("body_after")

}
var ativo = true
function tocar() {
    const icone_musica = document.getElementById("icone_musica")
    const icone_inicial = document.getElementById("icone_inicial")
    if (ativo == false) {
        musica.loop = true
        musica.play();
        ativo = true
        musica
        icone_musica.src="assets/svg/volume-high-sharp.svg"
        icone_inicial.src="assets/svg/volume-high-sharp.svg"
    } else {
        musica.pause();
        ativo = false
        icone_musica.src="assets/svg/volume-mute-sharp.svg"
        icone_inicial.src="assets/svg/volume-mute-sharp.svg"
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






var sunny_aba = document.getElementById("sunny_aba");
var nephis_aba = document.getElementById("nephis_aba");
var cassie_aba = document.getElementById("cassie_aba");
var effie_aba = document.getElementById("effie_aba");
var kai_aba = document.getElementById("kai_aba");
var jet_aba = document.getElementById("jet_aba");
var modret_aba = document.getElementById("modret_aba");
///containers
var sunny_container = document.querySelector(".aba-sunny");
var nephis_container  = document.querySelector(".aba-nephis");
var cassie_container  = document.querySelector(".aba-cassie");
var effie_container  = document.querySelector(".aba-effie");
var kai_container  = document.querySelector(".aba-kai");
var jet_container  = document.querySelector(".aba-jet");
var modret_container  = document.querySelector(".aba-modret");

function tirar_classe() {
    sunny_aba.classList.remove("atual")
    cassie_aba.classList.remove("atual")
    effie_aba.classList.remove("atual")
    kai_aba.classList.remove("atual")
    nephis_aba.classList.remove("atual")
    jet_aba.classList.remove("atual")
    modret_aba.classList.remove("atual")
}
function tirar_display() {
    sunny_container.style.display = "none"
    nephis_container.style.display = "none"
    cassie_container.style.display = "none"
    effie_container.style.display = "none"
    jet_container.style.display = "none"
    kai_container.style.display = "none"
    modret_container.style.display = "none"
}
function sunny_trocar() {
    tirar_classe()
    tirar_display()
    sunny_aba.classList.add("atual")
    sunny_container.style.display = "flex"
}
function nephis_trocar() {
    tirar_classe()
    tirar_display()
    nephis_aba.classList.add("atual")
    nephis_container.style.display = "flex"
}
function cassie_trocar() {
    tirar_classe()
    tirar_display()
    cassie_aba.classList.add("atual")
    cassie_container.style.display = "flex"
}
function effie_trocar() {
    tirar_classe()
    tirar_display()
    effie_aba.classList.add("atual")
    effie_container.style.display = "flex"
}
function kai_trocar() {
    tirar_classe()
    tirar_display()
    kai_aba.classList.add("atual")
    kai_container.style.display = "flex"
}
function jet_trocar() {
    tirar_classe()
    tirar_display()
    jet_aba.classList.add("atual")
    jet_container.style.display = "flex"
}
function modret_trocar() {
    tirar_classe()
    tirar_display()
    modret_aba.classList.add("atual")
    modret_container.style.display = "flex"
}
