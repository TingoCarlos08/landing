// main.js

// Definición de la función 'loaded' para el primer evento DOMContentLoaded
let loaded = (eventLoaded) => {
    window.alert("Página de destino cargada");
    console.log(eventLoaded);
    debugger;
  }
  
  // Asignación del evento DOMContentLoaded para la primera función loaded
  window.addEventListener("DOMContentLoaded", loaded);
  
  // Acceso al formulario por su identificador único
  let loadedForm = (eventLoaded) => {
    let myform = document.getElementById('formulario');
    debugger;
  }
  
  // Asignación del evento DOMContentLoaded para la segunda función loadedForm
  window.addEventListener("DOMContentLoaded", loadedForm);
  
  // Asignación del identificador único para cada elemento de entrada de datos
  let loaded = (eventLoaded) => {
    let element1 = document.getElementById('element1');
  
    myform.addEventListener('submit', (eventSubmit) => {
      eventSubmit.preventDefault();
  
      let element1Value = element1.value;
  
      if (element1Value.length === 0) {
        element1.focus();
        alert('Ingrese un texto válido');
        return;
      }
  
      console.log(element1Value.length); // Conteo de la cantidad de letras en el texto
      element1.focus(); // Establecimiento de enfoque en el elemento HTML
      window.alert("Mensaje de alerta"); // Mostrar mensaje de alerta
  
      debugger;
    });
  }
  
  // Asignación del evento DOMContentLoaded para la función principal
  window.addEventListener("DOMContentLoaded", loaded);
  