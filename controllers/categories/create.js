import Category from '../../models/Category.js'

export default async(req,res,next) => {
    try {
        let one = await Category.create(req.body)
        return res.status(201).json({
            id: one._id,
            timestamps: one.createdAt
        })
    } catch (error) {
        next(error)
    }
}