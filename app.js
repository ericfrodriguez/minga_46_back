import 'dotenv/config.js' //requiero la configuracion de las variables de entorno
import './config/database.js' //requiero la configuracion de la db

import createError from 'http-errors' //métodos para definir errores
import express from 'express' //metodos de express para configurar y levantar servidores
import path from 'path' //metodos para trabajar con rutas de archivos y directorios
import logger from 'morgan' //middleware que registra peticiones y errores HTTP
import {__dirname} from './utils.js'

import indexRouter from './routes/index.js'

const app = express()

// view engine setup
app.set('view engine', 'ejs') //configuro el motor de vistas generadas por el back
app.set('views', path.join(__dirname, 'views')) //configuro donde van a estar las vistas

//middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', indexRouter)

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app