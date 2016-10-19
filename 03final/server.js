//cargando el modulo http
var http = require('http');
//cargando libreria de colors
var colors=require('colors');
//Generando un tema
colors.setTheme({
warn : ['yellow', 'bgWhite'],
achivement: 'rainbow'
});
//obteniendo configuraciones
var config=require('./config/config');
//console.log(`>contenido de modulo=${modulo}`);
var IP = config.IP;
var PORT =config.PORT; //todo mayusculas es que va hacer constante
//Creando el server
//El programa que va a contestar siempre que haya una peticion.
var server = http.createServer(function(req,res){
    res.writeHead(
        200,
        {
            'content-Type': 'text/plain',
            'Server': 'Buho@0.0.0'
        }
    );
res.write('Hola desde el server...');
res.end();

});
//Poniendo a escuchar al server
server.listen(PORT,IP, function(){
    console.log(">server escuchando en".achivement + `http://${IP}:${PORT}/ ...`.achivement);
});