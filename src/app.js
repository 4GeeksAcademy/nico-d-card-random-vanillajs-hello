import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let cartas = {
    2: ["♦", "♥", "♠", "♣"],
    3: ["♦", "♥", "♠", "♣"],
    4: ["♦", "♥", "♠", "♣"],
    5: ["♦", "♥", "♠", "♣"],
    6: ["♦", "♥", "♠", "♣"],
    7: ["♦", "♥", "♠", "♣"],
    8: ["♦", "♥", "♠", "♣"],
    9: ["♦", "♥", "♠", "♣"],
    10: ["♦", "♥", "♠", "♣"],
    J: ["♦", "♥", "♠", "♣"],
    Q: ["♦", "♥", "♠", "♣"],
    K: ["♦", "♥", "♠", "♣"],
    A: ["♦", "♥", "♠", "♣"],
  };

  let claves = Object.keys(cartas); // me da todos las key en un array
  let valores = Object.values(cartas); // me da todos los valores en un array

  let randomNumero = Math.floor(Math.random() * claves.length); // me da el indice que es de 0 a 12 claves.length es de 1 a 13 - 1 = 12 porque math floor redondea hacia abajo
  let claveSeleccionada = claves[randomNumero]; // arriba accedí al indice y acá le paso la clave + indice me da valor
  let randomArray = Math.floor(Math.random() * valores.length);
  let palos = cartas[claveSeleccionada];

  let randomPalo = Math.floor(Math.random() * palos.length);
  let paloSeleccionado = palos[randomPalo];


  let palo = document.querySelectorAll(".paloFinal");
  palo.forEach((palo) => {
    palo.innerHTML = paloSeleccionado
    if(paloSeleccionado === "♥" || paloSeleccionado === "♦"){
      palo.style.color = "red"
    } 
    
  })

  let numero = document.getElementsByClassName("numero")
  Array.from(numero).forEach((numero) => {
    numero.innerHTML = claveSeleccionada
  })

  
};







