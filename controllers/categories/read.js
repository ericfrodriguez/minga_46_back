import Category from "../../models/Category.js"

let read = async(req,res)=> {
    try {
        let all = await Category.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: 'error'
        })
    }
}

export default read