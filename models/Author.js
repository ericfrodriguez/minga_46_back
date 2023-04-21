import { Schema,model,Types } from "mongoose"

let schema = new Schema({
    name: { type:String,required:true },
    last_name: { type:String,required:false },
    city: { type:String,required:true },
    country: { type:String,required:true },
    date: { type:Date }, //por defecto es false si no aclaro que es requerido
    photo: { type:String,required:true },
    active: { type:Boolean,required:true },
    user_id: {
        type: Types.ObjectId,   //tipo de dato de mongoose para REFERENCIAR datos de una coleccción con datos de otra colección
        //(en este caso la colección de autores CON la colección de usuarios)
        ref: 'users',            //nombre de la colección con la cual se quiere REFERENCIAR el modelo
        required: true
    }
},{
    timestamps: true
})
let collection = 'authors'

let Author = model(schema,collection)
export default Author