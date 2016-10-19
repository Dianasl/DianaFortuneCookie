var fs = require("fs");
//leer el archivo
//NO BLOQUEANTE
fs.readFile('./index.html','utf8',function(err,content){
    if(err){
        console.log(">Error en la lectura del archivo");
        throw err;
    }
    console.log(content);
});
console.log("Lectura terminada");