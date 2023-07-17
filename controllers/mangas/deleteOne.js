
import Manga from "../../models/Manga.js";
import createHttpError from "http-errors";

export default async (req, res, next)=> {
    let {id} = req.params
    try {
        let mangaDeleted = await Manga.deleteOne({_id:id})
        res.status(200).json({success:true,message:"delete successfully"})
    } catch (error) {
        return next(error)
    }
}