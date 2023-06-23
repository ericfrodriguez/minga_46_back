import 'dotenv/config.js'                 //configurar las variables de entorno de la aplicación
import './config/db.js'                   //configurar la conexión con la db
import express from 'express'             //modulo necesario para levantar y configurar un servidor
import path from 'path'                   //modulo necesario para conocer la ubicación de nuestro servidor
import logger from 'morgan'               //modulo para registrar las peticiones que se realizan al servidor
import cors from 'cors'                   //modulo para permitir origines cruzados (front con el back)
import { __dirname } from './utils.js'    //importo la confgiuración de la ruta padre
import indexRouter from './routes/index.js'   //enrutador principal de la aplicación

let app = express();                      //defino una variable con la ejecución del módulo de express para poder CREAR un servidor

//VIEWS
//set es un método QUE CONFIGURA algo
app.set('views', path.join(__dirname, 'views'));  //configuro que las vistas generadas en el backend están en la carpeta VIEWS
app.set('view engine', 'ejs');                    //configuro que las vistas se van a definir con el lenguja EJS (motor de plantilla)

//MIDDLEWARES
//son funciones que se ejecutan con cada petición y que van a PERMITIR/NO PERMITIR realizar algo
//use es un método QUE OBLIGA (en este caso) A MI APLICACION a usar algo (ejecutar una función)
app.use(logger('dev'));                                   //obliga al servidor a usar el middleware de registro de peticiones
app.use(express.json());                                  //obliga al servidor a transformar/manejar formato json (post/put)
app.use(express.urlencoded({ extended: false }));         //obliga al servidor a acceder a consultas complejas (permite leer queries y params de una petición)
app.use(express.static(path.join(__dirname, 'public')));  //obliga al servidor a generar una carpeta de acceso PUBLICO al cliente
app.use(cors())                                           //obliga al servidor a permitir el cruce de origines de front/back

//ENDPOINTS
app.use('/api', indexRouter);                             //obliga al servidor a usar las rutas definidas en el enrutador principal con la palabrita "/api"

export default app