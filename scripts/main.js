let loaded = (eventLoaded) => {
    let myform = document.getElementById("formulario");
    myform.addEventListener('submit', (eventSubmit) => {
      debugger;
    });
  
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre");
      const email = document.getElementById("email");
     
      if (nombre.value.length == 0) {
        alert("Nombre requerido");
        nombre.focus();
        return;
      }
  
      if (email.value.length == 0) {
        alert("Email requerido");
        email.focus();
        return;
      }
  
      const constnombre = nombre.value;
      const constemail = email.value;
     
  
      const constdatos = {
        nombre: constnombre,
        email: constemail,
        
      };
  
      fetch(
        "https://formulario-1de47-default-rtdb.firebaseio.com/collection.json",
        {
          method: "POST",
          body: JSON.stringify(constdatos),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          console.log(datos);
          agregarFila(constnombre, constemail);
          formulario.reset();
        })
        .catch((error) => console.error(error));
    });
  };
  
  let template = (nombre, email) => `
    <tr>
      <td>${nombre}</td>
      <td>${email}</td>
     
    </tr>
  `;
  
  async function obtenerDatos() {
    const url = "https://formulario-1de47-default-rtdb.firebaseio.com/collection.json";
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      console.error("Error:", respuesta.status);
      return;
    }
    const datos = await respuesta.json();
    console.log(datos);
  
    let tablebody = document.getElementById("tablebody");
    tablebody.innerHTML = "";
  
    for (const key in datos) {
      if (datos.hasOwnProperty(key)) {
        let nombre = datos[key].nombre;
        let email = datos[key].email;
        tablebody.innerHTML += template(nombre, email);
      }
    }
  }
  
  function agregarFila(nombre, email) {
    let tablebody = document.getElementById("tablebody");
    tablebody.innerHTML += template(nombre, email);
  }
  
  window.addEventListener("DOMContentLoaded", loaded);