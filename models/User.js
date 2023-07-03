import { Schema,model } from 'mongoose'

let collection = 'users'            //nombre de la coleccion donde se van a guardar todos los documentos
let schema = new Schema({           //molde de los datos que se van a guardar en esa coleccion
    email: { type:String,required:true },
    password: { type:String,required:true },
    photo: { type:String,required:true },
    role: { type:Number,default:0 },
    online: { type:Boolean,default:false },
    verified: { type:Boolean,default:true },    //en el sprint 5 esto cambia a false y se debe verificar la cuenta con el codigo de verificaciion
    verify_code: { type:String }
},{
    timestamps:true
})

let User = model(collection,schema)
export default User