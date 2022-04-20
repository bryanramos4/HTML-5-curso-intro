//var nombre = "Bryan Ramos";
//var altura = 161;

//document.write(nombre); 
//document.write(altura);

// var concatenacion = nombre + " " + altura;

// var datos = document.getElementById("datos");
// //datos.innerHTML = 

// console.log(datos);

// datos.innerHTML = "otro dato";

// datos.innerHTML += `<h1>Advertencia</h1>
// <h1>${nombre}</h1>`;
// //datos.innerHTML="otro dato 222";

// if(altura <= 160){
//     datos.innerHTML += "eres una persona pequeña";
// }else{
//     datos.innerHTML += "eres una persona alta";
// }


// for(var i = 20; i<100; i++){
//     console.log("contador "+i);
// }

function miNombre (nombre, altura){
    console.log('inicia msg');
    
    var mesg= `<h1>Hola</h1>
    <h1>${nombre} - ${altura}</h1>`; 
    
    if (altura > 150){
        mesg += "pasa"
    } else {
        mesg += "NO pasa"
    }

    console.log('fin msg');

    return mesg;
}

var nom = "Alejandro";
var alt = "160";


function imprimir (){
    console.log("Inicia imp");
    var datos = document.getElementById("datos");
    datos.innerHTML = miNombre (nom, "100");
    console.log("fin imp");
}

//miNombre("Bryan", 170);




