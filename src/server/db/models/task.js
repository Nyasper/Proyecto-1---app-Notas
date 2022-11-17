import {Schema,model} from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        required:false,
        trim:true  //limpia el string
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    done:{
        type:Boolean,
        default: false,
    },
},
{
    versionKey:false
})


export default model('Task' ,taskSchema)