const canvas = document.getElementById('salesChart');
const ctx = canvas.getContext('2d');

const data = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    datasets: [
        {
            label: '2022',
            data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: '2023',
            data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#fff',
                    usePointStyle: true,
                    pointStyle: 'rect',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: 20      
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff',
                    stepSize: 2500
                },
                grid: {
                    color: '#323946'
                }
            }
        }
    }
};

new Chart(ctx, config);