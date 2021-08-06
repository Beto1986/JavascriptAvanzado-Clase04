///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicios de eventos

// // Inicio Ejemplos en clase
// const saludo = () => alert("Hola Beto");

// const b = document.querySelector("#boton");
// b.addEventListener("click", saludo);
// // Fin Ejemplos en clase

////////////////////////////////////////////////////////////////////////////

// 1) Crear un botón que al hacerle click, muestre un saludo por alert.

// Declaro la función con su contenido.
const saludo = () => alert("Buenos días");

// Selecciono el elemento por id.
const saludar = document.querySelector("#saludo");
// Invoco el evento o acción a ejecutar
saludar.addEventListener("click", saludo);

// 2) Crear un botón que al hacerle click, muestre un mensaje en el HTML.

const mensajeBienvenido = () => document.write(`<p>Bienvenido al sitio!</p>`);

const bienvenido = document.querySelector("#bienvenido");
bienvenido.addEventListener("click", mensajeBienvenido);

// 3) Crear un botón que al hacerle click cambie de color.

const seleccionarColor = document.querySelector("#color");
const cambiarColor = () => seleccionarColor.style.backgroundColor = "yellow";
seleccionarColor.addEventListener("click", cambiarColor);

// 4) Crear 5 botones numerados del 1 al 5. Al hacer click en uno y mostrar un mensaje que diga “Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.

// Obtener todos los botones por su clase.
const botones = document.querySelectorAll(".botones");

const cuandoSeHaceClick = function(parametroPorValor) {
    alert(`Haz clickeado el botón: ${parametroPorValor}`);
}

// Botones actua como un array
botones.forEach(boton => {
    // Uso una función anónima para poderle pasar parámetros(en este caso el valor de mi botón)
    boton.addEventListener("click", function() {
        cuandoSeHaceClick(this.value);
    });

});

//////////////////////////////////////////////////////////////////////////
// OTRA FORMA DE RESOLVERLO PERO APLICANDO LA MISMA LOGICA POR CADA BOTON.
//////////////////////////////////////////////////////////////////////////

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

const presionarBoton1 = () => {
    console.log(`Presionando el boton nº ${document.querySelector("#btn1").value}`)
}

const presionarBoton2 = () => {
    console.log(`Presionando el boton nº ${document.querySelector("#btn2").value}`)
}
const presionarBoton3 = () => {
    console.log(`Presionando el boton nº ${document.querySelector("#btn3").value}`)
}
const presionarBoton4 = () => {
    console.log(`Presionando el boton nº ${document.querySelector("#btn4").value}`)
}
const presionarBoton5 = () => {
    console.log(`Presionando el boton nº ${document.querySelector("#btn5").value}`)
}

btn1.addEventListener("click", presionarBoton1);
btn2.addEventListener("click", presionarBoton2);
btn3.addEventListener("click", presionarBoton3);
btn4.addEventListener("click", presionarBoton4);
btn5.addEventListener("click", presionarBoton5);


// 5) Crear un input y un botón. Dentro del input el usuario debe ingresar un color y al hacer click, el input se pone de ese color y se genera un mensaje indicando el color elegido.

// Obtener el boton por su id.
const boton2 = document.querySelector("#btn");
// Genero un picker para seleccionar el color.
const color = document.querySelector("#color5");
// Obtener el input por su id.
const input = document.querySelector("#mensaje");

const modificarColor = () => {
    //color.style.background = color.value;
    input.style.background = color.value;
    input.value = `Color en hexadecimal: ${color.value}`
}

boton2.addEventListener("click", modificarColor);

// 6) Crear dos input tipo número y un botón. 
/* a) Al hacer foco en un input se debe poner azul.
b) Al escribir, se debe poner violeta.
c) Cuando se le saca el foco, se pone verde.
d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos */

// a) Al hacer foco en un input se debe poner azul.

// Selecciono el input a colorear 
const inputNumerico = document.querySelector("#numero1");

// Asigno el color azul de fondo cuando hacemos foco sobre el input numérico
const inputColorAzul = () => inputNumerico.style.backgroundColor = "blue";
inputNumerico.addEventListener("focus", inputColorAzul);

// b) Al escribir, se debe poner violeta.

// Selecciono el input a colorear 
const inputNumerico2 = document.querySelector("#numero2");

// Asigno el color azul de fondo cuando hacemos foco sobre el input numérico
const inputtextColorVioleta = () => {
    if (inputNumerico2.value !== "") {
        inputNumerico2.style.backgroundColor = "violet";
    }
}

// Había probado con el change, lo hace, pero cuando salgo del foco del input y no era lo que quería.
inputNumerico2.addEventListener("keyup", inputtextColorVioleta);
// La llamo otra vez porque puede que haga clic sobre uno de los signos mayores y menores del control del input
inputNumerico2.addEventListener("click", inputtextColorVioleta);

// c) Cuando se le saca el foco, se pone verde.

// Selecciono el input a colorear 
const inputNumerico3 = document.querySelector("#numero2");

// Asigno el color azul de fondo cuando hacemos foco sobre el input numérico
const inputtextColorVerde = () => {
    inputNumerico3.style.backgroundColor = "green";
}

inputNumerico3.addEventListener("blur", inputtextColorVerde);

// d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos */
const num1 = document.querySelector("#numero1");
const num2 = document.querySelector("#numero2");
const calcular = document.querySelector("#boton");

const calculoSuma = () => {
    document.write(`La suma de ambos números es: ${parseInt(num1.value) + parseInt(num2.value)}`);
}

calcular.addEventListener("click", calculoSuma);

//7) Poner en un select tres(o más) opciones de superheroes.Dependiendo el que el usuario elija, se mostrará debajo una imagen que haga referencia al personaje.Cuando se le pase el mouse por encima, la imagen debe mostrar una foto de su identidad secreta en su lugar.(Por ejemplo en lugar de verse superman, se vera a Clark Kent).



function setearSuperHeroe() {
    //console.log(this.value);

    const img = document.querySelector("#image");
    //console.log(this.value);
    img.src = this.value; // acá le paso el archivo de la imagen para formar la ruta entera
    const ruta = this.value;

    //console.log(ruta);
    img.addEventListener('mouseover', function() {
        cambiar(ruta)
    });

    //img.addEventListener('mouseout', restaurar, false);
    img.addEventListener('mouseout', function() {
        restaurar(ruta)
    });

    // Aplico estilos(ancho y alto) a las imagenes.
    img.style.width = "700px";
    img.style.height = "500px";

    return false;
}
document.querySelector("#superheroe").onchange = setearSuperHeroe;

const restaurar = function(ruta) {
    //console.log(ruta);
    switch (ruta) {
        case "img/superman.jpg":
            let imagen5 = document.querySelector("#image").src = "img/superman.jpg";
            break;
        case "img/batman.jpg":
            let imagen6 = document.querySelector("#image").src = "img/batman.jpg";
            break;
        case "img/ironman.jpeg":
            let imagen7 = document.querySelector("#image").src = "img/ironman.jpeg";
            break;
        default:
            let imagen8 = document.querySelector("#image").src = "img/superheroeoculto.jpg";
            break;
    }

}

const cambiar = function(ruta) {
    //console.log(ruta);
    switch (ruta) {
        case "img/superman.jpg":
            let imagen1 = document.querySelector("#image").src = "img/clarkkent.jpg";
            break;
        case "img/batman.jpg":
            let imagen2 = document.querySelector("#image").src = "img/brucewayne.png";
            break;
        case "img/ironman.jpeg":
            let imagen3 = document.querySelector("#image").src = "img/tonystark.jpg";
            break;

        default:
            let imagen4 = document.querySelector("#image").src = "img/superheroeoculto.jpg";
            break;
    }

}

// 8) Investigar y elegir un evento que no hayamos visto en clase. Hacer una demo de cómo funciona.

// Función que se ejecuta al final cuando ya se cargó todo lo que está dentro de la etiqueta body.
function cargarBody() {
    alert("Se cargó el contenido de la etiqueta body");
}