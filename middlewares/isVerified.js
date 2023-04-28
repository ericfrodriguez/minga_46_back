async function accountHasBeenVerified(req,res,next) {
    if (req.user.is_verified) {
        return next()
    }
    return res.status(400).send('has not been verified!')
    //enviar una respuesta con json
}

export default accountHasBeenVerified