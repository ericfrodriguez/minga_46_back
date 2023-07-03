import User from '../../models/User.js'

export default async (req, res, next) => {
    try {
        const one = await User.create(req.body);

        return res.status(201).json({
            response: one,
            success: true,
            message: 'User created'
        })
    } catch (error) {
        next(error)
    }
}