import Chapter from "../../models/Chapter.js"

let read = async(req,res,next)=> {
    try {
        let all = await Chapter.find().populate('manga_id','title')
        return res.status(200).json({
            success: 'ok',
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default read