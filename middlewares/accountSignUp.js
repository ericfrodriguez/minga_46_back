import User from '../models/User.js'

async function accountExistsSignUp(req,res,next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        return res.status(400).send('user already exist!')
        //deben responder CON UN JSON con la misma forma de los errores que estan armando
    }
    return next()
}

export default accountExistsSignUp