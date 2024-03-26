const mongoose = require('mongoose')

const overtimeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rate_type_id:{
        type:Number,
        required: true
    },
    rate:{
        type: Number,
        required: true
    }

},{
    timestamps: true
})

const OVERTIME = mongoose.model("overtime", overtimeSchema)

module.exports = OVERTIME
