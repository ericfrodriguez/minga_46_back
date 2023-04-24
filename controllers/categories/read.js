import Category from './../../models/Category.js'

let read = async(req,res,next)=> {          //la funcion controladora debe ser asincrona para poder esperar la respuesta de MONGO
    try {                                   //utilizo la sintaxis de try/catch para intentar algo y catchear lo errores que puedan surgir
        let all = await Category.find()     //utilizo el método find() para buscar todos los recursos del modelo (que en este caso es CATEGORY)
        return res.status(200)              //configuro la respuesta que le tengo que enviar al cliente (front)
            .json({
                categories: all
            })
    } catch(error) {
        console.log(error)
        return res.status(400)
            .json({
                error: 'ha ocurrido un error!'
            })
    }
}

export default read