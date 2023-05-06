import Category from "../../models/Category.js"

let one = async(req,res,next)=> {
    try {
        let one = await Category.findOne({ _id:req.params.category_id })
        return res.status(200).json({
            success: 'ok',
            response: one
        })
    } catch (error) {
        next(error)
    }
}

export default one