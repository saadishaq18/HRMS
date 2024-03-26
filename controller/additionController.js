const ADDITION = require('../model/additionModel')
const {validationResult} = require('express-validator')

//Adding Addition
const handleaddAddition = async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()})
    }
    try{
        const addition = req.body
        const result = await ADDITION.create({
            employee_name: addition.employee_name,
            category_id: addition.category_id,
            unit_amount: addition.unit_amount,
            assignee_id: addition.assignee_id
        })
        if(!result) return res.status(400).json({error: "Some thing went wrong"})

        return res.status(201).json({message: "Addition added Successfully"})

    }
    catch(e){
        console.log("Error Adding Addition", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//Get Addition
const handleGetAddition = async (req, res) =>{
    try{
        const addition = await ADDITION.find({})
        if(!addition) return res.status(404).json({error: "Addition not found"})
        return res.status(200).json({message: addition})
    }
    catch(e){
        console.log("Error fetching addition", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//Get Addition by id
const handleGetAdditionById = async (req, res) => {
    const id = req.params.id
    try{
        const addition = await ADDITION.findOne({_id: id})
        if(!addition) return res.status(404).json({error: "Addition not found"})
        return res.status(200).json({message: addition})
    }
    catch(e){
        console.log("Error getting addition by Id")
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//update Addition 
const handleUpdateAddition = async (req,res) => {
    const id = req.params.id
    try{
        const addition = req.body
        const result = await ADDITION.findOneAndUpdate(
            {
                _id: id
            },
            addition,
            {
                new: true
            }
        )
        if(!result) return res.status(404).json({error: "addition not found"})

        return res.status(200).json({message:"Addition updated successfully"})
    }
    catch(e){
        console.log("Error updating Addition", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//Delete Addition
const handleDeleteAddition = async (req, res) => {
    const id = req.params.id
    try{
        const addition = await ADDITION.deleteOne({_id: id})
        if(!addition) return res.status(404).json({error: "addition not found"})

        return res.status(200).json({message: "Addition deleted successfully"})
    }
    catch(e){
        console.log("Error Deleting Addition", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

module.exports = {
    handleaddAddition,
    handleGetAddition,
    handleGetAdditionById,
    handleUpdateAddition,
    handleDeleteAddition
}