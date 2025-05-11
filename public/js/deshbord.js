// 'Adormecido', 'Desperto', 'Transcendente' 'Ascendido', 'Santo', 'Tirano', 'Devorador'
var fkUsuario = sessionStorage.ID_USUARIO;
let proximaAtualizacao;
const sistema_progressao = {
    'Adormecido': 100,
    'Desperto': 200,
    'Transcendente': 300,
    'Ascendido': 400,
    'Santo': 500,
    'Tirano': 600,
    'Devorador': 1000,
}
let rankUsuario_atual = sessionStorage.RANK_USUARIO;
let proximoRank = ''
rankUsuario_atual == 'Adormecido' ? (proximoRank = 'Desperto') : null
rankUsuario_atual == 'Desperto' ? (proximoRank = 'Transcendente') : null
rankUsuario_atual == 'Transcendente' ? (proximoRank = 'Ascendido') : null
rankUsuario_atual == 'Ascendido' ? (proximoRank = 'Santo') : null
rankUsuario_atual == 'Santo' ? (proximoRank = 'Tirano') : null


let i_modalidade_sunny = 2
let i_modalidade_nephis = 2
let i_facil = 2
let i_medio = 2
let i_dificil = 2
let i_pontuacao_total = 2
//////conexão bd

const scoresJSON = sessionStorage.SCORES_USUARIO
const scores = JSON.parse(scoresJSON);
console.log(scores)
const b_modalidade_usuario = document.getElementById('b_modalidade_usuario')
const b_jogos_usuario = document.getElementById('b_jogos_usuario')
const b_media_usuario = document.getElementById('b_media_usuario')
const b_ganhos_usuario = document.getElementById('b_ganhos_usuario')
const pontuacao_total_atual = document.getElementById('pontuacao_total_atual')
const b_rank_seguinte = document.querySelector('.b_rank_seguinte')

function exibir_kpi() {
    let vt_modalidade = []
    let jogosConcluidos = scores.length
    for (let i = 0; i < scores.length; i++) {
        vt_modalidade.push(scores[i].fkGame)
        i_pontuacao_total = i_pontuacao_total + (scores[i].score)
    }
    for (let i = 0; i < vt_modalidade.length; i++) {
        if ((vt_modalidade[i] == 1) || (vt_modalidade[i] == 2) || (vt_modalidade[i] == 3)) {
            i_modalidade_sunny++
        } else {
            i_modalidade_nephis++
        }
        if ((vt_modalidade[i] == 1) || (vt_modalidade == 4)) {
            i_facil++
        } else if ((vt_modalidade[i] == 2) || (vt_modalidade == 5)) {
            i_medio++
        } else if ((vt_modalidade[i] == 3) || (vt_modalidade == 6)) {
            i_dificil++
        }

    }
    if (i_modalidade_sunny > i_modalidade_nephis) {
        b_modalidade_usuario.innerHTML = 'Sunny Game'
    } else {
        b_modalidade_usuario.innerHTML = 'Nephis Game'
    }
    b_jogos_usuario.innerHTML = jogosConcluidos
    pontuacao_total_atual.innerHTML = i_pontuacao_total + 'P'
    b_rank_seguinte.innerHTML = proximoRank + ' ' + sistema_progressao[proximoRank] + 'P'
    plotar_graficos()

}
window.addEventListener('load', exibir_kpi);

function plotar_graficos() {


    /////---------------
    const data_jogo = {
        labels: [
            'Nephis',
            'Sunny'
        ],
        datasets: [{
            label: 'Quantidade de vezes jogada: ',
            data: [i_modalidade_nephis, i_modalidade_sunny],

            backgroundColor: [
                'rgba(139, 139, 139, 0.4)', //verde
                'rgba(33, 117, 106, 0.43)', // vermelho
            ],
            borderColor: [
                'rgb(139, 139, 139)',      // borda do "Fácil"
                'rgb(21, 197, 174)'       // borda do "Difícil"
            ],
            borderWidth: 2,
            radius: '95%',
            hoverOffset: 20
        }]
    };
    const config_jogo = {
        type: 'pie',
        data: data_jogo,
        // usando options para colocar a legenda embaixo do grafico
        options: {
            responsive: false,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right', // Coloca a legenda embaixo do gráfico
                    labels: {
                        color: 'white', // Cor da fonte da legenda
                        font: {
                            size: 15
                        }
                    }
                },
            }
        }

    };
    const ctx_jogo = document.getElementById('grafico_jogo');
    new Chart(ctx_jogo, config_jogo);



    /////---------------
    const data_dificuldade = {
        labels: [
            'Fácil',
            'Medio',
            'Dificil'
        ],
        datasets: [{
            label: 'Quantidade de vezes jogada: ',
            data: [i_facil, i_medio, i_dificil],
            backgroundColor: [
                'rgba(139, 139, 139, 0.4)', //verde
                'rgba(81, 29, 124, 0.26)',  // Amarelo 
                'rgba(33, 117, 106, 0.43)', // vermelho
            ],
            borderColor: [
                'rgb(139, 139, 139)',      // borda do "Fácil"
                'rgb(80, 12, 136)',    // borda do "Médio"
                'rgb(21, 197, 174)'       // borda do "Difícil"
            ],
            borderWidth: 2,
            hoverOffset: 20,

            radius: '95%', // Padrão é '100%' — aqui você reduz para 80%
        }]
    };
    const config_dificuldade = {
        type: 'pie',
        data: data_dificuldade,
        // usando options para colocar a legenda embaixo do grafico
        options: {
            responsive: false,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right', // Coloca a legenda embaixo do gráfico
                    labels: {
                        color: 'white', // Cor da fonte da legenda
                        font: {
                            size: 17
                        }
                    }
                },
            }
        }

    };
    const ctx_dificuldade = document.getElementById('grafico_dificuldade');
    new Chart(ctx_dificuldade, config_dificuldade);



    ///////////////////////////////
    const labels_ganho = [];

    const data_ganho = {
        labels: labels_ganho,
        datasets: [{
            label: 'Partidas ganhadas',
            data: [],
            fill: false,
            borderColor: 'rgb(21, 197, 174)',
            backgroundColor: 'rgba(33, 117, 106, 0.43)',
            tension: 0.1,
        }]
    };

    for (let i = 0; i < scores.length; i++) {
        var registro = scores[i];
        labels_ganho.push(registro.horario);
        data_ganho.datasets[0].data.push(registro.score);
    }

    const config_ganho = {
        type: 'line',
        data: data_ganho,
    };

    const ctx_ganho = document.getElementById('grafico_ganho').getContext('2d');
    const graficoGanho = new Chart(ctx_ganho, config_ganho);
    setTimeout(() => atualizarGrafico(fkUsuario, data_ganho, graficoGanho), 2000);
}
function atualizarGrafico(fkUsuario, data_ganho, graficoGanho) {
    fetch(`/game/tempo-real/${fkUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                //  obterdados(fkUsuario);
                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`Dados atuais do gráfico:`);
                console.log(data_ganho);
                if (novoRegistro[0].horario == data_ganho.labels[data_ganho.labels.length - 1]) {
                    console.log("---------------------------------------------------------------")
                    console.log("Como não há data_ganho novos para captura, o gráfico não atualizará.")
                    //avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há data_ganho novos a exibir, o gráfico não atualizará."
                    console.log("Horário do novo dado capturado:")
                    console.log(novoRegistro[0].horario)
                    console.log("Horário do último dado capturado:")
                    console.log(data_ganho.labels[data_ganho.labels.length - 1])
                    console.log("---------------------------------------------------------------")
                } else {
                    // tirando e colocando valores no gráfico
                    data_ganho.labels.shift(); // apagar o primeiro
                    data_ganho.labels.push(novoRegistro[0].horario); // incluir um novo momento

                    data_ganho.datasets[0].data.shift();  // apagar o primeiro de umidade
                    data_ganho.datasets[0].data.push(novoRegistro[0].score); // incluir uma nova medida de umidade

                    graficoGanho.update();
                }

                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(fkUsuario, data_ganho, graficoGanho), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGrafico(fkUsuario, data_ganho, graficoGanho), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}



//window.addEventListener('load', plotar_graficos);*/