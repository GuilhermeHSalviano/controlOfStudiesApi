import mongoose from "mongoose";

const studiesSchema = new mongoose.Schema(
    {
        date: {type: String, required: true},
        time: {type: String, required: true}
    },
    {versionKey: false}
)

const studies = mongoose.model('control-of-studies', studiesSchema)

export default studies

