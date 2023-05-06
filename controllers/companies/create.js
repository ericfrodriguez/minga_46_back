import Company from '../../models/Company.js'

export default async(req,res,next) => {
    try {
        let one = await Company.create(req.body)
        return res.status(201).json({
            id: one._id,
            timestamps: one.createdAt
        })
    } catch (error) {
        next(error)
    }
}