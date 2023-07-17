
import Manga from "../../models/Manga.js";
import createHttpError from "http-errors";

export default async (req, res)=> {
    let {id} = req.params;
    try {
        await Manga.updateOne({_id:id}, {title:req.body.title})
        res.status(200).json({message: "updated successfully", success: true});
    } catch (error) {
        return createHttpError("500",error.message);
    }
}