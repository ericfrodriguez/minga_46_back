import User from '../models/User.js'

async function accountExistsSignIn(req,res,next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = {
            id: user._id,
            email: user.email,
            photo: user.photo,
            password: user.password,
            role: user.role,
            is_verified: user.is_verified
        }
        return next()
    }
    return res.status(400).send('user does not exist!')
    //configurar un JSON con la respuesta normalizada
}

export default accountExistsSignIn