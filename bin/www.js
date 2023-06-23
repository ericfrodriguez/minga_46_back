import app from '../app.js'               //importo la aplicación de back configurada
import debug from 'debug'                 //importo el modulo para debuguear
import http from 'http'                   //importo el módulo para crear servidores

let port = normalizePort(process.env.PORT || '8080')      //defino el puerto donde va a funcionar nuestro servidor
//defino un operador OR para normalizar el puerto
//porque cuando hostee/deployee el servidor el hosting me va a asignar el puerto que tenga libre para mi app

app.set('port', port)                     //configuro el puerto con la variable port definida anteriormente

let server = http.createServer(app)       //utilizo el módulo http para crear un servidor (con las configuraciones que se realizaron en app)

function ready() {                        //ready es una función que se va a ejecutar cuando se levante correctamente el servidor
    console.log('server ready on port '+port)           //me informa en la consola que el servidor se levantó correctamente en el puerto PORT
}
//listen se utiliza para escuchar un puerto y es el encargado de levantar efectivamente el servidor (empieza a funcionar)
server.listen(
    port,                                 //primer parámetro necesario el puerto donde tiene que funcionar el servidor
    ready                                 //segundo parámetro callback opcional para mostrar en consola que el servidor está funcionando
)
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}