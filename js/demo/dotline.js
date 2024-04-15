// 데이터 정의
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Site&Foundation',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [1900, 1980, 1930, 1900, 1800, 1840, 1790, 1700, 1630, 1600, 1550, 1500]
    }, {
        label: 'MEP Works',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [1200, 1200, 1180, 1150, 1300, 1300, 1380, 1400, 1450, 1480, 1460, 1490]
    }, {
        label: 'Structural Const.',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        data: [980, 1000, 1100, 1050, 1200, 1260, 1230, 1200, 1180, 1230, 1250, 1100]
    }, {
        label: 'Excavation&Earthwork',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [1600, 1630, 1600, 1580, 1520, 1600, 1670, 1680, 1830, 2000, 1600, 1700]
    }, {
        label: 'Planning&Design',
        backgroundColor: 'rgba(210, 180, 140, 0.2)',
        borderColor: 'rgba(139, 69, 19, 1)',
        borderWidth: 1,
        data: [1700, 1750, 1820, 1870, 1750, 1720, 1690, 1450, 1430, 1470, 1400, 1350]
    }]
};

// 차트 생성
var ctx = document.getElementById('myAreaChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
