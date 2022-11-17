import mongoose from "mongoose";


export async function connect(){
    try {
        await mongoose.connect('mongodb+srv://gonroot:C9jsaZcF@cluster0.achdeii.mongodb.net/notas')
    console.log('Connected success to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
    