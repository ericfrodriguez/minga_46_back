import Categories from '../models/Category.js'
export default async(req,res) => {
    try {
        let categories = await Categories.find()
        res.status(200).json(categories)
    } catch (error) {
        console.log(error)        
    }
}