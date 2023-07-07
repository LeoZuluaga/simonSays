// SIMON DICE
// 1-funcion empezar juego
// 2-se van a crear 2 arrays vacios. "valoresJugador" y "valoresGenerados"
// 3-funcion que automaticamente sume un valor del 1 al 4 al array "valoresGenerados" y que teniendo en cuenta cual valor sumo brille el cuadrado correspondiente
// .Cada cuadrado tiene asignado que cuando se haga click en uno de ellos, se agregue un valor del 1 al 4
// al array "valoresJugador". y que cuando clickees en uno brille.
// 4-esta funcion se debera repetir infinitamente.la primera parte del juego debera mostrar el array "valoresGenerados" entero, haciendo que brille, y luego que el usuario pueda hacer click en los cuadrados que desea
// creando su array propio "valoresJugador".
// 5- para perder, el array de valoresJugador tiene que ser diferente al de valoresGenerados.

let valoresJugador = []; // array valores inputeados por el jugador.
let valoresGenerados = []; // array valores random generados por la máquina.
let juegoIniciado = false; 
let turnoJugador = false; 

console.log(juegoIniciado);

function empezarJuego() {              // Función para empezar el juego, vacia los arrays cuando arranca y ejecuta agregarvalorgenerado.
  if (juegoIniciado == false) {
    valoresJugador = [];
    valoresGenerados = [];
    agregarValorGenerado();
    juegoIniciado = true;
    turnoJugador = false;
    console.log(juegoIniciado);
  }
}

function agregarValorGenerado() {   //funcion que genera un valor random entre 1 y 4 que corresponden a los cuadrados de colores  y lo agrega a el array valoresGenerados. tmb ejecuta la funcion brillar secuencia.
  const valor = Math.floor(Math.random() * 4) + 1;
  valoresGenerados.push(valor);
  turnoJugador = false;
  brillarSecuencia(); 
}

function brillarSecuencia() {      //funcion que va a ejecutar brillarCuadrado x el largo de toda la secuencia creada x el programa.
  for (let i = 0; i < valoresGenerados.length; i++) {   //el condicional es para verificar si ya llego al ultimo elemento de la secuencia.                                   
    const valor = valoresGenerados[i];              //cuando llegue, turno jugador va a ser true para habilitar los clicks.
    setTimeout(() => {
      console.log(valoresGenerados[i]); // 1, 2, 3, 4
      brillarCuadrado(valor);
      if (i === valoresGenerados.length - 1) {
        turnoJugador = true;
      }
    }, i * 1000);
  }
}

function brillarCuadrado(valor) {            //funcion que va a tomar como parametro valor que va a ser 1,2,3,4 y corresponden a cada cuadrado de color.
  const square = document.getElementById(obtenerSquareID(valor)); //en este se ejecuta la funcion obtenerSquareID que se va a usar para reconocer el cuadrado especifico.
  square.style.opacity = 0.5;
  setTimeout(() => {
    square.style.opacity = 1;
  }, 500);
}

function obtenerSquareID(valor) {       // funcion que usa un switch para seleccionar una de las 4 opciones.
  switch (valor) {
    case 1:
      return "red";
    case 2:
      return "blue";
    case 3:
      return "green";
    case 4:
      return "yellow";
  }
}

function agregarValorJugador(valor) {        // se ejecuta desde los clicks en el html con un evento onclick. 
  if (turnoJugador) {                       //funcion que se va a usar para agregar el valor deseado al array del jugador.
    valoresJugador.push(valor);            //se puede ejecutar si turnojugador es true para evitar que se ejecute en el medio del turno de la maquina.
    brillarCuadrado(valor);
    verificarSecuencia();
  }
  
}

function verificarSecuencia() {             // funcion que verifica si cada elemento de los arrays es igual. 
  if (juegoIniciado == false) {            // si no lo son te alerta que perdiste.
    return;
  } else {
    for (let i = 0; i < valoresJugador.length; i++) {          
      if (valoresJugador[i] !== valoresGenerados[i]) {
        alert("GG");
        return;
      }
    }
    if (valoresJugador.length === valoresGenerados.length) {
      valoresJugador = [];
      setTimeout(agregarValorGenerado, 1000);
    }
  }                                                                                                  
}                                                         

// function reiniciarJuego() {        
//   juegoIniciado = false;
//   turnoJugador = false;
//   valoresJugador = [];
//   valoresGenerados = [];
//   empezarJuego();
// }

function terminarJuego() {        
  juegoIniciado = false;
  turnoJugador = false;
  valoresJugador = [];
  valoresGenerados = [];
}

