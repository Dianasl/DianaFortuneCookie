//exportar por entidad
//exports.numero0=10;
//exports.numero1=11;
//exports para exportarlon y verlo en el server
//exportando directamente este valor
//module.exports =10;
module.exports={
    'IP' : process.env.IP || '127.0.0.1',
    'PORT' : process.env.PORT || 3000
};
