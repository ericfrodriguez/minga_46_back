import Chapter from "../../models/Chapter.js"

let one = async(req,res,next)=> {
    try {
        let one = await Chapter.findOne({ _id:req.params.chapter_id })
        return res.status(200).json({
            success: 'ok',
            response: one
        })
    } catch (error) {
        next(error)
    }
}

export default one