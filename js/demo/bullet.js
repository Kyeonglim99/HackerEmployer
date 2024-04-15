// 큰 막대 그래프와 작은 막대 그래프의 데이터를 합칩니다.
const combinedData = {
    labels: ['H-2', 'E-9', 'F-4', 'else'],
    datasets: [
        {
            label: 'Legally employable number ',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [60, 20, 42, 10] // 큰 막대 그래프 데이터
        },
        {
            label: 'Currently employed number',
            backgrounsdColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [45, 9, 30, 7] // 작은 막대 그래프 데이터
        }
    ]
};

// 차트 생성
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: combinedData, // 수정: combinedData를 사용하여 차트 생성
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false // 크기 조절 옵션
    }
});

// 작은 막대 그래프가 그려진 후 큰 막대 그래프에 작은 막대 그래프를 포함시킵니다.
myChart.options.animation = {
    onComplete: function() {
        var ctx = this.chart.ctx;
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function(dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                ctx.fillText(dataset.data[i], model.x, model.y - 5);
            }
        });
    }
};
