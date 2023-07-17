import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
    let { title, category_id, order } = req.query
    let queries = {}
    let sort = {}
    if (title) {
        queries.title = { $regex: title, $options: "i" }
    }
    if (category_id) {
        queries.category_id = { $in: category_id.split(",") }
    }
    if (order) {
        sort.title = order
    }
    try {
        let mangas = await Manga.find(queries)
        .select("-createdAt -updatedAt -__v")
        .sort(sort)
        res.status(200).json({ mangas, success: true })
    } catch (error) {
        return next(error)
    }
}