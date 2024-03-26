const mongoose = require('mongoose')

const additionSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true
    },
    category_id: {
        type: Number,
        required: true
    },
    unit_amount: {
        type: Number,
    
    },
    assignee_id: {
        type: Number,
        

    }
},
{
    timestamps:true
}
)

const ADDITION = mongoose.model("addition", additionSchema)

module.exports = ADDITION