import Category from '../../models/Category.js'

/* const update = async(req,res,next) => {
    try {
        let update = await Category.updateOne(
            { _id:req.params.id }, //objeto de busqueda de lo que se quiere modificar
            req.body //objeto con la modificacion (modifica una, dos o todas las propiedades que envie el cliente)
        )
        if (update.modifiedCount) {
            return res.status(200).json({
                success: true,
                message: 'updated',
                update
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found'
            })
        }        
    } catch (error) {
        next(error)
    }
}
 */

const update = async(req,res,next) => {
    try {
        //let update = await Category.findOneAndUpdate(
            //{ _id:req.params.id }, //objeto de busqueda
        let update = await Category.findByIdAndUpdate(
            req.params.id, //SOLO BUSCA POR _ID
            req.body, //objeto con las modificaciones
            { new:true } //opcional el objeto para que devuelva el objeto modificado o el objeto PREVIO a la modificacion
        )
        return res.status(200).json({
            success: true,
            update
        })
    } catch (error) {
        next(error)
    }
}

export default update