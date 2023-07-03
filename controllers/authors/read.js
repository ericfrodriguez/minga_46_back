import createHttpError from "http-errors"
import Author from "../../models/Author.js"


export default async(req,res, next)=> {
    try {
        let all = await Author.find()       //espero la busqueda de todos los autores
        if (all.length > 0) {                 //que hago si encuentro autores?
            return res.status(200).json({   //envío al cliente una respuesta con los datos que quiera
                response:all,
                success:true,
                message:'you have requested GET /api/authors/',
                mindhub:'the best',
                date: new Date()
            })
        } else {                            //que hago si NO encuentro autores
            return next(createHttpError(404, 'No se encontraron autores'))
        }
    } catch (error) {                       //que hago si no puedo INTENTAR buscar algo y salta el catch
        next(error)
    }
}