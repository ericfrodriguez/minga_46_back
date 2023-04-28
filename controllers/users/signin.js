import User from "../../models/User.js"
import jwt from 'jsonwebtoken'

let signin = async(req,res,next) => {
    //console.log(req.body)
    //console.log(req.user)
    try {
        await User.findOneAndUpdate(
            { email: req.body.email },
            //ademas los datos del usuario están en req.user (por el middleware)
            //{ email: req.user.email }
            { is_online: true }
        )
        const token = jwt.sign(
            {id: req.user.id},
            process.env.SECRET,		
            {expiresIn: 60*60*24}
        )
        const user = {
            email: req.user.email,
            photo: req.user.photo,
            role: req.user.role
        }
        return res.status(200).json({
            success: true,
            token,
            user
        })
    } catch (error) {
        next(error)
    }
}

export default signin