import Category from "../../models/Category.js"

async function update(req,res,next) {
    try {
        let response = await Category.findOneAndUpdate(
            { _id:req.params.id },
            req.body,
            { new:true }            //por default está en false y lo devuelve SIN MODIFICAR
        )
        console.log(response);
        if (response) {
            return res.status(200).json({
                success: true,
                message: 'modified',
                response
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default update