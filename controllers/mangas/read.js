import Manga from "../../models/Manga.js"

let read = async(req,res,next)=> {
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 5,
        page: 1
    }
    console.log(req.query)
    if (req.query.title) {
        queries.title = new RegExp(req.query.title.trim(),"i")
    }
    if (req.query.category_id) {
        queries.category_id = req.query.category_id.split(',')
    }
    if (req.query.author_id) {
        queries.author_id = req.query.author_id
    }
    if (req.query.order) {
        sort.title = req.query.order
    }
    if (req.query.page) {
        pagination.page = req.query.page
    }
    if (req.query.limit) {
        pagination.limit = req.query.limit
    }
    console.log(sort)
    //queries.author_id = queries.author_id ?? null
    //queries.order = queries.order ?? 1
    //queries.category_id = queries.category_id ?? null
    //por default 1 ordena de menor a mayor
    //y -1 ordena de mayor a menor
    try {
        let all = await Manga
            .find(queries)
            .sort(sort)
            .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0) //desde donde pagino
            .limit(pagination.limit > 0 ? pagination.limit : 0)                   //hasta donde pagino
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default read