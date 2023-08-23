// widget-scroll.js

// Función para ajustar la posición del widget
function adjustWidgetPosition() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var widgetContainer = document.querySelector('.tradingview-widget-container');
    widgetContainer.style.top = scrollPosition + 'px';
  }
  
  // Llama a la función al cargar y al desplazarse
  window.onload = adjustWidgetPosition;
  window.onscroll = adjustWidgetPosition;
  