// ---------------------- INICIO INFO API GIPHY --------------------------------------------------------
let api_key='WQ1cSwwVwj9SwmnahK76THli31ZtJqWW';

let search='http://api.giphy.com/v1/gifs/search?';
let trending='http://api.giphy.com/v1/gifs/trending?';
let sugEndpoint='http://api.giphy.com/v1/gifs?';

let random='http://api.giphy.com/v1/gifs/random?';


let limiteSugerencias=4;
let limite=16;

let limiteTrending=12;
// --------------------INICIO SUGERIDOS HOY ----------------------------------------------------

let ids='5PhoLTGAiHguInjU8w, CW0RoZIy3qiWc, kweQyWx99RxP6unEqr, 26AHG5KGFxSkUWw1i';
let id='5PhoLTGAiHguInjU8w';

// ---------------------- INICIO FUNCION SUGERIDOS HOY --------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let sug = sugEndpoint + 'ids=' + ids + '&api_key=' + api_key;

  fetch(sug)
  .then(response => response.json())
  .then(content => {
    for (let i=0; i<content.data.length;i++){

    let sugerencia = document.createElement('img');
    sugerencia.setAttribute("class", "giff")
    sugerencia.src = content.data[i].images.original.url;

    let title = content.data[i].title;  
    let titulo = document.createElement('div');

    titulo.setAttribute("class", "cuadroGiff")
    titulo.innerHTML = 
    '<section class="titGiff">' + '<p>#' + content.data[i].title + ' </p>' +
    '<img class="btn_close" src="/assets/close.svg" alt = ""> '+
    '</section> <img class = "giff" src =' + content.data[i].images.original.url + ' alt = "" >' +
    '<button class="btn-verMas" onclick="buscar(\'' + title + '\')"> Ver más... </button>';
    title;

    let titulosGiff = document.querySelector(".tituloGiff");
    titulosGiff.insertAdjacentElement("beforeEnd", titulo);

    }
      
  })  

  .catch(error => {
    console.log(error);
  })

});


// ---------------------- TERMINO FUNCION SUGERIDOS HOY --------------------------------------------------------

// ---------------------- INICIO  Trendings --------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let url = trending + 'api_key=' + api_key + '&limit=' + limiteTrending;
  
  fetch(url)
  .then(response => response.json())
  .then(content => {
    for (let i=0; i<content.data.length;i++){

    let trend = document.createElement('img');
    trend.setAttribute("class","giffTrend")
    trend.src = content.data[i].images.fixed_height.url;
  
    let title = content.data[i].title;  
    let tituloTrending = document.createElement('div');

    tituloTrending.setAttribute("class", "trending")
    tituloTrending.innerHTML = 
    '<img class = "trendGiff" src =' + content.data[i].images.fixed_height.url + ' alt = "" >' +
    '<div class = "hoverGiff">' +
    '<p>#' + content.data[i].title + '</p>' +
    '</div>'
    title;

    let resultadoTrending = document.querySelector(".resultadoTrending");
    resultadoTrending.insertAdjacentElement("beforeEnd", tituloTrending );

    }    

  })     
  .catch(error => {
    console.log(error);
  })


});

// ---------------------- TERMINO   Trendings --------------------------------------------------------

// ---------------------- INICIO  FUNCION Busqueda --------------------------------------------------------

document.addEventListener("DOMContentLoaded", buscar);
function buscar() {
  document.getElementById("btn").addEventListener("click", function() {
    keyword = document.getElementById("search").value;

    let url = search+"api_key="+api_key+"&limit="+limite+"&q="+keyword;

    fetch(url)
    .then(response => response.json())
    .then(content => {
      for (var i=0; i<content.data.length;i++){
        let busqueda = document.createElement('img');
        busqueda.src = content.data[i].images.fixed_height.url;
        let resultadoBusqueda = document.querySelector(".resultadoBusqueda");
        resultadoBusqueda.insertAdjacentElement("beforeend", busqueda);
      }               
    })
      
    .catch(error => {
      console.log(error);
    })
      
  })
};

// ---------------------- Termino  FUNCION Busqueda --------------------------------------------------------



// *********************  Abre y Cierra el Menu de Eleccion de Tema**//

function desplegarMenu() {
	document.getElementById("menuDesplegable").classList.toggle("show");
};

window.onclick = function(event) {
	if (!event.target.matches('#botonDesplegable')) {
		var dropdowns = document.getElementsByClassName("menuDesplegable-contenido");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

// ********************* INICIO Abre Pagina Crear Giffos**//

let crearGif = document.getElementById("crearGif");
crearGif.addEventListener("click", () => {
  location.assign("/crear_guifos.html");
});
// ********************* TERMINO Abre Pagina Crear Giffos**//

// ********************* INICIO Abre Pagina Mis Giffos**//

let misGif = document.getElementById("misGif");
misGif.addEventListener("click", () => {
  location.assign("/misGiffos.html");
});
// ********************* TERMINO Abre Pagina Mis Giffos**//

// ********************* INICIO Volver Index**//

var logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  location.assign("/index.html");
});

// ********************* TERMINO Volver Index**//
