//funcion que se aplica al seleccionar el menu y quitar la previamente seleccionada

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className = "seleccionado";
}

//desaparecer el menu una vez seleccionada una opcion
var x = document.getElementById("nav");
x.className = "";

//funcion que muestra el menu responsive//

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className ===""){
        x.className = "responsive";
    }else
    x.className = "";
}

//detecto el scrool para aplicar animacion de barra de skills

window.onscroll = function () {
    efectoHabilidades ()
};

//funcion que aplica la animacion de la barra 

function efectoHabilidades () {
    var skills = document.getElementById ("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("Css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("React").classList.add("barra-progreso4");
    }
}