const mongoose = require('mongoose')
const salarySchema = new mongoose.Schema({
    user_id: {
        type:Number,
        required: true
    },
    net_salary: {
        type: Number,
        required: true
    },
    basic_earning:{
        type: Number,
        required: true
    },
    da_earning:{
        type:Number
    },
    hra_earning:{
        type: Number
    },
    conveyance_earning:{
        type: Number
    },
    allowance_earning:{
        type: Number
    },
    medical_allowance_earning:{
        type: Number
    },
    other_earning:{
        type:Number
    },
    tds_deduction:{
        type: Number
    },
    esi_deduction:{
        type: Number
    },
    pf_deduction:{
        type: Number
    },
    leave_deduction:{
        type: Number
    },
    prof_tax_deduction: {
        type: Number
    },
    labour_welfare_deduction: {
        type: Number
    },
    other_deduction: {
        type: Number
    }

    


})
const SALARY = mongoose.model("salary", salarySchema)

module.exports = SALARY
