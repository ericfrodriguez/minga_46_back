
import Manga from "../../models/Manga.js";
import createHttpError from "http-errors";

export default async (req, res)=> {
    try {
        let manga = await Manga.findById(req.params.id)
        res.status(200).json(manga);
    } catch (error) {
        return createHttpError("500",error.message);
    }
}