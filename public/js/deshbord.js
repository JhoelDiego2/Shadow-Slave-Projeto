// 'Adormecido', 'Desperto', 'Transcendente' 'Ascendido', 'Santo', 'Tirano', 'Devorador'


let fkUsuario = sessionStorage.ID_USUARIO;
let proximaAtualizacao;
let proximaAtualizacao_pizza;
const sistema_progressao = {
    'Adormecido': 100,
    'Desperto': 200,
    'Transcendente': 300,
    'Ascendido': 400,
    'Santo': 500,
    'Tirano': 600,
    'Devorador': 1000,
}
let estatisticas_ativo = false
let rankUsuario_atual = sessionStorage.RANK_USUARIO;
let proximoRank = ''
rankUsuario_atual == 'Adormecido' ? (proximoRank = 'Desperto') : null
rankUsuario_atual == 'Desperto' ? (proximoRank = 'Transcendente') : null
rankUsuario_atual == 'Transcendente' ? (proximoRank = 'Ascendido') : null
rankUsuario_atual == 'Ascendido' ? (proximoRank = 'Santo') : null
rankUsuario_atual == 'Santo' ? (proximoRank = 'Tirano') : null


let i_modalidade_sunny = 0
let i_modalidade_nephis = 0
let i_facil = 0
let i_medio = 0
let i_dificil = 0
let i_facil_dois = 0
let i_medio_dois = ''
let i_dificil_dois = 0
let i_hardcore = 0
let i_hardcore_dois = 0
let i_pontuacao_total = 0
let jogosConcluidos = 0
let modalidade_moda = 0
let soma_media_cliques = 0
let quantidade_modalidades = 0
//////conexão bd

const b_modalidade_usuario = document.getElementById('b_modalidade_usuario')
const b_jogos_usuario = document.getElementById('b_jogos_usuario')
const b_media_usuario = document.getElementById('b_media_usuario')
const b_ganhos_usuario = document.getElementById('b_ganhos_usuario')
const pontuacao_total_atual = document.getElementById('pontuacao_total_atual')
const b_rank_seguinte = document.querySelector('.b_rank_seguinte')
let LINHAS_USUARIO = []
let scores = []
let primeira_vez = true
function exibir_kpi() {
    i_modalidade_sunny = 0
    i_modalidade_nephis = 0
    i_facil = 0
    i_facil_dois = 0
    i_medio = 0
    i_medio_dois =0
    i_dificil = 0
    i_dificil_dois = 0
    i_hardcore = 0
    i_hardcore_dois = 0
    i_pontuacao_total = 0
    jogosConcluidos = 0
    modalidade_moda = 0
    soma_media_cliques = 0
    quantidade_modalidades = 0
    menor_tempo_sunny = 0
    for (let i = 0; i < scores.length; i++) {
        jogosConcluidos = jogosConcluidos + scores[i].total_partidas
        i_pontuacao_total = i_pontuacao_total + (scores[i].total_cliques)
        if (i == 0) {
            menor_tempo_sunny = scores[i].menor_tempo
        }else if (scores[i].menor_tempo > menor_tempo_sunny) {
            menor_tempo_sunny = scores[i].menor_tempo
        }
        if (scores[i].total_partidas > modalidade_moda) {
            modalidade_moda = scores[i].fkGame
        }
        if (scores[i].fkGame == 1 || scores[i].fkGame == 2 || scores[i].fkGame == 3 || scores[i] == 4) {
            i_modalidade_sunny = i_modalidade_sunny + scores[i].total_partidas
        } else if (scores[i].fkGame == 5 || scores[i].fkGame == 6 || scores[i].fkGame == 7 || scores[i].fkGame == 8) {
            i_modalidade_nephis = i_modalidade_nephis + scores[i].total_partidas
            soma_media_cliques = soma_media_cliques + scores[i].media_cliques_por_segundo
            quantidade_modalidades++
        }
        scores[i].fkGame == 1 ?  i_facil =  scores[i].total_partidas : null
        scores[i].fkGame == 2 ? i_medio=  scores[i].total_partidas : null
        scores[i].fkGame == 3 ? i_dificil = scores[i].total_partidas : null
        scores[i].fkGame == 4 ? i_hardcore =  scores[i].total_partidas : null

        scores[i].fkGame == 5 ? i_facil_dois =  scores[i].total_partidas : null
        scores[i].fkGame == 6 ? i_medio_dois = scores[i].total_partidas : null
        scores[i].fkGame == 7 ? i_dificil_dois =  scores[i].total_partidas : null
        scores[i].fkGame == 8 ? i_hardcore_dois =  scores[i].total_partidas : null
    }
    if (modalidade_moda == 1 || modalidade_moda == 2 || modalidade_moda == 3 || modalidade_moda == 4) {
        b_modalidade_usuario.innerHTML = 'Sunny Game'
    } else {
        b_modalidade_usuario.innerHTML = 'Nephis Game'
    }
    b_jogos_usuario.innerHTML = jogosConcluidos
    pontuacao_total_atual.innerHTML = i_pontuacao_total + 'P'
    b_rank_seguinte.innerHTML = proximoRank + ' ' + sistema_progressao[proximoRank] + 'P'
    b_ganhos_usuario.innerHTML = menor_tempo_sunny 
    if (soma_media_cliques == 0) {
        b_media_usuario.innerHTML = 0
    } else {
        b_media_usuario.innerHTML = (soma_media_cliques / quantidade_modalidades).toFixed(2)
    }
    if (primeira_vez) {
        plotar_graficos();
        primeira_vez = false
    }
}

function obter_dado_linha() {
    // Primeira requisição: listar_score
    fetch("/game/listar_score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkUsuarioServer: fkUsuario
        })
    }).then(function (resposta1) {
        if (resposta1.ok) {
            resposta1.json().then(function (json1) {
                scores = json1.scores; // Armazena os scores

                // Segunda requisição: listar_linha
                fetch("/game/listar_linha", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fkUsuarioServer: fkUsuario
                    })
                }).then(function (resposta2) {
                    if (resposta2.ok) {
                        resposta2.json().then(function (json2) {
                            LINHAS_USUARIO = json2.linhas; // Armazena as linhas
                            exibir_kpi(); // Exibe os KPIs
                        });
                    }
                }).catch(function (erro) {
                    console.log("Erro no segundo fetch:", erro);
                });
            });
        }
    }).catch(function (erro) {
        console.log("Erro no primeiro fetch:", erro);
    });
}


//window.addEventListener('load', obter_dado_linha);
// window.addEventListener('load', exibir_kpi);

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
            maintainAspectRatio: false,
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
    // new Chart(ctx_jogo, config_jogo);
    const graficoJogo = new Chart(ctx_jogo, config_jogo);

    /////---------------

    const data_dificuldade = {
        labels: [
            'Fácil',
            'Medio',
            'Dificil'
        ],
        datasets: [{
            label: 'Quantidade de vezes jogada: ',
            data: [i_facil, i_medio, i_dificil, i_hardcore],
            backgroundColor: [
                'rgba(139, 139, 139, 0.4)', //verde
                'rgba(81, 29, 124, 0.26)',  // Amarelo 
                'rgba(33, 117, 106, 0.43)', // vermelho
                'rgba(33, 62, 117, 0.43)', // vermelho
            ],
            borderColor: [
                'rgb(139, 139, 139)',      // borda do "Fácil"
                'rgb(80, 12, 136)',    // borda do "Médio"
                'rgb(21, 197, 174)'  ,     // borda do "Difícil"
                'rgba(33, 62, 117, 0.43)', // vermelho

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
    // new Chart(ctx_dificuldade, config_dificuldade);
    const graficoDificuldade = new Chart(ctx_dificuldade, config_dificuldade);



    const data_dificuldade_dois = {
        labels: [
            'Fácil',
            'Medio',
            'Dificil'
        ],
        datasets: [{
            label: 'Quantidade de vezes jogada: ',
            data: [i_facil_dois, i_medio_dois, i_dificil_dois],
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
    const config_dificuldade_dois = {
        type: 'pie',
        data: data_dificuldade_dois,
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
    const ctx_dificuldade_dois = document.getElementById('grafico_dificuldade_dois');
    // new Chart(ctx_dificuldade_dois, config_dificuldade_dois);
    const graficoDificuldade_dois = new Chart(ctx_dificuldade_dois, config_dificuldade_dois);




    ///////////////////////////////
    const labels_ganho = [];

    const data_ganho = {
        labels: labels_ganho,
        datasets: [{
            label: 'Score',
            data: [],
            fill: true,
            borderColor: 'rgb(21, 197, 174)',
            backgroundColor: 'rgba(33, 117, 106, 0.43)',
            tension: 0.1,
            borderWidth: 4,

        }]
    };
    for (let i = LINHAS_USUARIO.length - 1; i >= 0; i--) {
        var registro = LINHAS_USUARIO[i];
        labels_ganho.push(registro.horario);
        data_ganho.datasets[0].data.push(registro.score);
    }

    const config_ganho = {
        type: 'line',
        data: data_ganho,
        options: {
            responsive: false,
        }
    };

    const ctx_ganho = document.getElementById('grafico_ganho').getContext('2d');
    const graficoGanho = new Chart(ctx_ganho, config_ganho);
    setTimeout(() => {
        atualizarGrafico(fkUsuario, data_ganho, graficoGanho)
        atualizar_grafico_pizza(fkUsuario, data_jogo, graficoJogo, data_dificuldade, graficoDificuldade, data_dificuldade_dois, graficoDificuldade_dois)

    }, 2000);

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
function atualizar_grafico_pizza(fkUsuario, data_jogo, graficoJogo, data_dificuldade, graficoDificuldade, data_dificuldade_dois, graficoDificuldade_dois) {
    fetch(`/game/tempo-real-pizza/${fkUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (json) {
                scores = json // Armazena os scores
                console.log(scores)
                exibir_kpi()
                data_jogo.datasets[0].data = [i_modalidade_nephis, i_modalidade_sunny];
                graficoJogo.update()
                data_dificuldade.datasets[0].data = [i_facil, i_medio, i_dificil, i_hardcore];
                graficoDificuldade.update()
                data_dificuldade_dois.datasets[0].data = [i_facil_dois, i_medio_dois, i_dificil_dois];
                graficoDificuldade_dois.update()
                proximaAtualizacao_pizza = setTimeout(() => atualizar_grafico_pizza(fkUsuario, data_jogo, graficoJogo, data_dificuldade, graficoDificuldade, data_dificuldade_dois, graficoDificuldade_dois), 2000);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao_pizza = setTimeout(() => atualizar_grafico_pizza(fkUsuario, data_jogo, graficoJogo, data_dificuldade, graficoDificuldade, data_dificuldade_dois, graficoDificuldade_dois), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico pizza: ${error.message}`);
        });

}



//window.addEventListener('load', plotar_graficos);*/