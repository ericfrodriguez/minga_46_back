import User from "../../models/User.js"

export default async(req,res,next)=> {
    try {
        let one = await User.findOneAndUpdate(
            { email:req.body.email },   //objeto con las propiedades que se deben buscar (en este caso por email)
            { online:true },            //objeto con las propeidades a modificar del documento encontrado (en este caso ONLINE)
            { new:true }                //objeto de configuración, si está en TRUE devuelve el objeto MODIFICADO
        )
        delete one.password
        return res.status(200).json({
            success:true,
            message:'user signed in!',
            reponse: {
                user:one,
                token:req.token
            }
        })
    } catch (error) {
        return next(error)
    }
}