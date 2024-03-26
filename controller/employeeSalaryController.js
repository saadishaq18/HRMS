const SALARY = require('../model/employeeSalaryModel')
const {validationResult} = require('express-validator')

// Adding Salary
const handleAddSalary = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()})
    }
    const salaryData = req.body
    
    try{
        const {user_id} = req.body
        const user = await SALARY.findOne({user_id})
        if(user){
            return res.status(409).json({error: "User already exist"})
        }
       

        const result = await SALARY.create({
            user_id: salaryData.user_id,
            net_salary:salaryData.net_salary,
            basic_earning:salaryData.basic_earning,
            da_earning: salaryData.da_earning,
            hra_earning:salaryData.hra_earning,
            conveyance_earning:salaryData.conveyance_earning,
            allowance_earning: salaryData.allowance_earning,
            medical_allowance_earning: salaryData.medical_allowance_earning,
            other_earning: salaryData.other_earning,
            tds_deduction: salaryData.tds_deduction,
            esi_deduction: salaryData.esi_deduction,
            pf_deduction: salaryData.pf_deduction,
            leave_deduction: salaryData.leave_deduction,
            prof_tax_deduction: salaryData.prof_tax_deduction,
            labour_welfare_deduction: salaryData.labour_welfare_deduction,
            other_deduction: salaryData.other_deduction

        })
        if(!result){
            return res.status(400).json({error: "Something went wrong"})
        }
        return res.status(201).json({message: "Salary added successfully"})
    }
    catch(e){
        console.log("Error adding Salary", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
    
}

//Get All Salary
const handleGetSalary = async (req,res) =>{
    try{
        const salary = await SALARY.find({})
        if(!salary){
            return res.status(404).json({error: "Salary not Found"})
        }
        return res.status(200).json({message: salary})
    }
    catch(e){
        console.log("Error Fetching Salary", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//Get Salary By Id
const handleGetSalaryById = async (req, res) => {
    const id = req.params.id
    try{
        const salary = await SALARY.findOne({_id: id})
        if(!salary){
            return res.status(404).json({error: "Salary not Found"})
        }
        return res.status(200).json({message: salary})
    }
    catch(e){
        console.log("Error fetching Salary by Id", e)
        return res.status(500).json({error: "Internal Server Error"})
    }
}

//Update Salary
const handleUpdateSalary = async (req,res) => {
    const id = req.params.id
    const salary = req.body
    try{
        const result = await SALARY.findOneAndUpdate(
            {
                _id : id
            },
            salary,
            {
                new: true
            }
        )
        if(!result){
            return res.status(404).json({error: "salary not found"})
        }
        return res.status(200).json({message: "Salary update successfully"})
    }
    catch(e){
        console.log("Error updating salary", e)
        return res.status(500).json({error: "Internal Server error"})
    }
}

module.exports = {
    handleAddSalary,
    handleGetSalary,
    handleGetSalaryById,
    handleUpdateSalary
}