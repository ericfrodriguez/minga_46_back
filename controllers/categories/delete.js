import Category from "../../models/Category.js"

async function destroy(req,res,next) {
    try {
        let response = await Category.deleteOne({ _id:req.params.id })
        if (response.deletedCount) {
            return res.status(200).json({
                success: true,
                message: 'deleted'
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

export default destroy