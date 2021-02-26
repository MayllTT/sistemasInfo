var Http = require( 'http' );
var fs = require('fs');
var url = require('url');
var server = Http.createServer(function(request,response){
var uri = (request.connection.encrypted ? 'https': 'http') + '://'
            + request.headers.host + request.url;
console.log(uri)
var uri_parseada = url.parse(uri,true);
console.log(uri_parseada)

//GET Y RUTA / --> pagina1.html
//POST Y RUTA / --> pagina2.html
//GET Y RUTA /mensaje --> recurso.json

if(request.method == 'GET'){

  if (uri_parseada.path == '/') {
    fs.readFile('pagina1.html',function(err,datos){
      console.log('Sirviendo pagina 1 . . . 1,2,3');
      response.writeHead(200,"Content-Type:text/html");
      response.write(datos);
      response.end();
    });// A ESTA PARTE LE HACE FALTA MANEJO DE ERROR/EXCEPCIONES
  } else{
    if (uri_parseada.path == '/mensaje') {
      fs.readFile('recurso.json',function(err,datos){
        console.log('Sirviendo pagina recurso.json. . . 1,2,3');
        response.writeHead(200,"Content-Type:text/json");
        response.write(datos);
        response.end();
      });// A ESTA PARTE LE HACE FALTA MANEJO DE ERROR/EXCEPCIONES
    }
  }
} else{
  if (request.method == 'POST') {
    fs.readFile('pagina2.html',function(err,datos){
      console.log('Sirviendo pagina 2 . . . 1,2,3');
      response.writeHead(200,"Content-Type:text/html");
      response.write(datos);
      response.end();
    });// A ESTA PARTE LE HACE FALTA MANEJO DE ERROR/EXCEPCIONES
  } else {
    response.write("Nada que servir");
    response.end();
  }


}

});

server.listen( 3000, function( ) {
  console.log( 'Escuchando conexión en el puerto 3000' );
});
