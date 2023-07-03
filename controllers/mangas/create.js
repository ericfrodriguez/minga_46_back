import Manga from '../../models/Manga.js'

export default async(req,res,next)=> {
    try {
        let one = await Manga.create(req.body)
        return res.status(201).json({
            success:true,
            message: 'manga id: '+one._id
        })
    } catch (error) {
        return next(error)
    }
}