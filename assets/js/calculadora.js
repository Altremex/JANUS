// scripts.js
let performanceData = {
  labels: [],
  datasets: [{
      label: 'Depósito inicial',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
  }, {
      label: 'Aportaciones adicionales acumuladas',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
  }, {
      label: 'Interés acumulado',
      data: [],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
  }]
};

let ctx = document.getElementById('performanceChart').getContext('2d');
let performanceChart = new Chart(ctx, {
  type: 'bar',
  data: performanceData,
  options: {
      scales: {
          x: {
              stacked: true
          },
          y: {
              stacked: true,
              beginAtZero: true
          }
      }
  }
});

function calculate() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const time = parseInt(document.getElementById('time').value);
  const frequency = parseInt(document.getElementById('frequency').value);
  const additional = parseFloat(document.getElementById('additional').value);
  
  if (principal && rate && time && frequency && additional !== null) {
      let total = principal;
      let totalAdditional = 0;
      let totalInterest = 0;
      performanceData.labels = [];
      performanceData.datasets[0].data = [];
      performanceData.datasets[1].data = [];
      performanceData.datasets[2].data = [];
      
      for (let i = 1; i <= time; i++) {
          for (let j = 0; j < frequency; j++) {
              total += additional / frequency;
              total += total * (rate / frequency);
          }
          totalAdditional += additional;
          totalInterest = total - principal - totalAdditional;
          
          performanceData.labels.push(`${i} años`);
          performanceData.datasets[0].data.push(principal);
          performanceData.datasets[1].data.push(totalAdditional);
          performanceData.datasets[2].data.push(totalInterest);
      }
      
      document.getElementById('result').innerHTML = `Total después de ${time} años: $${total.toFixed(2)}`;
      performanceChart.update();
  } else {
      document.getElementById('result').innerHTML = 'Por favor, completa todos los campos.';
  }
}
