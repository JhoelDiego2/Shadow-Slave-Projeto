

/////---------------
const data_jogo = {
    labels: [
        'Fácil',
        'Medio',
        'Dificil'
    ],
    datasets: [{
        label: 'Status dos Armazéns (%)',
        data: [60, 20, 20],

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
                        size: 17
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
        label: 'Nivel de dificuldade: ',
        data: [60, 20, 20],
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