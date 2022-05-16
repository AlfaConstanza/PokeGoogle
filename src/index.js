import { filtrar, filtrartipos } from "./filtros.js";
import pokemon from "./data/pokemon/pokemon.js";
//primer boton pagina inicio
// console.log(window.location);
let selectedPokemon = " "
let pokemonfortaleza = " "
let pokemondebilidad = " "

let btn = document.getElementById("start");
if(btn){
btn.addEventListener("click", start);
function start() {
  window.location = "buscador.html";
  let name = document.getElementById("name").value;
  localStorage.setItem("name", name);
}
};

let data = document.getElementById("data")
if(data){
  window.onload = ()=>{
  document.getElementById("data").innerHTML = "Bienvenido " + localStorage.getItem("name") + " maestro Pokémon"
} 
}
;
    
//segundo boton buscar y funciones para ir a buscar la data

let busca = document.getElementById("buscar");
if(busca){
busca.addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  //console.log(`aqui está el nombre ${nombre}`)
  selectedPokemon = filtrar(nombre);
  console.log(selectedPokemon.name + "       " + selectedPokemon.img);
  let img = document.getElementById("pokeimg");
  img.src = selectedPokemon.img;
  img.classList.add("show");
  document.getElementById("number").innerHTML = `<p class="hola mauri" > Número ${selectedPokemon.num} - ${selectedPokemon.name}</p>`;
  console.log(selectedPokemon);
})

};

//menú desplegable mas busqueda de data con info pokemon

let fortaleza = document.getElementById("fortaleza");
if(fortaleza){
fortaleza.addEventListener("click", () => {
  selectedPokemon.resistant.forEach(tipo => pokemonfortaleza = filtrartipos(tipo))
  console.log(selectedPokemon.resistant)
  let img = document.getElementById("pokepoke");
  img.src = pokemonfortaleza.img;
  img.classList.add("show");
  document.getElementById("result").innerHTML = `<p class="poke" > Número ${pokemonfortaleza.num} - ${pokemonfortaleza.name}</p>`;
  });
  
}


let debilidad = document.getElementById("debilidad");
if(debilidad){
debilidad.addEventListener("click", () => {
  selectedPokemon.weaknesses.forEach(tipo => pokemondebilidad = filtrartipos(tipo))
  // console.log(selectedPokemon.resistant)
  let img = document.getElementById("pokepoke");
  img.src = pokemondebilidad.img;
  img.classList.add("show");
  document.getElementById("result").innerHTML = `<p class="poke" > Número ${pokemondebilidad.num} - ${pokemondebilidad.name}</p>`;
  });
}