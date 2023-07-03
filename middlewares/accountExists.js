import User from "../models/User.js"
//import createHttpError from "http-errors"
//lo correcto seria usar createHttpError

export default async(req,res,next)=> {
    try {
        let one = await User.findOne({ email:req.body.email })
        if (one) {
            return res.status(400).json({
                success:false,
                message: 'user registered!'
            })
        }
        return next()
    } catch (error) {
        return next(error)
    }
}