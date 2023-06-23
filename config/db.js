import { connect } from 'mongoose'

connect(process.env.LINK_DB)                        //conecto con el link de la db guardado en la variable de entorno del archivo .env
    .then(()=>console.log('connected to db'))       //devuelve una promesa por lo que es necesario configurar
    .catch(err=>console.log(err))                   //then y catch