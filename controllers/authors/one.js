import Author from "../../models/Author.js"

let one = async(req,res,next)=> {
    try {
        let one = await Author.findOne({ _id:req.params.author_id })
        return res.status(200).json({
            success: 'ok',
            response: one
        })
    } catch (error) {
        next(error)
    }
}

export default one