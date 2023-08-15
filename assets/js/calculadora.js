// Función para calcular el rendimiento anual basado en el saldo inicial
function calcularRendimientoAnual(saldoInicial) {
    const ranges = [
      { min: 100000000, percentage: 4.5 },
      { min: 500000, percentage: 2.8 },
      { min: 250000, percentage: 2.4 },
      { min: 100000, percentage: 2.1 },
      { min: 70000, percentage: 1.5 },
      { min: 40000, percentage: 1 }
    ];
  
    let rendimientoAnual = 0;
    for (const range of ranges) {
      if (saldoInicial >= range.min) {
        rendimientoAnual = range.percentage;
        break;
      }
    }
  
    return rendimientoAnual;
  }
  
// Función para calcular el interés compuesto
function calculateCompoundInterest() {
    const initialBalance = parseFloat(document.getElementById("initialBalance").value);
    const years = parseFloat(document.getElementById("plazoMeses").value) / 12;

    const rendimientoAnualPorcentaje = calcularRendimientoAnual(initialBalance);

    let balance = initialBalance;

    for (let year = 1; year <= years; year++) {
        balance *= (1 + rendimientoAnualPorcentaje / 100);
    }

    const totalBalance = balance.toFixed(2);

    document.getElementById("result").textContent = `Saldo total: $${totalBalance}\nTasa de interés anual: ${rendimientoAnualPorcentaje.toFixed(2)}%`;
    document.getElementById("rendimientoAnual").textContent = `${rendimientoAnualPorcentaje.toFixed(2)}%`;
}
  
  
  
  // Función para calcular el nivel de riesgo
  function calcularNivelRiesgo() {
    const percepcionInput = document.getElementById("percepcionRiesgo");
    const nivelRiesgoSpan = document.getElementById("nivelRiesgo");
    const percepcion = parseFloat(percepcionInput.value);
  
    let nivel = "";
  
    if (percepcion >= 5 && percepcion <= 10) {
      nivel = "Conservador";
    } else if (percepcion > 10 && percepcion <= 20) {
      nivel = "Moderado";
    } else if (percepcion > 20 && percepcion <= 40) {
      nivel = "Agresivo";
    } else {
      nivel = "N/A";
    }
  
    nivelRiesgoSpan.textContent = nivel;
  }
  
  // Inicialización de eventos
  document.addEventListener("DOMContentLoaded", function() {
    const inputElements = document.querySelectorAll("input");
    inputElements.forEach(input => {
      input.addEventListener("input", calculateCompoundInterest);
    });
  
    const percepcionInput = document.getElementById("percepcionRiesgo");
    percepcionInput.addEventListener("input", calcularNivelRiesgo);
  
    const calcularRendimientoBtn = document.getElementById("calcularRendimientoBtn");
    calcularRendimientoBtn.addEventListener("click", calculateCompoundInterest);
  
    calculateCompoundInterest();
    calcularNivelRiesgo();
  });
  