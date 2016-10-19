//se carga el modulo
//file system que
//nos permite la lectura
//de un archivo
var fs = require("fs");
var colors = require("colors");
//Creando tema en colors
colors.setTheme({
    informativo: 'green',
    error: 'red',
    alerta: 'yellow'
});
//leyendo el archivo
//de forma bloqueante /sincrona
var content = fs.readFileSync("./index.html", 'utf8');//se va a guardar lo de index.html
console.log(content.america.bold); //Impresiond el archivo
console.log(">Lectura terminada...".informativo); //mensaje de termino de operacion.
console.log("Hola del Box lunch".zebra);
