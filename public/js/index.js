window.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav_principal');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');

    } else {
        navbar.classList.remove('scrolled');
    }
});

function sobre_voltar() {
    const primeira = document.querySelector(".primeira");
    const segunda = document.querySelector(".segunda");
    const terceiro = document.querySelector(".terceiro");
    // divs pequenas
    const primeira_sobre = document.querySelector(".atual_sobre")
    const segunda_sobre = document.querySelector(".segunda_sobre")
    const terceiro_sobre = document.querySelector(".terceiro_sobre")
    primeira.classList.replace("primeira", "terceiro")
    segunda.classList.replace("segunda", "primeira")
    terceiro.classList.replace("terceiro", "segunda")
    //
    primeira_sobre.classList.replace("atual_sobre", "terceiro_sobre")
    segunda_sobre.classList.replace("segunda_sobre", "atual_sobre")
    terceiro_sobre.classList.replace("terceiro_sobre", "segunda_sobre")
    /* if (primeira.classList.contains('primeira')) {
         primeira.classList.remove('primeira');
         primeira.classList.add('terceira');
 
         segunda.classList.remove('segunda');
         segunda.classList.add('primeira');
 
         terceiro.classList.remove('terceiro');
         terceiro.classList.add('segunda');
     } else if (primeira.classList.contains('terceira')) {
         primeira.classList.remove('terceira');
         primeira.classList.add('segunda');
 
         segunda.classList.remove('primeira');
         segunda.classList.add('terceiro');
 
         terceiro.classList.remove('segunda');
         terceiro.classList.add('primeira');
     } else if (primeira.classList.contains('segunda')) {
         primeira.classList.remove('segunda');
         primeira.classList.add('primeira');
 
         segunda.classList.remove('terceiro');
         segunda.classList.add('segunda');
 
         terceiro.classList.remove('primeira');
         terceiro.classList.add('terceiro');
     }*/
}
var sunny_aba = document.getElementById("sunny_aba");
var nephis_aba = document.getElementById("nephis_aba");
var cassie_aba = document.getElementById("cassie_aba");
var effie_aba = document.getElementById("effie_aba");
var kai_aba = document.getElementById("kai_aba");
var jet_aba = document.getElementById("jet_aba");
var modret_aba = document.getElementById("modret_aba");
///containers
var sunny = document.querySelector(".aba-sunny");
var nephis = document.querySelector(".aba-nephis");
var cassie = document.querySelector(".aba-cassie");
var effie = document.querySelector(".aba-effie");
var kai = document.querySelector(".aba-kai");
var jet = document.querySelector(".aba-jet");
var modret = document.querySelector(".aba-modret");

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
    sunny.style.display = "none"
    nephis.style.display = "none"
    cassie.style.display = "none"
    effie.style.display = "none"
    jet.style.display = "none"
    kai.style.display = "none"
    modret.style.display = "none"
}
function sunny_trocar() {
    tirar_classe()
    tirar_display()
    sunny_aba.classList.add("atual")
    sunny.style.display = "flex"
}
function nephis_trocar() {
    tirar_classe()
    tirar_display()
    nephis_aba.classList.add("atual")
    nephis.style.display = "flex"
}
function cassie_trocar() {
    tirar_classe()
    tirar_display()
    cassie_aba.classList.add("atual")
    cassie.style.display = "flex"
}
function effie_trocar() {
    tirar_classe()
    tirar_display()
    effie_aba.classList.add("atual")
    effie.style.display = "flex"
}
function kai_trocar() {
    tirar_classe()
    tirar_display()
    kai_aba.classList.add("atual")
    kai.style.display = "flex"
}
function jet_trocar() {
    tirar_classe()
    tirar_display()
    jet_aba.classList.add("atual")
    jet.style.display = "flex"
}
function modret_trocar() {
    tirar_classe()
    tirar_display()
    modret_aba.classList.add("atual")
    modret.style.display = "flex"
}
