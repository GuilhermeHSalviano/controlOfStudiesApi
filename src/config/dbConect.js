import mongoose from "mongoose"
import 'dotenv/config.js'

mongoose.connect(`${process.env.API_KEY}`)

let db = mongoose.connection

export default db