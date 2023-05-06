import Manga from "../../models/Manga.js"

let one = async(req,res,next)=> {
    try {
        let one = await Manga.findOne({ _id:req.params.manga_id })
        return res.status(200).json({
            success: 'ok',
            response: one
        })
    } catch (error) {
        next(error)
    }
}

export default one