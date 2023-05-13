import Category from "../../models/Category.js"

const destroy_one = async(req,res,next) => {
    try {
        let destroyed = await Category.findOneAndDelete({ _id:req.params.id })
        if (destroyed) {
            return res.status(200).json({
                success: true,
                destroyed
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default destroy_one