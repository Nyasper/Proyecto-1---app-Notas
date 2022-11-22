import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({path:'../../.env'})

export async function connect(){
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.achdeii.mongodb.net/notas`)
    console.log(`Connected success to MongoDB`)
    } catch (error) {
        console.log(error)
    }
}
    