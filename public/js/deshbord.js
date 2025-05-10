// 'Adormecido', 'Desperto', 'Transcendente' 'Ascendido', 'Santo', 'Tirano', 'Devorador'
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


let i_modalidade_sunny = 0
let i_modalidade_nephis = 0
let i_facil = 0
let i_medio = 0
let i_dificil = 0
let i_pontuacao_total = 0 
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
    b_rank_seguinte.innerHTML= proximoRank + ' ' + sistema_progressao[proximoRank] + 'P'
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




const labels = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
]
const data_var_temp = {
    labels: labels,
    datasets: [{
        label: 'Temperatura Média',
        data:
            [15.2, 15.5, 15.8, 16.1, 16.4, 16.7, 17.0, 16.8, 16.5, 16.2, 15.9, 15.6, 15.3, 15.0, 14.8, 14.5, 15.4, 14.1, 14.4, 14.7, 15.0, 15.3, 15.6, 15.9, 16.2, 16.5, 16.8, 17.1, 16.9, 16.6],
        fill: false,
        borderColor: '#551c36',
        backgroundColor: '#551c36',
        tension: 0.1,
        radius: '80%',
    },
    ]
};
const config_var_temp = {
    type: 'line',
    data: data_var_temp,
};
const myChart_var_temp = document.getElementById('variacao_temperatura_mensal');
new Chart(myChart_var_temp, config_var_temp);

// grafico do tipo linha-------------------------------------------------------------

const labels_umidade = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
]
const data_var_umidade = {
    labels: labels,
    datasets: [{
        label: 'Umidade Média',
        data:
            [
                68,
                69,
                70,
                71,
                68,
                69,
                70,
                71,
                72,
                71,
                70,
                69,
                68,
                67,
                66,
                65,
                64,
                63,
                64,
                65,
                66,
                67,
                68,
                69,
                70,
                71,
                72,
                73,
                72,
                71
            ],




        fill: true,
        borderColor: 'rgb(21, 197, 174)',
        backgroundColor: 'rgba(33, 117, 106, 0.43)',

    },
    ]
};
const config_var_umidade = {
    type: 'line',
    data: data_var_umidade,
};
const myChart_var_umidade = document.getElementById('grafico_ganho');
new Chart(myChart_var_umidade, config_var_umidade);

    //  setTimeout(() => atualizarGrafico(idAquario, dados, myChart), 2000);
}
