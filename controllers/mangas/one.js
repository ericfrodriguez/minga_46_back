import Manga from "../../models/Manga.js"

let one = async(req,res,next)=> {
    try {
        let { manga_id } = req.params
        //let one = await Manga.findOne({ _id:manga_id },'title cover_photo')
        let one = await Manga.findById(manga_id,'title -_id')
        return res.status(200).json({
            success: 'ok',
            response: one
        })
    } catch (error) {
        next(error)
    }
}

export default one