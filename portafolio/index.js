// fecha automatica
document.getElementById("year").textContent = new Date().getFullYear();




let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}





// formulario  


const formulario = document.getElementById('formulario');
  const boton = document.getElementById('btnEnviar');
  
  formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    // Cambia el texto del botón para indicar que está enviando
    boton.textContent = 'Enviando...';
    boton.disabled = true;
    
    // ⚠️ COPIA Y PEGA AQUÍ TU URL DE GOOGLE APPS SCRIPT
    const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbwDuZHUtwWmfNaEe7dT0nc3jUUkhJXFiUHSBosoeOuds7EP7IgW-tn0xwUJe8nqSJQ/exec';
    
    // Captura los datos del formulario basándose en los atributos 'name'
    const datosFormulario = new FormData(formulario);
    
    // Envía los datos de forma asíncrona
    fetch(urlGoogleScript, {
      method: 'POST',
      body: datosFormulario,
      mode: 'no-cors' // Permite el envío sin problemas de seguridad entre dominios
    })
    .then(() => {
      alert('¡Mensaje guardado en Google Sheets con éxito!');
      formulario.reset(); // Limpia los campos
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje.');
    })
    .finally(() => {
      // Restaura el botón a su estado original
      boton.textContent = 'Enviar Mensaje';
      boton.disabled = false;
    });
  });