const CHART = document.getElementById("lineChart");
console.log(CHART);
let lineChart = new Chart(CHART, {
  type: 'radar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "My First Dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75, 192,192,1)",
        borderColor: "rgba(75, 192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75, 192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75, 192,192,1)",
        pointHoverBorderColor: "rgba(220, 220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 38],
      },
      {
        label: "My Second Dataset",
        fill: true,
        backgroundColor: "rgba(75, 75, 192, .4)",
        borderColor: "rgba(75, 72, 192 ,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75, 72, 192, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75, 72, 192, 0.7)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [80, 23, 26, 67, 30, 55, 80, 62],
      }
    ]
  },
  options: {
    showLines: true,
    scales: {
      yAxis: [{
        ticks: {
          reverse: true,
          beginAtZero: true,
        }
      }]
    }
  }
});
