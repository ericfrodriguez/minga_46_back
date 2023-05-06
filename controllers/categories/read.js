import createHttpError from 'http-errors'
import Category from "../../models/Category.js"

let read = async(req,res,next)=> {
    try {
        let all = await Category.find()
        if (all.length===0) {
            return next(createHttpError(404, 'El recurso no se encontro'))
        }
        return res.status(200).json({
            success: 'ok',
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default read