import Category from "../../models/Category.js"

let destroy = async(req,res,next) => {
    try {
        console.log(req.params)
        let destroyed = await Category.deleteOne({ name:req.params.name,color:req.params.color })
        if (destroyed.deletedCount) {
            return res.status(200).json({
                success: true,
                destroyed
            })
        } else {
            return res.status(404).json({
                success: false,
                message: ''
            })
        }
    } catch (error) {
        next(error)
    }
}

export default destroy